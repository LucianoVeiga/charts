import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export type SessionPayload = {
  id: number;
};

export async function encrypt(payload: SessionPayload) {
  return (
    new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .sign(encodedKey)
  );
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify<SessionPayload>(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  if (!session) return undefined;
  const payload = await decrypt(session.value);
  return payload as SessionPayload;
}

export async function createSession(
  id: number
) {
  const expiration = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ id });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiration,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
