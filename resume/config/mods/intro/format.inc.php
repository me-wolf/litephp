<?php
return array(
	'id' => 'introduce',
	'title' => '自荐信',
	'placeholder' => '请输入自荐信标题',
	'data' => array(
		'content' => array(
			'type' => 'html',
			'label' => '内容',
			'placeholder' => '请输入自荐信内容',
			'maxlength' => 2000,
			'require' => true
		),
		'signature' => array(
			'type' => 'string',
			'label' => '署名',
			'placeholder' => '署名',
			'maxlength' => 50,
			'require' => true
		),
		'date' => array(
			'type' => 'date',
			'label' => '',
			'placeholder' => '日期',
			'require' => true
		)
	)
);