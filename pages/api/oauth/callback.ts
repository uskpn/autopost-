import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabaseClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, provider } = req.query;
  if (!code || !provider) {
    return res.status(400).send("Missing code or provider");
  }

  // ここで code を使ってトークン交換を行う（YouTube例）
  // 具体的には Google の token endpoint に POST して access_token, refresh_token を取得
  // 取得後、supabase に保存（users の account テーブルなどに）

  // 本番ではクライアントシークレットを隠す & サービスロールキーを使って保存
  // 簡略化なので省略

  res.status(200).send("OAuth callback received. You can close this window.");
}
