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
- Supabase: ストレージバケット public を作る（公開 or プロテクトは後で調整）
- Supabase テーブル accounts（columns: id, user_id, provider, access_token_encrypted,refresh_token_encrypted, scopes, expires_at, raw, created_at）
- Supabase テーブル jobs（id, user_id, title, description, platforms json, source, status, created_at）
- Supabase service role key の使い方（envに入れて server-only にすること）
- デプロイ: Vercel + Supabase（Vercel の環境変数に secret を追加）。 
