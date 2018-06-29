<?php
/**
 * ログイン認証 RESTfull API
 *
 */

//---------------------------------------
// アカウント情報を定義
//---------------------------------------
// 手を抜いてここに書いちゃいます。
$USER = [
	  'tarou'  => 'tGh8STb2'			//ランダム8桁
	, 'yamada' => 'QV2JpxpfZ7MkYvej'	//ランダム16桁
	, 'hanako' => 'apple'				//意味のある文字列 5桁
	, 'foobar' => 'kotirakatsusikakukamearikouenmaehashutujo'	//意味のある文字列 41桁
];

//---------------------------------------
// クエリーを取得
//---------------------------------------
$uid = $_REQUEST['uid'];
$pw  = $_REQUEST['pw'];

//---------------------------------------
// 結果を返却
//---------------------------------------
if( ! array_key_exists($uid, $USER) ){
	echo json_encode(['result'=>false, 'message'=>'存在しないIDです']);
}
else if( $USER[$uid] !== $pw ){
	echo json_encode(['result'=>false, 'message'=>'IDとパスワードが一致しません']);
}
else{
	echo json_encode(['result'=>true, 'message'=>'ログインしました']);
}
