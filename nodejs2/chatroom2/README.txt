ToDo:
  nodejs2/chatroom/ のソースコードを参考にして
  次の要件を満たすプログラムを作成してみましょう。

1. nodejs2/chatroom/ではルーム名を発言の度に毎回Node.jsへ渡すのをやめたい。
    仕様例
     ・"join"イベント時にどのユーザーがどの部屋にログインしたかをNode.js内で保持。
     ・"chat message"イベント時にNode.js内で保持した値を参照する。

2. nodejs2/chatroom/ではルーム名が固定だが、追加や削除を自由に行いたい
    仕様例
     ・ルーム名の一覧をNode.js内で保持
	 ・REST APIで参照/追加/削除する
