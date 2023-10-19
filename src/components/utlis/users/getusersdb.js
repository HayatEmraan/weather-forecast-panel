export async function getusersdb() {
  try {
    const fetchapi = await fetch("http://localhost:5000/api/v1/get/users", {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
    });
    return await fetchapi.json();
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}
