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
				<div><select name="category" id="category">
					<option value="任天堂">任天堂</option>
					<option value="SONY">ソニー</option>
					<option value="MS">MS</option>
				</select></div>
				<button>書き込む</button>
			</form>
		</section>
		<!-- /書き込み用フォーム -->

		<!-- 過去ログ -->
		<section id="logview">
			<h2>過去ログ</h2>
			<nav><a href="?category=%E4%BB%BB%E5%A4%A9%E5%A0%82">任天堂</a> | <a href="?category=SONY">ソニー</a> |<a href="?category=MS">MS</a></nav>
			<?php
				require_once('lib.php');

				$category = empty($_REQUEST['category'])?  '任天堂':$_REQUEST['category'];
				printf('<h3>%s</h3>', $category);

				$records = getBBSRecords($category);
				$len = count($records);
				for( $i=0; $i<$len; $i++){
					$nickname = $records[$i]['nickname'];
					$message  = $records[$i]['msg'];
					$date     = $records[$i]['created'];

					printf('<article>');
					printf('<p class="nickname">%s</p>', $nickname);
					printf('<p class="message">%s <small>(%s)</small></p>', $message, $date);
					printf('</article>');
				}
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
	let category = document.querySelector("#category");

	/**
	 * URLにカテゴリーが指定されている場合はプルダウンを自動セット
	 */
	(() => {
		let buff = location.search.match(/category=(.*?)(&|$)/);
		switch( buff[1] ){
			case '%E4%BB%BB%E5%A4%A9%E5%A0%82':
				category[0].selected = true;
				break;
			case 'SONY':
				category[1].selected = true;
				break;
			case 'MS':
				category[2].selected = true;
				break;
			default:
				// 何もしない
		}
	})();

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