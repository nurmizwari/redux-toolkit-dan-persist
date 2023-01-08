import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex bg-blue-500 justify-between px-8 h-14 items-center text-white ">
      <h1 className="text-2xl font-medium ">MyBlog</h1>
      <div className="flex justify-around w-40">
        <Link to={"/"}>Home</Link>
        <Link to={"add-post"}>Post</Link>
      </div>
    </nav>
  );
}
