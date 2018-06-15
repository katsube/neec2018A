/**
 * Socket.ioを使用した簡易チャット
 * (Room対応版)
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
/**
 * ベースとなるHTMLを返却
 */
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/chatroom.html');
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

	//部屋に入る
	socket.on('join', function(msg) {
		socket.join(msg.room);
		console.log('join: ' + JSON.stringify(msg));
	});

	//チャットメッセージ
	socket.on('chat message', (msg)=>{
		io.to(msg.room).emit('chat message', msg);
		console.log('message: ' + JSON.stringify(msg));
	});

	//切断
	socket.on('disconnect', (msg)=>{
		console.log('user disconnected');
	});
});

//--------------------------------------
// 共通関数
//--------------------------------------
function makeResponse(res, status, value=[]){
	let now = new Date();

	res.header('Content-type', 'application/json');
	res.send(JSON.stringify(
		{
			  'head':{'status':status, 'time':now.getTime()}
			, 'body': value
		}
	));
}
