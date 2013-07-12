<?
include('../inc.php');
$p =array(
	'f' => 0,
	't' => 0,		
	'n' => 2 
);
$main = $c->getTimeline($p);//主页时间线

//拉取username的信息
$p =array(
	'f' => 0,
	't' => 0,		
	'n' => 2,
   	'name' => 'username'	
);
$user = $c->getTimeline($p);
//var_dump($c->getTimeline($p));
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
		<p class="title">getTimeline函数使用（获取主页时间线或用户消息）</p>
		<p>参数是一维数组：$arr['f'=>value,'t'=>value,'n'=>value,'name'=>value]
		f 分页标识（0：第一页，1：向下翻页，2向上翻页）</br>
		t: 本页起始时间（第一页 0，继续：根据返回记录时间决定）</br>
		n: 每次请求记录的条数（1-20条）</br>
		name: 用户名 空表示本人</br>
		</p>
		<h4>主页时间线</h4>
		<p class="title">示例代码:</p>
		<textarea class="codearea" rows="7" cols="50">
$p =array(
	'f' => 0,
	't' => 0,		
	'n' => 2 
);
print_r($c->getTimeline($p));
		</textarea>
		<div>
			<p>代码返回值：</p>
			<?php
				$c->printArr($main);
			?>
		</div>
		<h4>用户发表的时间线</h4>
		<p class="title">示例代码:</p>
		<textarea class="codearea" rows="8" cols="50">
$p =array(
	'f' => 0,
	't' => 0,		
	'n' => 2,
	'name' => 'username'	
);
$user = $c->getTimeline($p);
		</textarea>
		<p>代码返回值：</p>
		<?php
			$c->printArr($user);
		?>
	</div>
</body>
</html>
