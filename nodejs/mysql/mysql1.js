/**
 * MySQLへの接続とSELECT文の発行
 * https://github.com/mysqljs/mysql
 */

/*
--------------------------------
■事前準備
--------------------------------
  1. 実習サーバ(neecbox.net)上でMySQLクライアントにログイン。
		※"G099A9999"とある箇所は自分の学籍番号に置き換えて実行する

		＄ mysql -u G099A9999 -p
    	Enter password:

  2. テスト用のテーブルを作成し、データを挿入する。
		USE G099A9999;

		CREATE TABLE Gamesoft(
			  id    integer
			, title varchar(64)
			, primary key(id)
		);

		INSERT INTO Gamesoft VALUES(1, 'PocketMonster');
		INSERT INTO Gamesoft VALUES(2, 'Splatoon');
		INSERT INTO Gamesoft VALUES(3, 'MarioKart');

  3. SELECT文を発行し正しく追加されているか確認する。
		mysql> SELECT * FROM Gamesoft;
		+----+---------------+
		| id | title         |
		+----+---------------+
		|  1 | PocketMonster |
		|  2 | Splatoon      |
		|  3 | MarioKart     |
		+----+---------------+
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
connection.connect();

//-------------------------
// SELECT文の発行
//-------------------------
connection.query('SELECT * FROM Gamesoft',  (error, rows, fields) => {
	if (error) {
		console.log('error: ' + error);
	}
	else{
		for(var i=0; i<rows.length; i++){
			console.log(rows[i]["id"] +":"+ rows[i]["title"]);
		}
		// var json = JSON.stringify(rows);
		// console.log(json);
	}
});

//-------------------------
// 切断
//-------------------------
connection.end();
