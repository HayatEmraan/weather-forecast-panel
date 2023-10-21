"use server";
import { cookies } from "next/headers";
export async function savedb(user) {
  try {
    const fetchapi = await fetch("https://api.emraan.me/api/v1/post/admin", {
      method: "POST",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await fetchapi.json();
    await cookies().set("jwt", data?.data, {
      maxAge: 3600,
      path: "/",
      sameSite: "none",
      secure: true,
      httpOnly: true,
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}
