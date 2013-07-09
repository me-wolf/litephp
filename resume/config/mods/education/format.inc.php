<?php
return array(
	'id' => 'education',
	'title' => '教育培训',
	'multiInstance' => true,
	'data' => array(
		'start' => array(
			'type' => 'yearmonth',
			'label' => '开始时间',
			'placeholder' => '开始时间(年-月)',
			'require' => true
		),
		'end' => array(
			'type' => 'yearmonth',
			'label' => '结束时间',
			'placeholder' => '结束时间(年-月)',
			'require' => true
		),
		'school' => array(
			'type' => 'string',
			'label' => '院校机构',
			'placeholder' => '学校、学院、其他教育机构',
			'maxlength' => 50,
			'require' => true
		),
		'specialty' => array(
			'type' => 'string',
			'label' => '专业',
			'placeholder' => '专业',
			'maxlength' => 20,
			'require' => false
		),
		'degree' => array(
			'type' => 'string',
			'label' => '学位',
			'placeholder' => '取得的认证',
			'maxlength' => 10,
			'require' => false
		),
		'description' => array(
			'type' => 'description',
			'label' => '描述',
			'placeholder' => '描述',
			'maxlength' => 200,
			'require' => true
		)
	)
);