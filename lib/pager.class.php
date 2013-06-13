<?php
class Pager {
	private static $instance_list;
	private $identify;
	private $page_info;
	private $config = array(
		'show_dot' => true,
		'num_offset' => 2,
		'page_size' => 10,
		'page_key' => 'page',
		'mode' => 'first,prev,num,next,last',

		'lang' => array(
			'page_first' => '第一页',
			'page_prev' => '上一页',
			'page_next' => '下一页',
			'page_last' => '最后一页',
			'page_info' => '共%s条记录, %d 页, 每页%i条记录',
			'page_jump' => '跳转到%s'
		),
	);

	private function __construct($identify, $config){
		$this->setConfig($config);
		$this->loadPageInfo();
	}

	public static function instance($identify='page', $config=array()){
		if(!self::$instance_list[$identify]){
			self::$instance_list[$identify] = new self($identify, $config);
		}
		return self::$instance_list[$identify];
	}

	public function setPageSize($num){
		return $this->setConfig(array('page_size'=>$num));
	}

	public function setConfig($config){
		$this->config = array_merge($this->config, $config);
		return $this;
	}

	public function getConfig($key = ''){
		return $key ? $this->config[$key] : $this->config;
	}

	public function setItemTotal($item_total = 0){
		$this->page_info['item_total'] = $item_total;
		$this->loadPageInfo();
		return $this;
	}

	public function getInfo($key = ''){
		return $key ? $this->page_info[$key] : $this->page_info;
	}

	public function getLimit(){
		$start = ($this->page_info['page_index']-1)*$this->page_info['page_size'];
		return array($start, $this->page_info['page_size']);
	}

	private function loadPageInfo(){
		$page_index = (int)gets($this->config['page_key'], array(), false);
		$page_index = $page_index > 0 ? $page_index : 1;
		$page_size = $this->getConfig('page_size');
		$item_total = (int)$this->getInfo('item_total');

		$page_total = (int)ceil($item_total / $page_size);

		$this->page_info['page_index'] = $page_index;
		$this->page_info['page_size'] = $page_size;
		$this->page_info['page_total'] = $page_total;
		return $this;
	}

	/**
	 * get specified page num index url
	 * @param {integer} $num
	 * @return {string}
	 */
	private function getUrl($num){
		parser_get_request($page, $action, $gets);
		if(!empty($gets)){
			foreach($gets as $key=>$get){
				if($key == $this->config['page_key']){
					unset($gets[$key]);
				}
			}
		}
		$gets[$this->config['page_key']] = $num;
		return url("$page/$action", $gets);
	}

	/**
	 * 转换字符串
	 * @return string
	 */
	public function __toString(){
		$page_modes = array_map('trim', explode(',', $this->config['mode']));
		$page_info = $this->getInfo();
		$page_config = $this->getConfig();
		$lang = $this->getConfig('lang');
		$html = '';

    	foreach($page_modes as $mode){
    		//first page
    		if($mode == 'first'){
    			if($page_info['page_index'] == 1){
    				$html .= '<span class="page_first">'.$lang['page_first'].'</span>';
    			} else {
    				$html .= '<a href="'.$this->getUrl(1).'" class="page_first">'.$lang['page_first'].'</a>';
    			}
    		}

    		//last page
    		else if($mode == 'last'){
    			$tmp = $lang['page_last'];
    			$tmp = str_replace('%d', $page_info['page_total'], $tmp);
    			if(empty($page_info['page_total']) || $page_info['page_index'] == $page_info['page_total']){
    				$html .= '<span class="page_last">'.$tmp.'</span>';
    			} else {
    				$html .= '<a href="'.$this->getUrl($page_info['page_total']).'" class="page_last">'.$tmp.'</a>';
    			}
    		}

    		//next page
    		else if($mode == 'next'){
    			$tmp = $lang['page_next'];
    			if($page_info['page_index'] < $page_info['page_total']){
    				$html .= '<a href="'.$this->getUrl($page_info['page_index']+1).'" class="page_next">'.$tmp.'</a>';
    			} else {
    				$html .= '<span class="page_next">'.$tmp.'</span>';
    			}
    		}

    		//prev page
    		else if($mode == 'prev'){
    			$tmp = $lang['page_prev'];
    			if($page_info['page_index'] > 1){
    				$html .= '<a href="'.$this->getUrl($page_info['page_index']-1).'" class="page_prev">'.$tmp.'</a>';
    			} else {
    				$html .= '<span class="page_prev">'.$tmp.'</span>';
    			}
    		}

    		//page num
    		else if($mode == 'num'){
				$offset_len = $page_config['num_offset'];
				$html .= '<span class="page_num">';
				$html .= (($page_info['page_index']-$offset_len>0) && $page_config['show_dot']) ? '<em>...</em>' : null;
				for($i=$page_info['page_index']-$offset_len; $i<=$page_info['page_index']+$offset_len; $i++){
					if($i>0 && $i<=$page_info['page_total']){
						$html .= ($page_info['page_index'] != $i) ? '<a href="'.$this->getUrl($i).'">'.$i.'</a>':'<em>'.$i.'</em>';
					}
				}
				$html .= (($page_info['page_index'] + $offset_len < $page_info['page_total'])
					&& $page_config['show_dot']) ? '<em>...</em>' : null;
				$html .= '</span>';
    		}

    		//page select
    		//need javascript enabled supporting
    		else if($mode == 'select' && $page_info['page_total'] > 0){
    			$html .= '<select size="1" onchange="location.href=this.value" class="page_sel">';
    			for($i=1; $i<=$page_info['page_total']; $i++){
    				$html .= '<option value="'.$this->getUrl($i).'" '.($page_info['page_index'] ==$i ? 'selected' : '').'> - '.$i.' - </option>';
    			}
    			$html .= '</select>';
    		}

    		//total
    		else if($mode == 'info'){
    			$html .= '<span class="page_info">';
    			$tmp = $lang['page_info'];
    			$tmp = str_replace('%s', $page_info['item_total'], $tmp);
    			$tmp = str_replace('%d', $page_info['page_total'], $tmp);
    			$tmp = str_replace('%i', $page_info['page_size'], $tmp);
    			$html .= $tmp;
    			$html .= '</span>';
    		}

    		//page input
    		//need javascript enabled supporting
    		else if($mode == 'input' && $page_info['page_total'] > 0){
    			$html .= '<span class="page_input">';
    			$html .= '<input type="text" size="2" id="page_input_txt" value="" '.
    					'onkeydown="var e = event||window.event; if(e.keyCode == 13){location.href=\''.$this->getUrl(0).'\' + this.value}"/>';
    			$html .= '<input type="button" class="page_btn" value="'.$lang['page_jump'].'" onclick="location.href=\''.
    					$this->getUrl(0).'\' + document.getElementById(\'page_input_txt\').value">';
    			$html .= '</span>';
    		}
    	}
    	return '<span class="pagination">'.$html.'</span>';
	}
}
?>