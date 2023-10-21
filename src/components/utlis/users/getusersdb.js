"use server";

export async function getusersdb() {
  try {
    const fetchapi = await fetch("https://api.emraan.me/api/v1/get/users", {
      method: "GET",
      cache: "no-cache",
      credentials: "include",
    });
    return await fetchapi.json();
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}
