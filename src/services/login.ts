import { http } from "./axios";

export async function login(email: string, password: string) {
  try {
    const response = await http.post("http://localhost:3005/login", {
      email,
      password,
    });
    console.log(response, "response dari axios login");

    if (response.status) {
      localStorage.setItem("access_token", response.data.access_token);
    }
    return response;
  } catch (error) {
    console.log(error);
  }
}
