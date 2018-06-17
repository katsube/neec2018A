/**
 * Socket.ioを使用したサーバーPush
 * (10秒経過するとイベントを起こす)
 * https://socket.io/get-started/
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
	res.sendFile(__dirname + '/push.html');
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

	//5秒毎にイベント
	setInterval(()=>{
			socket.emit('alert by server', '5秒経過しました');
		}
		, 1000 * 5
	);

	//切断
	socket.on('disconnect', (msg)=>{
		console.log('user disconnected');
	});
});

