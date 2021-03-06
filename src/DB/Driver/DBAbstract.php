<?php
namespace Lite\DB\Driver;

use Lite\Core\Hooker;
use Lite\Core\PaginateInterface;
use Lite\Core\RefParam;
use Lite\DB\Query;
use Lite\Exception\BizException;
use Lite\Exception\Exception;
use function Lite\func\dump;

/**
 * Created by PhpStorm.
 * User: sasumi
 * Date: 2016/6/11
 * Time: 17:50
 */
abstract class DBAbstract{
	const EVENT_BEFORE_DB_QUERY = 'EVENT_BEFORE_DB_QUERY';
	const EVENT_AFTER_DB_QUERY = 'EVENT_AFTER_DB_QUERY';
	const EVENT_DB_QUERY_ERROR = 'EVENT_DB_QUERY_ERROR';
	const EVENT_BEFORE_DB_GET_LIST = 'EVENT_BEFORE_DB_GET_LIST';
	const EVENT_AFTER_DB_GET_LIST = 'EVENT_AFTER_DB_GET_LIST';
	const EVENT_ON_DB_QUERY_DISTINCT = 'EVENT_ON_DB_QUERY_DISTINCT';

	private static $in_transaction_mode = false;
	private static $instance_list = array();

	// select查询去重
	// 这部分逻辑可能针对某些业务逻辑有影响，如：做某些操作之后立即查询这种
	// so，如果程序需要，可以通过 Record::distinctQueryOff() 关闭这个选项
	private static $QUERY_DISTINCT = true;
	private static $query_cache = array();
	
	/**
	 * 单例
	 * @param array $config
	 * @return static
	 * @throws \Lite\Exception\Exception
	 */
	final public static function instance(array $config){
		$key = self::getInstanceKey($config);
		if(!self::$instance_list[$key]){
			/** @var self $class */
			$db_type = strtolower($config['type']) ?: 'mysql';
			$driver = strtolower($config['driver']) ?: 'pdo';

			if(($driver == 'mysql' || $driver == 'mysqli') && $db_type != 'mysql'){
				throw new Exception("database driver: [$driver] no fix type: [$db_type]");
			}

			switch($driver){
				case 'mysql':
					$ins = new DriverMySQL($config);
					break;

				case 'mysqli':
					$ins = new DriverMysqli($config);
					break;

				case 'pdo':
					$ins = new DriverPDO($config);
					break;

				default:
					throw new Exception("database config driver: [$driver] no support", 0, $config);
			}
			self::$instance_list[$key] = $ins;
		}
		return self::$instance_list[$key];
	}

	/**
	 * database config
	 * @var array
	 */
	private $config = array();

	/**
	 * db record construct, connect to database
	 * @param array $config
	 */
	private function __construct($config){
		$this->config = $config;
		$this->connect($this->config);
	}

	/**
	 * get database config
	 * @param null $key
	 * @return array|mixed
	 */
	public function getConfig($key = null){
		return $key ? $this->config[$key] : $this->config;
	}

	/**
	 * get instance key
	 * @param array $config
	 * @return string
	 */
	private static function getInstanceKey(array $config){
		return md5(serialize($config));
	}

	/**
	 * turn on distinct query cache
	 */
	public static function distinctQueryOn(){
		self::$QUERY_DISTINCT = true;
	}

	/**
	 * turn off distinct query cache
	 */
	public static function distinctQueryOff(){
		self::$QUERY_DISTINCT = false;
	}

	/**
	 * begin all transaction
	 * @return array
	 */
	public static function beginTransactionAll(){
		self::$in_transaction_mode = true;
		$result_list = array();

		/* @var self $ins * */
		foreach(self::$instance_list as $ins){
			$result_list[] = $ins->beginTransaction();
		}
		return $result_list;
	}

	/**
	 * rollback all transaction
	 */
	public static function rollbackAll(){
		/* @var self $ins * */
		$result_list = array();
		foreach(self::$instance_list as $ins){
			$result_list[] = $ins->rollback();
		}
		return $result_list;
	}

	/**
	 * commit all transaction
	 * @return array
	 */
	public static function commitAll(){
		/* @var self $ins * */
		$result_list = array();
		foreach(self::$instance_list as $ins){
			$result_list[] = $ins->commit();
		}
		return $result_list;
	}

	/**
	 * cancel all transaction state
	 * @return array
	 */
	public static function cancelTransactionStateAll(){
		/* @var self $ins * */
		$result_list = array();
		foreach(self::$instance_list as $ins){
			$ins->cancelTransactionState();
		}
		self::$in_transaction_mode = false;
		return $result_list;
	}

	/**
	 * quote param by database connector
	 * @param string $data
	 * @param string $type
	 * @return mixed
	 */
	public function quote($data, $type = null){
		if(is_array($data)){
			$data = join(',', $data);
		}
		return addslashes($data);
	}

	/**
	 * quote array
	 * @param $data
	 * @param array $types
	 * @return mixed
	 */
	public function quoteArray(array $data, array $types){
		foreach($data as $k => $item){
			$data[$k] = $this->quote($item, $types[$k]);
		}
		return $data;
	}

	/**
	 * get data by page
	 * @param $query
	 * @param PaginateInterface|array|number $pager
	 * @return array
	 */
	public function getPage(Query $query, $pager = null){
		if($pager instanceof PaginateInterface){
			$total = $this->getCount($query);
			$pager->setItemTotal($total);
			$limit = $pager->getLimit();
		} else{
			$limit = $pager;
		}
		if($limit){
			$query->limit($limit);
		}
		$param = new RefParam(array(
			'query'  => $query,
			'result' => null
		));
		Hooker::fire(self::EVENT_BEFORE_DB_GET_LIST, $param);
		if(!is_array($param['result'])){
			if(self::$QUERY_DISTINCT){
				$param['result'] = self::$query_cache[$query.'']; //todo 这里通过 isFRQuery 可以做全表cache
			}
			if(!isset($param['result'])){
				$rs = $this->query($param['query']);
				if($rs){
					$param['result'] = $this->fetchAll($rs);
					if(self::$QUERY_DISTINCT){
						self::$query_cache[$query.''] = $param['result'];
					}
				}
			} else{
				Hooker::fire(self::EVENT_ON_DB_QUERY_DISTINCT, $param);
			}
			Hooker::fire(self::EVENT_AFTER_DB_GET_LIST, $param);
		}
		return $param['result'] ?: array();
	}

	/**
	 * get all
	 * @param Query $query
	 * @return mixed
	 */
	public function getAll(Query $query){
		return $this->getPage($query, null);
	}

	/**
	 * get one row
	 * @param Query $query
	 * @return array | null
	 */
	public function getOne(Query $query){
		$rst = $this->getPage($query, 1);
		if($rst){
			return $rst[0];
		}
		return null;
	}

	/**
	 * 获取一个字段
	 * @param Query $query
	 * @param string $key
	 * @return mixed|null
	 */
	public function getField(Query $query, $key){
		$rst = $this->getOne($query);
		if($rst){
			return $rst[$key];
		}
		return null;
	}

	/**
	 * 更新数量
	 * @param string $table
	 * @param string $field
	 * @param integer $offset_count
	 * @return boolean
	 */
	public function updateCount($table, $field, $offset_count = 1){
		$prefix = $this->config['prefix'] ?: '';
		$query = $this->genQuery();
		$sql = "UPDATE {$prefix}{$table} SET {$field} = {$field}".($offset_count>0 ? " + {$offset_count}" : " - {$offset_count}");
		$query->setSql($sql);
		$this->query($query);
		return $this->getAffectNum();
	}

	/**
	 * 数据更新
	 * @param string $table
	 * @param array $data
	 * @param string $condition
	 * @param int $limit
	 * @return int affect line number
	 * @throws \Lite\Exception\Exception
	 */
	public function update($table, array $data, $condition = '', $limit = 1){
		if(empty($data)){
			throw new BizException('NO UPDATE DATA FOUND');
		}
		$query = $this->genQuery()->update()->from($table)->setData($data)->where($condition)->limit($limit);
		$this->query($query);
		return $this->getAffectNum();
	}

	/**
	 * 删除数据库数据
	 * @param $table
	 * @param $condition
	 * @param int $limit 参数为0表示不进行限制
	 * @return bool
	 */
	public function delete($table, $condition, $limit = 0){
		$query = $this->genQuery()->from($table)->delete()->where($condition);
		if($limit != 0){
			$query = $query->limit($limit);
		}
		$result = $this->query($query);
		return !!$result;
	}

	/**
	 * 数据插入
	 * @param $table
	 * @param array $data
	 * @param null $condition
	 * @return mixed
	 * @throws \Lite\Exception\Exception
	 */
	public function insert($table, array $data, $condition = null){
		if(empty($data)){
			throw new Exception('NO INSERT DATA FOUND');
		}
		$query = $this->genQuery()->insert()->from($table)->setData($data)->where($condition);
		return $this->query($query);
	}

	/**
	 * 产生Query对象
	 * @return Query
	 */
	protected function genQuery(){
		$prefix = $this->config['prefix'] ?: '';
		$ins = new Query();
		$ins->setTablePrefix($prefix);
		return $ins;
	}

	/**
	 * sql query
	 * @param $query
	 * @return mixed
	 * @throws \Lite\Exception\Exception
	 */
	final public function query($query){
		$query .= '';
		try{
			Hooker::fire(self::EVENT_BEFORE_DB_QUERY, $query, $this->config);
			$result = $this->dbQuery($query);
			Hooker::fire(self::EVENT_AFTER_DB_QUERY, $query, $result);
			return $result;
		} catch(Exception $ex){
			Hooker::fire(self::EVENT_DB_QUERY_ERROR, $ex, $query, $this->config);
			throw new Exception($ex->getMessage(), null, array(
				'query' => $query,
				'host'  => $this->getConfig('host')
			));
		}
	}

	/**
	 * 执行查询
	 * @param $query
	 * @return mixed
	 */
	public abstract function dbQuery($query);

	/**
	 * 获取条数
	 * @param $sql
	 * @return mixed
	 */
	public abstract function getCount($sql);

	/**
	 * 获取操作影响条数
	 * @return mixed
	 */
	public abstract function getAffectNum();

	/**
	 * 获取所有记录
	 * @param $resource
	 * @return mixed
	 */
	public abstract function fetchAll($resource);

	/**
	 * 设置限额
	 * @param $sql
	 * @param $limit
	 * @return mixed
	 */
	public abstract function setLimit($sql, $limit);

	/**
	 * 获取最后插入ID
	 * @return mixed
	 */
	public abstract function getLastInsertId();

	/**
	 * 事务提交
	 * @return mixed
	 */
	public abstract function commit();

	/**
	 * 事务回滚
	 * @return mixed
	 */
	public abstract function rollback();

	/**
	 * 开始事务操作
	 * @return mixed
	 */
	public abstract function beginTransaction();

	/**
	 * 取消事务操作状态
	 * @return mixed
	 */
	public abstract function cancelTransactionState();

	/**
	 * connect to specified config database
	 * @param array $config
	 * @param boolean $re_connect 是否重新连接
	 * @throws Exception
	 * @return resource
	 */
	public abstract function connect(array $config, $re_connect = false);
}