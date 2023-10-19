export async function savedb(user) {
  try {
    const fetchapi = await fetch("http://localhost:5000/api/v1/post/admin", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await fetchapi.json();
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}
