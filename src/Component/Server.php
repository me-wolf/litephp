<?php
namespace Lite\Component;

/**
 * ����������Ϣ��ȡ��
 * User: sasumi
 */
class Server {
    public static function inWindows(){
        return strtoupper(substr(PHP_OS, 0, 3)) === 'WIN';
    }
}