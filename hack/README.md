# Hack
セキュリティホールを体験するためのサンプルコードです。フォルダ毎Webサーバへアップロードしてから動かしてください。

## XSS
クロスサイトスクリプティング(Cross Site Scripting)。実行前に`bbs.txt`のパーミションを`0666`などに設定してください。また他のサンプルからも呼び出されます。

* [IPA](https://www.ipa.go.jp/security/vuln/vuln_contents/xss.html)

## CSRF
クロスサイト・リクエスト・フォージェリ(Cross-site Request Forgery)。`index.html`へアクセスするとXSSのサンプルへ書き込みます。

* [IPA](https://www.ipa.go.jp/security/vuln/vuln_contents/csrf.html)

## パラメーター汚染
クエリのチェックを怠ると大変なことになる事例。実行前に`data/*.txt`のパーミションを`0666`などに設定してください。

## OSコマンドインジェクション
* [IPA](https://www.ipa.go.jp/security/vuln/vuln_contents/oscmd.html)

## SQLインジェクション
* [IPA](https://www.ipa.go.jp/security/vuln/vuln_contents/sql.html)


## ブルートフォースアタック
