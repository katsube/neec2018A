<?php
/**
 * Cookieをセットする
 */

//Cookieの有効時間
$expire_sec = 60;

//Cookieをセット
setcookie("foo", "bar", time()+$expire_sec);

?><!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="utf-8">
	<title>Cookieセット</title>
</head>
<body>
	<section>
		<h1>Cookieをセットしました</h1>
		<p><a href="confirm.php">確認する</a></p>
	</section>
</body>
</html>