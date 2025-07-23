# 作成したいもの
- Jinja Pad

## 概要
- WEBアプリケーション
- Jinjaテンプレートの文法理解を促進するアプリケーション
- 左半分でJinjaテンプレートを含む文字列，右側にレンダリング後の文字列が配置される画面構成
  - レンダリングボタンがあり，押すと別の場所にレンダリングされた文字列が表示される

## 要件
- GitHub Pagesで公開
- 画面で使用するメイン色は #337d37

## 実装完了済み

### ファイル構成
- `index.html` - メインのHTML構造（左右分割レイアウト）
- `style.css` - スタイルシート（指定色#337d37を使用）
- `script.js` - Jinjaテンプレートレンダリング機能
- `test-templates.md` - テスト用サンプルテンプレート集
- `.github/workflows/pages.yml` - GitHub Pages自動デプロイ設定

### 実装済み機能
- ✅ 左右分割画面レイアウト
- ✅ Jinjaテンプレート入力エリア
- ✅ レンダリング結果表示エリア
- ✅ JSONデータ入力フィールド
- ✅ レンダー実行ボタン
- ✅ クリアボタン
- ✅ エラー表示機能
- ✅ サンプルテンプレートの自動読み込み
- ✅ Ctrl+Enterショートカット
- ✅ レスポンシブデザイン
- ✅ GitHub Pages対応

### 技術スタック
- HTML5/CSS3によるレスポンシブUI
- JavaScript (ES6+)によるフロントエンド機能
- Nunjucks（Jinja2互換テンプレートエンジン）
- GitHub Pages静的サイトホスティング

### 対応Jinja機能
- 変数展開: `{{ variable }}`
- ループ処理: `{% for item in items %}`
- 条件分岐: `{% if condition %}`
- フィルター: `{{ variable | filter }}`
- ネストしたオブジェクト: `{{ object.property }}`

### デプロイ情報
- GitHub Pagesで自動デプロイ設定済み
- URL: https://shimasan0x00.github.io/jinja-pad/
- textlint による文書校正済み 