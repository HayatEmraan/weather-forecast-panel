"use server";

import { cookies } from "next/headers";
import { auth } from "../firebase/fb.config";
export async function logout() {
  await cookies().delete("jwt");
  await auth.signOut();
}
