"use client";

import { logout } from "@/src/auth-actions";

export default function Login() {

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
