'use server';

import { getSession } from "@/src/sessions";
import { redirect } from "next/navigation";
import Signup from "@/components/auth/signup-form";

export default async function SignupPage() {
	const session = await getSession();
	if (session) redirect('/');

	return <Signup />
}
