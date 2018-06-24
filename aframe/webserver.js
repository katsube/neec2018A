/**
 * Node.jsでローカルにWebサーバを立てる
 */


//--------------------------------------
// 定数
//--------------------------------------
const port = 3000;							//自分のポート番号に変更
const document_root = 'htdocs/';

//--------------------------------------
// モジュール読み込み
//--------------------------------------
const app  = require('express')();
const http = require('http').Server(app);


//--------------------------------------
// Webサーバ設定
//--------------------------------------
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/' + document_root + 'index.html');
});
app.get('/:file', (req, res)=>{
	res.sendFile(__dirname + '/' + document_root + req.params.file);
});
app.get('/:dir/:file', (req, res)=>{
	res.sendFile(__dirname + '/' + document_root + req.params.dir + '/' + req.params.file);
});

/**
 * Webサーバ起動(listen開始)
 */
http.listen(port, ()=>{
	console.log(`listening on *:${port}`);
});