/**
 * node.jsで簡単なサーバを起動する
 * (POSTパラーメーターを受け取る)
 */

//--------------------------------------
// モジュール読み込み
//--------------------------------------
const port = 3000;						//自分のポート番号に変更
const app  = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

//--------------------------------------
// Webサーバ
//--------------------------------------
// Webサーバを起動
http.listen(port, ()=>{
  console.log(`listening on *:${port}`);
});

//--------------------------------------
// POST取得データの処理
//--------------------------------------
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//--------------------------------------
// URL毎の処理を定義
//--------------------------------------
//ファイルを返却
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/example3.html');
});

//任意の文字列を返却
app.get('/hello', (req, res)=>{
  res.send('<h1>HelloWorld</h1>');
});

//渡されたクエリーをそのまま返却(GET)
app.get('/name', (req, res)=>{
	if(req.query.name){
		let html =   `<h1>welcome to ${req.query.name} </h1>`
				   + '<p>(GET method)</p>';
		res.send(html);
	}
	else{
		res.send('Please input your name.');
	}
});

//渡されたクエリーをそのまま返却(POST)
app.post('/name2', (req, res)=>{
	if (req.body.name) {
		let html =   `<h1>welcome to ${req.body.name} </h1>`
				   + '<p>(POST method)</p>';
		res.send(html);
	}
	else{
		res.send('Please input your name.');
	}
});