"use server";

export async function updatebotdb(bot) {
  try {
    const fetchapi = await fetch("https://api.emraan.me/api/v1/update/bot", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bot),
    });
    return await fetchapi.json();
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}
