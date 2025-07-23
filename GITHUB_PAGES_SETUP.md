# GitHub Pages 初期設定ガイド

## エラーの原因

以下のエラーが発生した場合：
```
Error: Get Pages site failed. Please verify that the repository has Pages enabled and configured to build using GitHub Actions
Error: Not Found - https://docs.github.com/rest/pages/pages#get-a-apiname-pages-site
```

これは、リポジトリでGitHub Pagesがまだ有効化されていないことが原因です。

## 解決手順

### 1. GitHub Pages を有効化

1. GitHubリポジトリページに移動
2. **Settings** タブをクリック
3. 左サイドバーの **Pages** をクリック
4. **Source** セクションで **GitHub Actions** を選択
5. **Save** をクリック

### 2. 初回デプロイ実行

以下のいずれかの方法で初回デプロイを実行：

#### 方法A: 手動実行
1. リポジトリの **Actions** タブに移動
2. **Deploy to GitHub Pages** ワークフローを選択
3. **Run workflow** ボタンをクリック
4. **Run workflow** を実行

#### 方法B: PRマージ
1. フィーチャーブランチで変更を作成
2. mainブランチへのプルリクエストを作成
3. プルリクエストをマージ（自動デプロイが実行される）

### 3. 設定確認

初回デプロイ成功後：
- リポジトリの **Settings > Pages** で設定を確認
- **Your site is published at** に表示されるURL（`https://shimasan0x00.github.io/jinja-pad/`）でアクセス確認

## トラブルシューティング

### Pages設定が見つからない場合
- リポジトリがPublicであることを確認
- GitHub Pro/Team/Enterpriseアカウントの場合はPrivateリポジトリでも利用可能

### ワークフローが実行されない場合
- mainブランチにワークフローファイルがコミットされていることを確認
- **Actions** タブでワークフローが有効になっていることを確認

### デプロイ後にサイトが表示されない場合
- 数分待ってから再度アクセス（DNSの伝播に時間がかかる場合があります）
- ブラウザのキャッシュをクリア

## ワークフロー設定詳細

現在の設定では：
- **起動条件**: PRマージ時または手動実行時のみ
- **デプロイ先**: `https://shimasan0x00.github.io/jinja-pad/`
- **ソース**: GitHub Actions（自動ビルド・デプロイ）

## 追加情報

初回設定完了後は、`enablement: true` パラメータは不要になる可能性があります。正常にデプロイできるようになったら、この設定を削除できます。