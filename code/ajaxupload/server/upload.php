<?php
require(dirname(__FILE__) . '/include/Uploader.php');   // 引入所需要的文件上传类文件

$upload_dir = dirname(__FILE__) . '/upload_files/';     // 设置服务器文件上传目录

$uploader = new FileUpload('uploadfile');
$result   = $uploader->handleUpload($upload_dir);

if (!$result) {
    exit(json_encode(array('success' => false, 'msg' => $uploader->getErrorMsg())));
}

echo json_encode(array('success' => true));


