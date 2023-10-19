export async function deleteuserdb(id) {
  try {
    const fetchapi = await fetch("http://localhost:5000/api/v1/update/user", {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await fetchapi.json();
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}
