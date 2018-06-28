<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>掲示板</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

<div id="contents">
	<header>
		<h1>掲示板</h1>
	</header>

	<article>
		<!-- 書き込み用フォーム -->
		<section>
			<h2>投稿フォーム</h2>
			<form id="newpost" action="write.php" method="POST">
				<div><input type="text" name="nickname" id="nickname" placeholder="ニックネーム"  value="<?= $_COOKIE['nickname']; ?>"></div>
				<div><textarea name="message" id="message" placeholder="メッセージ"></textarea></div>
				<button class="btn btn-primary">書き込む</button>
			</form>
		</section>
		<!-- /書き込み用フォーム -->

		<!-- 過去ログ -->
		<section id="logview">
			<h2>過去ログ</h2>
			<?php
				require_once('define.php');

				$fp = fopen(DATA_FILE, 'r');
				while( ($buff = fgets($fp)) !== false ){
					list($nickname, $message, $date) = explode("\t", trim($buff));

					printf('<article>');
					printf('<p class="nickname">%s</p>', $nickname);
					printf('<p class="message">%s <small>(%s)</small></p>', $message, $date);
					printf('</article>');
				}
				fclose($fp);
			?>
		</section>
		<!-- /過去ログ -->

	</article>

	<footer>
		<p><small>&copy; 2018 foobar.</small></p>
	</footer>
</div>


<script>
window.onload = ()=>{
	let nickname = document.querySelector("#nickname");
	let message  = document.querySelector("#message");

	/**
	 * 「投稿フォーム」で送信イベントが発生したら
	 */
	document.querySelector("#newpost").addEventListener('submit', (e)=>{
		// 入力チェック
		if(nickname.value.length === 0 || message.value.length===0){
			alert("ニックネームとメッセージは必須項目です");
			e.preventDefault();		// 送信をキャンセル
			return(false);
		}

		// 送信確認
		if( ! confirm('本当にこの内容で書き込んで良いですか？') ){
			e.preventDefault();		// 送信をキャンセル
			return(false);
 		}

		//Cookieにニックネームを書き込む
		document.cookie = `nickname=${encodeURIComponent(nickname.value)}; max-age=${60*60*24*30};`;
	});

	/**
	 * 「投稿フォーム」のテキストエリアにfocusされたら大きくする
	 */
	message.addEventListener('focus', ()=>{
		message.style.height = "150px";
	});
	message.addEventListener('blur', ()=>{
		if( message.value.length === 0){
			message.style.height = "50px";
		}
	});
}
</script>
</body>
</html>