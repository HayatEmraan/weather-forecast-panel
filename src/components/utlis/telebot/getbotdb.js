export async function getbotdb() {
  try {
    const fetchapi = await fetch("https://api.emraan.me/api/v1/get/bot", {
      method: "GET",
      cache: "no-cache",
      credentials: "include",
    });
    return await fetchapi.json();
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}
