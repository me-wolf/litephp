<?
include('../inc.php');

//print_r($_POST);
if(isset($_POST['content']))
{
		$content = $_POST['content'];
		$ip = $_SERVER['REMOTE_ADDR'];
		if($_FILES['pic']['name'] != ''){
			$img = array($_FILES['pic']['type'],$_FILES['pic']['name'],file_get_contents($_FILES['pic']['tmp_name']));
		}else{
			$img = null;
		}
		
		$url = $_POST['url'];
		$title = $_POST['title'];
		$author = $_POST['author'];

		$st = (int) $_POST['st'];


		$rid = $_POST['rid'];

		$p =array(
			'c' => $content,
			'ip' => $ip, 
			'j' => '',
			'w' => '',
		);		
		if($st == -1){
			if($url == ''){
				$p['type'] = 1;
				if($img != null){
					$p['p'] = $img;
				}				
			}else{
				$p['u'] = $url;
				if($title == ''){
					$p['type'] = 6;	
				}else{
					$p['type'] = 5;
					$p['tit'] = $title;
					$p['a'] = $author;
				}
			}	
		}else{
			$p['r'] = $rid;
			switch($st){
				case 0:
					$p['type'] = 2;
					break;
				case 1:
					$p['type'] = 3;
					break;
				case 2:
					$p['type'] = 4;
					break;
			}	
		}
		$ret = $c->postOne($p);
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, width=device-width, user-scalable=no">
<link href="../css/style.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<div class="main">
	<p class="title">postOne函数使用（发表一条消息）</p>
	<p>参数是一维数组：$arr['c'=>value,'ip'=>value,'j'=>value,'w'=>value,'p'=>value,'r'=>value,'r'=>value,'r'=>value,'u'=>value,'tit'=>value,'a'=>value,'type'=>value]</br>
	c: 微博内容</br>
	ip: 用户IP(以分析用户所在地)</br>
	j: 经度（可以填空）</br>
	w: 纬度（可以填空）</br>
	p: 图片</br>
	r: 父id</br>
	u: Url:音乐地址</br>
	tit Title:音乐名</br>
	a Author:演唱者</br>
	type: 1 发表 2 转播 3 回复 4 点评 5 发音乐微博 6 发视频微博
	</p>
	<h4>发表一条微博</h4>
	<form action="" method="post" enctype="multipart/form-data" name="form1" id="form1">
	  <ul>
		<li>内容：<input type="text" name="content" id="content" /><label>示例程序：发布140字微博和图片内容不能为空</label></li>
		<li id="imgS">图片：<input type="file" name="pic" id="pic" /></li>
		<li id="urlS">视频或音乐URL: <input type="text" name="url" id="url" /><label>示例程序：如果是视频url就是发布视频微博，音乐url就是发布音乐微博</label></li>
		<li id="titleS">音乐标题: <input type="text" name="title" id="title" /><label>示例程序：发布音乐，音乐标题不能为空</label></li>
		<li id="authorS">音乐作者: <input type="text" name="author" id="author" /><label>示例程序：发布音乐，音乐作者不能为空</label></li>
	  </ul>
	  <h4></h4>
	  <ul>
		<li>转播&回复微博</li>
		<li>
			<select name="st" onchange="change(this.value)">
				<option value="-1">请选择转播还是回复</option>
				<option value="0">转播</option>
				<option value="1">回复</option>
				<option value="2">点评</option>
			</select>
		</li>
		<li>微博Id: <input type="text" name="rid" id="rid" /></li>
	  </ul>
	  <input type="submit" name="button" id="button" value="提交" />
	</form>
<script>
	function change(s){
		if(s<0){
			document.getElementById('imgS').style.display = 'block';		
			document.getElementById('urlS').style.display = 'block';		
			document.getElementById('titleS').style.display = 'block';		
			document.getElementById('authorS').style.display = 'block';		
		}else{ 
			document.getElementById('imgS').style.display = 'none';		
			document.getElementById('urlS').style.display = 'none';		
			document.getElementById('titleS').style.display = 'none';		
			document.getElementById('authorS').style.display = 'none';		
		}
	}
</script>
		
		<p class="title">示例代码:</p>
		<textarea class="codearea" rows="53" cols="120">
if(isset($_POST['content']))
{
		$content = $_POST['content'];
		$ip = $_SERVER['REMOTE_ADDR'];
		if($_FILES['pic']['name'] != ''){
			$img = array($_FILES['pic']['type'],$_FILES['pic']['name'],file_get_contents($_FILES['pic']['tmp_name']));
		}else{
			$img = null;
		}
		$url = $_POST['url'];
		$title = $_POST['title'];
		$author = $_POST['author'];
		$st = (int) $_POST['st'];
		$rid = $_POST['rid'];
		$p =array(
			'c' => $content,
			'ip' => $ip, 
			'j' => '',
			'w' => '',
		);		
		if($st == -1){
			if($url == ''){
				$p['type'] = 1;
				if($img != null){
					$p['p'] = $img;
				}				
			}else{
				$p['u'] = $url;
				if($title == ''){
					$p['type'] = 6;	
				}else{
					$p['type'] = 5;
					$p['tit'] = $title;
					$p['a'] = $author;
				}
			}	
		}else{
			$p['r'] = $rid;
			switch($st){
				case 0:
					$p['type'] = 2;
					break;
				case 1:
					$p['type'] = 3;
					break;
				case 2:
					$p['type'] = 4;
					break;
			}	
		}
		$ret = $c->postOne($p);
}	
		</textarea>
		<div>
			<?if($ret):?>
				<p>代码返回值：</p>
				<?php
					$c->printArr($ret);
				?>
			<?else:?>
				<p>提交表单查看返回值</p>
			<?endif?>
		</div>
	</div>
</body>
</html>
