import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { supabase } from "@/lib/supabaseClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, provider } = req.query;
  if (provider !== "youtube") return res.status(400).send("Invalid provider");

  try {
    // 認可コードをアクセストークンに交換
    const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL,
      grant_type: "authorization_code",
    });

    const { access_token, refresh_token, expires_in } = tokenRes.data;

    // Supabaseに保存
    const { error } = await supabase.from("tokens").insert({
      provider: "youtube",
      access_token,
      refresh_token,
      expires_at: new Date(Date.now() + expires_in * 1000).toISOString(),
    });
    if (error) throw error;

    res.redirect("/dashboard");
  } catch (e: any) {
    console.error(e.response?.data || e.message);
    res.status(500).json({ error: "Token exchange failed" });
  }
}
