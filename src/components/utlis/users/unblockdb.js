"use server";

export async function unblockdb(id) {
  try {
    const fetchapi = await fetch(
      `https://api.emraan.me/api/v1/unblock/user?id=${id}`,
      {
        method: "PATCH",
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
