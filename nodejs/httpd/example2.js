/**
 * node.jsで簡単なサーバを起動する
 * (GETパラーメーターを受け取る)
 */

//--------------------------------------
// モジュール読み込み
//--------------------------------------
const port = 3000;						//自分のポート番号に変更
const app  = require('express')();
const http = require('http').Server(app);

//--------------------------------------
// Webサーバ
//--------------------------------------
// Webサーバを起動
http.listen(port, ()=>{
	console.log(`listening on *:${port}`);
});

//--------------------------------------
// URL毎の処理を定義
//--------------------------------------
//ファイルを返却
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/example2.html');
});

//任意の文字列を返却
app.get('/hello', (req, res)=>{
	res.send('<h1>HelloWorld</h1>');
});

//渡されたクエリーをそのまま返却
app.get('/name', (req, res)=>{
	if(req.query.name){
		res.send('<h1>welcome to ' + req.query.name + ' </h1>');
	}
	else{
		res.send('Please input your name.');
	}
});
