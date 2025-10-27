import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // ここではシンプルに例として YouTube OAuth の開始 URL を返す
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback?provider=youtube`;
  const clientId = process.env.GOOGLE_CLIENT_ID!;
  const scope = encodeURIComponent("https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.readonly");
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&response_type=code&access_type=offline&prompt=consent`;
  res.status(200).json({ url });
}
