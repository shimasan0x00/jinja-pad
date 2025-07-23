# Jinja Pad

Jinjaテンプレートの学習・テスト用Webアプリケーション。

![Jinja Pad](https://img.shields.io/badge/Jinja-Template%20Engine-337d37)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue)

## 概要

Jinja Padは、ブラウザ上でJinjaテンプレートを直接記述し、リアルタイムでレンダリング結果を確認できるWebアプリケーションです。Jinjaテンプレートエンジンの文法学習やテンプレートの動作確認に最適です。

## 機能

- 左右分割画面でテンプレート入力エリアと結果表示エリアを並列表示
- テンプレートとデータを入力してボタン1つでリアルタイムレンダリング
- 変数データをJSON形式で入力可能
- テンプレートやJSONの構文エラーを分かりやすく表示
- 初回アクセス時に学習用サンプルを自動表示
- モバイルデバイスでも快適に利用可能なレスポンシブデザイン

## 使い方

1. 左側の「テンプレート入力」エリアにJinjaテンプレートを記述
2. 「変数データ (JSON)」エリアにテンプレートで使用する変数をJSON形式で入力
3. 「レンダー実行」ボタンをクリック
4. 右側の「レンダリング結果」エリアに処理結果が表示

### キーボードショートカット

- `Ctrl + Enter`: テンプレートをレンダリング

## サポートするJinja機能

- 変数展開: `{{ variable }}`
- ループ処理: `{% for item in items %}`
- 条件分岐: `{% if condition %}`
- フィルター: `{{ variable | filter }}`
- ネストしたオブジェクト: `{{ object.property }}`

## デプロイ

このアプリケーションはGitHub Pagesでホストされており、以下のURLでアクセスできます。

- [Jinja Pad](https://shimasan0x00.github.io/jinja-pad/)

## 開発

```bash
# リポジトリをクローン
git clone https://github.com/shimasan0x00/jinja-pad.git
cd jinja-pad

# ローカルサーバーで実行（例：Python）
python -m http.server 8000

# ブラウザでアクセス
open http://localhost:8000
```

## 技術スタック

- HTML5/CSS3によるレスポンシブUI
- JavaScript (ES6+)によるフロントエンド機能
- NunjucksによるJinja2互換テンプレートエンジン
- GitHub Pagesによる静的サイトホスティング

## ライセンス

MIT License

## 貢献

プルリクエストやイシューの報告を歓迎します。

