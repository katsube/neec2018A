/**
 * node.jsで簡単なサーバを起動する
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
  res.sendFile(__dirname + '/example1.html');
});

app.get('/hello', (req, res)=>{
  res.send('<h1>HelloWorld</h1>');
});
