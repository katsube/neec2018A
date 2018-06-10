/**
 * MySQLへの接続とINSERT分の発行及びトランザクション
 * https://github.com/mysqljs/mysql
 */

//-------------------------
// ライブラリ
//-------------------------
const mysql = require('mysql');

//-------------------------
// 接続
//-------------------------
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'G099A9999',				//学籍番号
	password : 'US6Zmt6b',				//パスワード
	port     : 3306,
	database : 'G099A9999'				//学籍番号
});
//connection.connect();

//-------------------------
// INSERT文の発行
//-------------------------
connection.beginTransaction( (error) => {
	//TRUNSACTIONを開始できなかったらエラー
	if (error){ throw error; }

	connection.query('INSERT INTO Gamesoft values(?,?)', [4,'The Legend of Zelda'],  (error, results, fields) => {
		//INSERTに失敗したらROLLBACK
		if (error) {
			connection.rollback( ()=>{
				throw error;
			});
		}

    	//COMMIT
    	connection.commit( (error)=>{
			//COMMITに失敗したらROLLBACK
			if (error) {
				connection.rollback( ()=>{
					throw error;
				});
			}
			//成功したら終了
			else{
				console.log("Suuceess insert!");
				process.exit(0);
			}
		});
	});
});

//-------------------------
// 切断
//-------------------------
//connection.end();
