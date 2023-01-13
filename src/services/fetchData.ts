import { http } from "./axios";

export async function fetchData() {
  try {
    const response = await http.get("http://localhost:3005/useritems");
    console.log(response, "dari services");
    return response;
  } catch (error) {
    console.log(error);
  }
}
