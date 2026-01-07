"use server";

import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db, users } from "@/src";
import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "@/src/sessions";

export async function login(prevState: any, formData: FormData) {
  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();

  try {
    if (username && password) {
      const user = await db
        .select()
        .from(users)
        .where(eq(users.username, username))
        .then((v) => v.at(0));

      const isPasswordValid = user
        ? await bcrypt.compare(password, user.password)
        : false;

      if (user && isPasswordValid) {
        await createSession(user.id);
        return {
			message: "Usuario existente"
		}
      }
    }
  } catch (e) {
    return {
      ...prevState,
      message: "Error",
      data: e instanceof Error ? e.message : String(e),
    };
  }
}

export async function signup(prevState: any, formData: FormData) {
  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();

  try {
    if (username && password) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await db
        .insert(users)
        .values({
          username: username,
          password: hashedPassword,
        })
        .returning()
        .then((v) => v.at(0));

      if (user) {
        await createSession(user.id);
		return {
			message: "Usuario creado"
		}
      }
    }
  } catch (e) {
    return {
      ...prevState,
      message: "Error",
      data: e instanceof Error ? e.message : String(e),
    };
  }
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
