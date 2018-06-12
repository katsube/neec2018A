<?php
$sid = $_COOKIE['sessionid'];		//CookieからセッションIDを取得
$pid = $_GET['pid'];				//商品ID

//-------------------------------------
// ファイルに記録
//-------------------------------------
$file = sprintf('data/%s.txt', $sid);
$fp = fopen($file, 'a');
flock($fp, LOCK_EX);
fwrite($fp, implode(',', [$pid, time()]));
fwrite($fp, "\n");
flock($fp, LOCK_UN);
fclose($fp);

//-------------------------------------
// 成功
//-------------------------------------
echo json_encode(['status'=>true]);