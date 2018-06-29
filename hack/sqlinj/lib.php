<?php
/**
 * MySQLへ接続する
 *
 * @return void
 */
function connectDB(){
	$dsn  = 'mysql:dbname=G099A9999;host=127.0.0.1';	//学籍番号の箇所を変更
	$user = 'G099A9999';	//自分のIDに変更
	$pw   = 'XXXXXX';		//自分のパスワードに変更

	return( new PDO($dsn, $user, $pw) );
}

/**
 * MySQLからデータを取得
 *
 * @return array
 */
function getBBSRecords(string $category='任天堂'){
	$dbh = connectDB();
	$sth = $dbh->prepare("SELECT * FROM BBS WHERE category='$category'");
	$sth->execute();

	return(
		$sth->fetchAll(PDO::FETCH_ASSOC)
	);
}

/**
 * MySQLへデータ追加
 *
 * @param  string $name
 * @param  string $message
 * @param  string $category
 * @return boolean
 */
function setBBSRecords(string $name, string $message, string $category){
	$dbh = connectDB();
	$sth = $dbh->prepare("INSERT INTO BBS(nickname,msg,category,created) VALUES('$name', '$message', '$category', now())");

	return(
		$sth->execute()
	);
}