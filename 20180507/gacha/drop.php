<?php
$dsn      = 'mysql:dbname=G099A9999;host=localhost';
$id       = 'G099A9999';
$password = 'XXXXXXXX';

$dbh = new PDO($dsn, $id, $password);
$sth = $dbh->prepare('SELECT * FROM Chara WHERE id=?');
$sth->execute([rand(1,5)]);

$buff = $sth->fetch(PDO::FETCH_ASSOC);
echo json_encode($buff);
