/**
 * Node.jsでREST API
 * (データストア)
 */

//--------------------------------------
// モジュール読み込み
//--------------------------------------
const port = 3000;							//自分のポート番号に変更
const app  = require('express')();
const http = require('http').Server(app);

//--------------------------------------
// データ保持用の変数
//--------------------------------------
let STORE = {
	   'apple': 'りんご'
	, 'banana': 'バナナ'
	, 'muscat': 'マスカット'
};

//--------------------------------------
// Webサーバ
//--------------------------------------
/**
 * Get
 */
app.get('/api/get.json', (req, res)=>{
	res.header('Content-type', 'application/json');
	res.send( JSON.stringify(STORE) );
});

/**
 * Set
 */
app.get('/api/set.json', (req, res)=>{
	let key   = req.query.key;
	let value = req.query.value;

	res.header('Content-type', 'application/json');
	if( key && value ){
		STORE[key] = value;
		res.send( JSON.stringify({'status':true}) );
	}
	else{
		res.send( JSON.stringify({'status':false}) );
	}
});

/**
 * Update
 */
app.get('/api/update.json', (req, res)=>{
	let key   = req.query.key;
	let value = req.query.value;

	res.header('Content-type', 'application/json');
	if( key in STORE ){
		STORE[key] = value;
		res.send( JSON.stringify({'status':true}) );
	}
	else{
		res.send( JSON.stringify({'status':false}) );
	}
});

/**
 * Remove
 */
app.get('/api/remove.json', (req, res)=>{
	let key = req.query.key;

	res.header('Content-type', 'application/json');
	if( key in STORE ){
		delete STORE[key];
		res.send( JSON.stringify({'status':true}) );
	}
	else{
		res.send( JSON.stringify({'status':false}) );
	}
});


/**
 * Webサーバ起動(listen開始)
 */
http.listen(port, ()=>{
	console.log(`listening on *:${port}`);
});
