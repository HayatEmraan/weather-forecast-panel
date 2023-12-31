"use server";

export async function deleteuserdb(id) {
  try {
    const fetchapi = await fetch(
      `https://api.emraan.me/api/v1/delete/user?id=${id}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await fetchapi.json();
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}
