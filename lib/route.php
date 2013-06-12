<?php
define(ROUTE_MODE_NORMAL, 0);
define(ROUTE_MODE_PATH, 1);
define(ROUTE_MODE_REWRITE, 2);

/**
 * 获取path信息
 * @return string
**/
function get_path_info(){
	$uri = $_SERVER['REQUEST_URI'];
	$script_name = $_SERVER['SCRIPT_NAME'];
	$path_info = '';

	if(stripos($uri, $script_name) === 0){
		$path_info = substr($uri, strlen($script_name));
	} else {
		$script_path = preg_replace('/(.*\/)(.*?)$/ies', "'\\1'", $script_name);
		if(stripos($uri, $script_path) === 0){
			$path_info = substr($uri, strlen($script_path));
		}
	}

	$path_info = ltrim(rtrim($path_info, '/'), '/');
	if(strstr($path_info, '?') !== false){
		$path_info = substr($path_info, 0, strpos($path_info, '?'));
	}
	return $path_info;
}

/**
 * 解析GET请求
 * @param string &$page
 * @param string &$action
 * @param string &$params
**/
function parser_get_request(&$page='', &$action='', &$params=array()){
	preg_match('/(\w+)\.php$/i', $_SERVER['SCRIPT_FILENAME'], $match);
	$page = $match[1];

	switch(ROUTE_MODE){
		case ROUTE_MODE_REWRITE:
		case ROUTE_MODE_PATH:
			$path_info = get_path_info();
			preg_match('/(\w+)(\/|$)/', $path_info, $match);
			$action = $match ? $match[1] : null;

			$ps = explode('/', $path_info);
			$tmp = count($ps) > 1 ? array_slice($ps, 1) : array();

			$params = array();
			for($i=0; $i<=count($tmp); $i+=2){
				if($tmp[$i] !== NULL){
					$params[$tmp[$i]] = $tmp[$i+1];
				}
			}
			$params = array_merge($_GET, $params);
			break;

		case ROUTE_MODE_NORMAL:
		default:
			$action = $_GET[ROUTE_ACTION_KEY];
			unset($_GET[ROUTE_ACTION_KEY]);
			$params = $_GET;

	}

	$page = $page ?: ROUTE_DEFAULT_PAGE;
	$action = $action ?: ROUTE_DEFAUL_ACTION;
}

/**
 * 从$_GET中获取参数
 * @param string $key
 * @param string||array $rules
 * @param boolean $throwException
 * @return mix
 **/
function gets($key=null, $rules, $throwException=true){
	parser_get_request($p, $a, $data);

	if($key){
		filte_one($data[$key], $rules, $throwException);
	} else {
		filte_array($data, $rules, $throwException);
	}
	return $data;
}

/**
 * 从$_POST中获取参数
 * @param string $key
 * @param string||array $rules
 * @param boolean $throwException
 * @return mix
 **/
function posts($key=null, $rules, $throwException=true){
	$data = $_POST;
	if($key){
		filte_one($data[$key], $rules, $throwException);
	} else {
		filte_array($data, $rules, $throwException);
	}
	return $data;
}

/**
 * 路由
 * @param string $target
 * @param array $params
 * @return string
**/
function url($target='', $params=array()){
	list($page, $action) = explode('/', $target);
	$page = $page ?: ROUTE_DEFAULT_PAGE;
	$action = $action ?: ROUTE_DEFAUL_ACTION;
	$url = '';

	if(empty($params) && $page == ROUTE_DEFAULT_PAGE && $action == ROUTE_DEFAUL_ACTION){
		return APP_URL;
	}

	switch(ROUTE_MODE){
		case ROUTE_MODE_PATH:
			$url = APP_URL.$page.'.php'.(empty($params) && $action == ROUTE_DEFAUL_ACTION ? '' : '/'.$action);
			foreach($params as $k=>$p){
				$url .= "/".urlencode($k)."/".urlencode($p);
			}
			break;

		case ROUTE_MODE_REWRITE:
			$url = APP_URL.$page.(empty($params) && $action == ROUTE_DEFAUL_ACTION ? '' : '/'.$action);
			foreach($params as $k=>$p){
				$url .= "/".urlencode($k)."/".urlencode($p);
			}
			break;

		case ROUTE_MODE_NORMAL:
			default:
			$url = APP_URL.$page.'.php?'.ROUTE_ACTION_KEY.'='.$action;
			if($params){
				$url .= http_build_query($params);
			}
	}

	return $url;
}

/**
 * reload current page
 */
function reload(){
	return header('Location:'.$_SERVER['PHP_SELF'], true, 302);
}

/**
 * 获取当前访问url
 * @return string
 **/
function this_url(){
	$host = $_SERVER['HTTP_HOST'];
	$protocol = stripos($_SERVER['SERVER_PROTOCOL'], 'https') ? 'https://' : 'http://';
	$port = $_SERVER['SERVER_PORT'] == 80 ? null : $_SERVER['SERVER_PORT'];
	$uri = $_SERVER['REQUEST_URI'];
	return $protocol.$host.($port ? ':'.$port : '').$uri;
}

/**
 * 页面302跳转
 **/
function jump_to(){
	$args = func_get_args();
	$url = call_user_func_array('url', $args);
	header('Location:'.$url);
	die;
}