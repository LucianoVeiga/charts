'use server';

import { getSession } from "@/src/sessions";
import { redirect } from "next/navigation";
import Login from "@/components/auth/login-form";

export default async function LoginPage() {
    const session = await getSession();
    if (session) redirect('/');

    return <Login />
}
