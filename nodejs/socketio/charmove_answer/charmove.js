/**
 * Socket.ioを使用したキャラ移動
 * https://socket.io/get-started/chat/
 */

//--------------------------------------
// モジュール読み込み
//--------------------------------------
const port = 3000;								//自分のポート番号に変更
const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);

//--------------------------------------
// Webサーバ
//--------------------------------------
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/charmove.html');
});
app.get('/image/:file', (req, res)=>{
	res.sendFile(__dirname + '/image/' + req.params.file);
});
http.listen(port, ()=>{
	console.log(`listening on *:${port}`);
});

//--------------------------------------
// Socket.io
//--------------------------------------
io.on('connection', (socket)=>{
	// 接続時のメッセージ
	console.log('a user connected');

	// ここにイベント処理を記述
	socket.on('movechar', (data)=>{
		io.emit('movechar', data);
		console.log('movechar: ' +  JSON.stringify(data));
	});

	// 切断
	socket.on('disconnect', ()=>{
		console.log('user disconnected');
	});
});