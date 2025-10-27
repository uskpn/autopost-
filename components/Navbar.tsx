import React from "react";
import Link from "next/link";

export const Navbar: React.FC = () => (
  <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
    <Link href="/">Home</Link>{" | "}
    <Link href="/connect">Connect SNS</Link>{" | "}
    <Link href="/publish">New Post</Link>
  </nav>
);
