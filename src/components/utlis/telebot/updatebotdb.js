export async function updatebotdb(bot) {
  try {
    const fetchapi = await fetch("http://localhost:5000/api/v1/update/bot", {
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
