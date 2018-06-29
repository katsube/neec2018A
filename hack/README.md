# Hack
セキュリティホールを体験するためのサンプルコードです。フォルダ毎Webサーバへアップロードしてから動かしてください。

## XSS
クロスサイトスクリプティング(Cross Site Scripting)。実行前に`bbs.txt`のパーミションを`0666`などに設定してください。また他のサンプルからも呼び出されます。

* [IPA](https://www.ipa.go.jp/security/vuln/vuln_contents/xss.html)

## CSRF
クロスサイト・リクエスト・フォージェリ(Cross-site Request Forgery)。`index.html`へアクセスするとXSSのサンプルへ書き込みます。

* [IPA](https://www.ipa.go.jp/security/vuln/vuln_contents/csrf.html)

## パラメーター汚染
クエリのチェックを怠ると大変なことになる事例。実行前に`data/*.txt`のパーミションを`0666`などに設定してください。

## OSコマンドインジェクション
* [IPA](https://www.ipa.go.jp/security/vuln/vuln_contents/oscmd.html)

## SQLインジェクション
`lib.php`内にあるMySQLへログインする際のDB名やID/パスワードを自分の物に変更してください。また`setup.sql`内にあるSQLを実行する必要があります。

以下のようなURLを作成してアクセスします。
> http://(ドメイン)/sqlinj/?category=%27%20OR%20%27A%27=%27A

categoryで指定している文字列は以下です。
> ' OR 'A'='A

* [IPA](https://www.ipa.go.jp/security/vuln/vuln_contents/sql.html)


## ブルートフォースアタック
brute force attack。
総当たり攻撃です。必ず*ローカル*で実行してください。

