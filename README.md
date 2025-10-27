# Short Poster Web – MVP

## セットアップ
1. Supabase プロジェクトを作成  
2. `.env.local` に環境変数を入力  
3. `npm install` を実行  
4. `npm run dev` でローカル起動（ http://localhost:3000 ）  
5. Google OAuth 等、各SNS接続の設定を行った上で `/api/oauth/start?provider=youtube` にアクセスして接続を試せる

## 次の拡張ポイント
- SNS 投稿機能（YouTube, X, Instagram, TikTok）  
- 動画アップロード／ffmpeg.wasm でブラウザ変換  
- 投稿ジョブ管理画面  
- AIサジェスト機能（タイトル／タグ自動生成）  
