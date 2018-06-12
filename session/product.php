<?php
$sessid = sha1(time());                 // セッションIDを作成(簡易版)
setcookie("sessionid", $sessid);        // CookieにセッションIDを食わせる
?><!DOCTYPE html>
<html>
<head>
	<title>商品一覧</title>
</head>
<body>
	<h1>商品一覧</h1>

	<table>
	<tr>
		<th>商品名</th><th>カート</th>
	</tr>
	<tr>
		<td>カレー</td>
		<td>
			<form><button type="button" data-pid="1" class="btn-cart">カートに追加</button></form>
		</td>
	</tr>
	<tr>
		<td>ナン</td>
		<td>
			<form><button type="button" data-pid="2" class="btn-cart">カートに追加</button></form>
		</td>
	</tr>
	<tr>
		<td>ラッシー</td>
		<td>
			<form><button type="button" data-pid="3" class="btn-cart">カートに追加</button></form>
		</td>
	</tr>
	</table>

	<script>
		const btnCart = document.querySelectorAll(".btn-cart");
		for(let i=0; i<btnCart.length; i++){
			btnCart[i].addEventListener("click", ()=>{
				let pid = btnCart[i].getAttribute("data-pid");		//pid = 商品ID(Product ID)
				let xhr = new XMLHttpRequest();
				xhr.open("GET", `add.php?pid=${pid}`, false);
				xhr.onload = ()=>{
					let response = xhr.responseText;
					let json     = JSON.parse(response);

					if(json['status']){
						alert("カートに追加しました");
					}
				}
				xhr.send();
			});
		}
	</script>
</body>
</html>
