import { useRoutes } from "react-router-dom";
import mainRoutes from "./mainRoutes";
import LoginRouters from "./LoginRouters";
export default function ThemeRoutes() {
  return useRoutes([mainRoutes, LoginRouters]);
}
