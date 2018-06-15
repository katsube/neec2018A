/**
 * Node.jsでREST API
 * (シンプル)
 */

//--------------------------------------
// モジュール読み込み
//--------------------------------------
const port = 3000;							//自分のポート番号に変更
const app  = require('express')();
const http = require('http').Server(app);

//--------------------------------------
// Webサーバ
//--------------------------------------
/**
 * Echoサーバ
 */
app.get('/api/echo', (req, res)=>{
	let now = new Date();

	res.send(
		  `<h1>${req.query.str}</h1>`
		+ `<p>${now.getTime()}</p>`
	);
});

/**
 * Echoサーバ (JSON版)
 */
app.get('/api/echo.json', (req, res)=>{
	let now = new Date();
	let json = {
		  str: req.query.str
		, time: now.getTime()
	};

	res.header('Content-type', 'application/json');
	res.send( JSON.stringify(json) );
});

/**
 * Webサーバ起動(listen開始)
 */
http.listen(port, ()=>{
	console.log(`listening on *:${port}`);
});
