"use client";

import { useActionState } from "react";
import Link from "next/link";
import { login } from "@/src/auth-actions";

export default function Login() {
  const [formState, formAction, isPending] = useActionState(login, {
    message: null,
    data: null,
  });

  return (
    <div>
      <h1>Rellene los siguientes datos</h1>
      <form action={formAction} className="container">
        <input required name="username" placeholder="Username"></input>
        <input required name="password" placeholder="Password"></input>
        <button disabled={isPending} type="submit">
          {isPending ? "Cargando..." : "Iniciar sesión"}
        </button>
        <p className="text-pink-500 text-xs italic">
          { formState?.message ? formState?.message + ": " : "" }{ formState?.data ?? "" }
        </p>
      </form>
      <Link href="/signup">Registrarse</Link>
    </div>
  );
}
