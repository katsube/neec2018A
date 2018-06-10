/**
 * node.jsで簡単なサーバを起動する
 * (パス設定の応用)
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
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/example2.html');
});

app.get('/image/:file', (req, res)=>{
	res.sendFile(__dirname + '/image/' + req.params.file);
});
