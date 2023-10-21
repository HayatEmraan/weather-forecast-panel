"use server";

export async function blockuserdb(id) {
  try {
    const fetchapi = await fetch(
      `https://api.emraan.me/api/v1/block/user?id=${id}`,
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
