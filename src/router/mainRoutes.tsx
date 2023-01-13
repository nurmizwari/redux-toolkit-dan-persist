import { RouteObject } from "react-router-dom";
import AddPost from "../components/AddPost";
import ProtectedRoutes from "./ProtectedRoutes";
import Post from "../components/Post";
import Login from "../components/Login";
import Api from "../components/Api";
// import loadable from "@loadable/component";

// const AddPost = loadable(() => import("@/components/AddPost"));

const mainRoutes: RouteObject = {
  path: "/",
  element: <ProtectedRoutes />,
  children: [
    {
      index: true,
      element: <Post />,
    },
    {
      path: "/add-post",
      element: <AddPost />,
    },
    {
      path: "/api",
      element: <Api />,
    },
  ],
};

export default mainRoutes;
