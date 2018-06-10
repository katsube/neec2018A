/**
 * Socket.ioを使用した簡易チャット
 * https://socket.io/get-started/chat/
 */

//--------------------------------------
// モジュール読み込み
//--------------------------------------
const port = 3000;							//自分のポート番号に変更
const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);

//--------------------------------------
// Webサーバ
//--------------------------------------
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/chat.html');
});
http.listen(port, ()=>{
	console.log(`listening on *:${port}`);
});

//--------------------------------------
// Socket.io
//--------------------------------------
io.on('connection', (socket)=>{
	//接続時のメッセージ
	console.log('a user connected');

	//チャットメッセージ
	socket.on('chat message', (msg)=>{
		io.emit('chat message', msg);
		console.log('message: ' + msg);
	});

	//切断
	socket.on('disconnect', ()=>{
		console.log('user disconnected');
	});
});

