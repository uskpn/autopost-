import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Short Poster Web (MVP)</h1>
      {user ? (
        <>
          <p>ログイン中: {user.email}</p>
          <button onClick={signOut}>サインアウト</button>
        </>
      ) : (
        <button onClick={signIn}>Googleでログイン</button>
      )}
    </div>
  );
}
