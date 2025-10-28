import type { NextApiRequest, NextApiResponse } from "next";
import querystring from "querystring";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const base = "https://accounts.google.com/o/oauth2/v2/auth";

  const query = querystring.stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL,
    response_type: "code",
    access_type: "offline", // ← refresh_tokenをもらう
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/youtube.upload",
      "https://www.googleapis.com/auth/youtube.readonly",
    ].join(" "),
  });

  res.redirect(`${base}?${query}`);
}
