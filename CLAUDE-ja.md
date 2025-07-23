# CLAUDE-ja.md

このファイルは、Claude Code（claude.ai/code）がこのリポジトリで作業する際のガイダンスを提供するものなのだ。

## 重要な注意事項

- 【必須】思考やコミュニケーションには英語を使用し、最終出力のみ日本語を使用することなのだ。
  - **語尾**: 日本語で出力する際には「なのだ」を使用することなのだ。
  - **注意**: 日本語で出力する際に「なのだ」が不自然な場合は、より自然な表現に変更してもよいのだ。
- CLAUDE.mdを更新する際は「CLAUDE-ja.md」も作成・更新し、CLAUDE.mdの日本語訳を記述することなのだ。
- CLAUDE.mdまたはCLAUDE-ja.mdを作成・更新した後は、textlintを実行して修正することなのだ。

## ファイル構成

Claude Codeで作業する際のルールなのだ：

- 長いプロンプトは `/your_workspace/.claude/prompts` ディレクトリ下の個別ファイルとして保存し、そこから参照することなのだ。
- 思考や処理の過程で作成した未使用の中間ファイルは `/your_workspace/.claude/tmp` ディレクトリに配置することなのだ。

### ファイル作成・編集ルール

- 新規作成するファイルは必ずプロジェクトフォルダ内のみに配置することなのだ。
- 作業の一時保存が必要な場合は「/your_workspace/.claude/tmp」フォルダを使用することなのだ。
- プロジェクトフォルダ外にファイルを作成しないことなのだ。
- プロジェクトフォルダ外のファイルを編集しないことなのだ。

## ブランチ管理 [重要 - 必須遵守]

⚠️ **必須ワークフロー - 例外なし**

コードファイルに変更を加える前に、必ず以下を実行することなのだ：

1. **最初のアクション**: `git branch` で現在のブランチを確認するのだ
2. **mainブランチにいる場合**: 即座にフィーチャーブランチを作成するのだ：
   ```bash
   git checkout -b feature/説明的な名前
   ```
3. **mainでの作業禁止**: mainブランチでの直接作業は厳格に禁止されているのだ

### 必須ワークフロー手順:
1. **開始**: `git checkout -b feature/タスク名`
2. **作業**: フィーチャーブランチですべての変更を行うのだ
3. **コミット**: コミットメッセージにClaudeCodeセッションIDを含めるのだ
4. **プッシュ**: `git push origin feature/タスク名`
5. **PR**: mainにマージするためのプルリクエストを作成するのだ

### Git Hooks設定:
`./setup-hooks.sh` を実行してこのワークフローを自動的に強制するgit hooksをインストールするのだ。

### ブランチ命名規則:
- ✅ `feature/jinja-pad-implementation`
- ✅ `feature/add-new-templates`  
- ✅ `feature/fix-responsive-design`
- ❌ `main` (ここで直接作業してはいけないのだ)
- ❌ `dev`, `develop` (feature/*パターンを使用するのだ)

## プロジェクトアーキテクチャ

Jinja Padは、Jinjaテンプレート文法の学習用静的HTML/CSS/JavaScriptアプリケーションなのだ。ビルドプロセスやパッケージマネージャは不要なのだ。

### 主要ファイル構造
- `index.html` - 左右分割レイアウトのメインアプリケーション
- `script.js` - Nunjucks（Jinja2互換）テンプレートエンジンを使用したアプリケーションロジック
- `style.css` - メイン色 #337d37 とレスポンシブデザインのスタイリング
- `test-templates.md` - 様々なJinja機能をテストするためのサンプルテンプレート集
- `.github/workflows/pages.yml` - GitHub Pages自動デプロイ設定

### 技術スタック
- **フロントエンド**: Pure HTML5/CSS3/JavaScript (ES6+)、フレームワークなし
- **テンプレートエンジン**: CDN（jsdelivr）経由で読み込まれるNunjucks
- **デプロイ**: 自動ワークフローによるGitHub Pages
- **ドキュメント**: textlintによる品質管理を伴う日本語重視

## 開発コマンド

### ローカル開発
```bash
# ローカルサーバーを起動（Node.js不要）
python -m http.server 8000
# http://localhost:8000 でアクセス
```

### ドキュメント品質
- textlintはMCPサーバー経由で設定されているのだ（.mcp.jsonを参照）
- ドキュメント変更をコミットする前にtextlintチェックを実行するのだ
- すべてのドキュメントは日本語なのだ

### デプロイ
- mainブランチへのプッシュで自動的にGitHub Pagesにデプロイされるのだ
- ライブURL: https://shimasan0x00.github.io/jinja-pad/

## アプリケーション機能

### 核となる機能
- 左パネル: JSONデータ入力付きのテンプレート入力
- 右パネル: エラー表示付きのレンダリング出力
- Ctrl+Enterショートカットによるリアルタイムレンダリング
- 初回訪問時のサンプルテンプレート自動読み込み
- モバイル対応のレスポンシブデザイン

### サポートされるJinja機能
- 変数展開: `{{ variable }}`
- ループ: `{% for item in items %}`
- 条件分岐: `{% if condition %}`
- フィルター: `{{ variable | filter }}`
- ネストされたオブジェクト: `{{ object.property }}`
- カスタムフィルター: length, first, last, join, replace

## 開発ノート

- これはビルドプロセスのない純粋な静的サイトなのだ
- 依存関係はCDN経由で読み込まれ、パッケージ管理は不要なのだ
- Jinjaテンプレート学習の教育用途に焦点を当てているのだ
- UI全体とドキュメントで日本語サポートを維持するのだ 