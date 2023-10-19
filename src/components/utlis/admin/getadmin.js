import { cookies } from "next/headers";

export async function getadmin() {
  try {
    const fetchapi = await fetch("http://localhost:5000/api/v1/get/admin", {
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
    throw new Error("Something went wrong!");
  }
}
