import { cookies } from "next/headers";

export async function getadmin() {
  try {
    const fetchapi = await fetch("https://api.emraan.me/api/v1/get/admin", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("jwt")?.value}`,
      },
      cache: "no-cache",
    });
    return await fetchapi.json();
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong!");
  }
}
