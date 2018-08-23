<?php
return array(
    'params'=>array(
        "url_host"=>"oil.cyblive.com",//
        "weiXin_url"=>"http://oil.cyblive.com",//微信页面的URL
        "modPath" => "/data/www/framework",
        "block_interface_url"=>"http://172.19.71.100/api/contract", //区块链接口地址
        "block_browser_url"=>"http://101.132.40.88/fisco-bcos-browser",//区块链浏览器地址
    ),
    'components'=>array(
        'db'=>array(
            'class'=>'CDbConnection',
            'charset' => 'utf8',
            'tablePrefix'=>'t_',
            'connectionString' => 'mysql:host=rm-uf62usg5s5j4c4f4u.mysql.rds.aliyuncs.com;port=3306;dbname=db_new_oil',
            'username' => 'cyb',
            'password' => 'Ali@cyb99',
        ),
        'dbSlave'=>array(
            'class'=>'CDbConnection',
            'charset' => 'utf8',
            'tablePrefix'=>'t_',
            'connectionString' => 'mysql:host=rm-uf62usg5s5j4c4f4u.mysql.rds.aliyuncs.com;port=3306;dbname=db_new_oil',
            'username' => 'cyb',
            'password' => 'Ali@cyb99',
        ),
        'dbLog'=>array(
            'class'=>'CDbConnection',
            'charset' => 'utf8',
            'tablePrefix'=>'t_',
            'connectionString' => 'mysql:host=rm-uf62usg5s5j4c4f4u.mysql.rds.aliyuncs.com;port=3306;dbname=db_new_oil_log',
            'username' => 'cyb',
            'password' => 'Ali@cyb99',
        ),
        'db_history'=>array(
            'class'=>'CDbConnection',
            'charset' => 'utf8',
            'tablePrefix' => 't_',
            'connectionString' => 'mysql:host=rm-uf62usg5s5j4c4f4u.mysql.rds.aliyuncs.com;port=3306;dbname=db_oil_history',
            'username' => 'cyb',
            'password' => 'Ali@cyb99',
        ),
        'redis'=>array(
            'class'=>'CRedisCache',
            'serverConfigs'=>array(
                'dev'=>array('host'=>'r-uf6e0a344110d564.redis.rds.aliyuncs.com', 'port'=>6379, 'password'=>'Alicyb99'),
            ),
            'getIDC'=>array('dev'),
            'setIDC'=>'dev',
            'localIDC'=>'dev',
            'getRetryCount'=>2,
            'getRetryInterval'=>0,
            'setRetryCount'=>3,
            'setRetryInterval'=>0.2
        ),
        'log'=>array(
            'class'=>'CLogRouter',
            'routes'=>array(
                array(
                    'class'=>'CFileLogRoute',
                    'levels'=>'info, warning,error',
                    'LogDir'=>LOG_DIR,//此目录可配置,在此目录下，每天一个文件夹
                    'logFileName'=>'all.log'//记录日志的文件名可配置
                ),
                array(
                    'class'=>'CFileLogRoute',
                    'levels'=>'error',
                    'LogDir'=>LOG_DIR,//此目录可配置,在此目录下，每天一个文件夹
                    'logFileName'=>'error.log'//记录日志的文件名可配置
                ),
                array(
                    'class'=>'CFileLogRoute',
                    'levels'=>'error',
                    'LogDir'=>LOG_DIR,//此目录可配置,在此目录下，每天一个文件夹
                    'categories'=>'oil.import.log',
                    'logFileName'=>'oil.import.log'//记录日志的文件名可配置
                ),
            ),
        ),
        'amqp' => array(
            'class' => 'system.components.amqp.CAMQP',
            'host'  => '172.19.71.75',
            'login' => 'cyb',
            'password'=>'AliRoot)(*&',
        ),
        //微信企业号用户管理
        'weiXinUser'=>array(
            'class'=>'application.components.weixin.ZWeixinUser',
            'corp_id'=>'ww0f15b7e86e3ad77c',
            'secret'=>'Rdbsjpww9FvR-mypu-lG8M03fkdoeoH3I4rZuG-8Yok',
        ),
        //微信企业号消息发送
        'weiXinMsg'=>array(
            'class'=>'application.components.weixin.ZWeixinMsg',
            'corp_id'=>'ww0f15b7e86e3ad77c',
            'secret'=>'_l0Ky0Ejrp6DnFppWDxHCGGwfdAB3XfwTWyO_qavp0A',
            'agent_id'=>'1000005',
        ),

    )
);
?>
