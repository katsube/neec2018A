<?php
/**
 * 掲示板へ書き込む
 *
 **/

//-------------------------------------
// クエリーを取得
//-------------------------------------
$nickname = $_REQUEST['nickname'];
$message  = $_REQUEST['message'];
$category = $_REQUEST['category'];

// ファイルチェック
if( ! is_file($category) ){
	error('データファイルが存在しません');
}
if( ! is_writable($category) ){
	error('データファイルに書き込めません');
}

// 処理上、問題のある文字を削除/変換
$nickname = removeWhiteChar($nickname);
$message  = removeWhiteChar($message);


//-------------------------------------
// ファイルに書き込む
//-------------------------------------
$fp = fopen($category, 'a');
flock($fp, LOCK_EX);
fwrite($fp, implode("\t", [ $nickname, $message, date('Y-m-d H:i:s') ] ));
fwrite($fp, "\n");
flock($fp, LOCK_UN);
fclose($fp);

//-------------------------------------
// 移動する
//-------------------------------------
header(sprintf('Location: index.php?category=%s&rnd=%s', $category, rand(1, PHP_INT_MAX)));
exit(0);


/**
 * ホワイトキャラを削除/変換する
 *
 * @param  string $str
 * @return string
 */
function removeWhiteChar(string $str){
	$str = str_replace("\t", '', $str);			// "タブ"を削除
	$str = str_replace("\r", '', $str);			// "復帰"を削除 (Windowsは\r\nで改行)
	$str = str_replace("\n", '<br>', $str);		// "改行"を"<br>"に変換

	return($str);
}

/**
 * エラーを表示し終了する
 *
 * @param  string $msg
 * @return void
 */
function error(string $msg){
	echo $msg;
	exit(1);
}
