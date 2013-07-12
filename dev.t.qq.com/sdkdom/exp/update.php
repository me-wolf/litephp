<?
include('../inc.php');

if(isset($_POST['nick'])){
	$p = array(
		'nick' => $_POST['nick'],
		'sex' => (int) $_POST['sex'],
		'year' => (int) $_POST['year'],
		'month' => (int) $_POST['month'],
		'day' => (int) $_POST['day'],
		'countrycode' => $_POST['countrycode'],
		'provincecode' => $_POST['provincecode'],
		'citycode' => $_POST['citycode'],
		'introduction' => $_POST['introduction']
	);
	$ret = $c->updateMyinfo($p);
}
$my = $c->getUserInfo();
if($my['ret'] == 0){
	$mys = $my['data'];
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
		<p class="title">updateMyinfo函数使用（更新用户资料）</p>
		<p>参数是一维数组：$arr['c'=>value,'ip'=>value,'j'=>value,'w'=>value,'p'=>value,'r'=>value,'r'=>value,'r'=>value,'u'=>value,'tit'=>value,'a'=>value,'type'=>value]</br>
		nick: 昵称</br>
		sex: 性别1：男2：女</br>
		year:出生年 1900-2010</br>
		month:出生月 1-12</br>
		day:出生日 1-31</br>
		countrycode:国家码</br>
		provincecode:地区码</br>
		citycode:城市 码</br>
		introduction: 个人介绍
		</p>
		<h4>更新个人资料</h4>
		<form action="" method="post" enctype="multipart/form-data" name="form1" id="form1">
		  <ul>
		    <li>昵称：<input type="text" name="nick" id="nick" value="<?php echo $mys['nick'];?>" /></li>
			<li>性别：<input type="radio" name="sex" value="1" <?php if($mys['sex']==1){echo 'checked';}?> />男 <input type="radio" name="sex" value="2" <?php if($mys['sex']==2){echo 'checked';}?> />女</li>
			<li>出身年份: <input type="text" name="year" value="<?php echo $mys['birth_year'];?>" /></li>
			<li>出身月份: <input type="text" name="month" value="<?php echo $mys['birth_month'];?>" /></li>
			<li>出身日期: <input type="text" name="day" value="<?php echo $mys['birth_day'];?>" /></li>
			<li>国家: <input type="text" name="countrycode" value="<?php echo $mys['country_code'];?>" /></li>
			<li>省份: <input type="text" name="provincecode" value="<?php echo $mys['province_code'];?>" /></li>
			<li>地区: <input type="text" name="citycode" value="<?php echo $mys['city_code'];?>" /></li>
			<li>
				简介: 
				<textarea name="introduction"><?php echo $mys['introduction'];?></textarea>
			</li>
		  </ul>
  		  <input type="submit" name="button" id="button" value="提交" />
		</form>
		<p class="title">示例代码:</p>
		<textarea class="codearea" rows="13" cols="50">
$p = array(
	'nick' => $_POST['nick'],
	'sex' => (int) $_POST['sex'],
	'year' => (int) $_POST['year'],
	'month' => (int) $_POST['month'],
	'day' => (int) $_POST['day'],
	'countrycode' => 0,
	'provincecode' => 0,
	'citycode' => 0,
	'introduction' => $_POST['introduction']
);
$ret = $c->updateMyinfo($p);
		</textarea>
		<div>
			<p>代码返回值：</p>
			<?php
				$c->printArr($ret);
			?>
		</div>
		</div>
	</div>
</body>
</html>



