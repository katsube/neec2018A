<?php
/**
 * Cookieを受け取る
 */

//Cookieを受け取る
$foo = $_COOKIE['foo'];

?><!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="utf-8">
	<title>Cookieゲット</title>
	<style>
		#display{
			background-color: yellow;
		}
	</style>
</head>
<body>
	<section>
		<?php if($foo){ ?>
			<p>Cookie "foo"にセットされていたのは <span id="display"><?= $foo ?></span> です</p>
		<?php } else { ?>
			<p>Cookie "foo"を見つけられませんでした</p>
		<?php } ?>
	</section>
</body>
</html>