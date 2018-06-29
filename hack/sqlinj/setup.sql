/*--------------------------------------------
 * DB指定
 *--------------------------------------------*/
USE G099A9999;  /* 自分の学籍番号に変更 */

/*--------------------------------------------
 * テーブル定義
 *--------------------------------------------*/
CREATE TABLE BBS(
  id       integer  AUTO_INCREMENT,
  nickname varchar(128),
  msg      text(4096),
  category varchar(16),
  created  datetime,

  PRIMARY KEY (id)
);

/*--------------------------------------------
 * テストデータ挿入
 *--------------------------------------------*/
INSERT INTO BBS(nickname,msg,category,created) VALUES('マリオ', 'Mamma mia!!', '任天堂', now());
INSERT INTO BBS(nickname,msg,category,created) VALUES('井上トロ', '中トロうまいにゃ', 'SONY', now());
INSERT INTO BBS(nickname,msg,category,created) VALUES('???', 'ちょっとXX箱売ってくる！', 'MS', now());
