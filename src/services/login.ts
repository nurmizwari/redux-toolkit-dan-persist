import { http } from "./axios";

export async function login(email: string, password: string) {
  try {
    const response = await http.post("http://localhost:3005/login", {
      email,
      password,
    });

    if (response.status) {
      localStorage.setItem("access_token", response.data.access_token);
    }
  } catch (error) {
    console.log(error);
  }
}
