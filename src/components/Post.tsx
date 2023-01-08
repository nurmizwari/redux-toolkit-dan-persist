import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { postType } from "../app/post/postSlice";
import Author from "./Author";
import TimeAgo from "./TimeAgo";
export default function Post() {
  const posts = useSelector((state: any) => state.posts);
  console.log(posts, "ini post dari post ");
  const users = useSelector((state: any) => state.users);
  console.log(users, "user dari post");

  return (
    <div>
      {posts.map((post: postType) => {
        return (
          <div key={post.id} className="border p-5 rounded-md mb-5 shadow-md">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <TimeAgo timestamp={post.date} />
            <p className="py-3">{post.content.substr(0, 100)}...</p>
            <p className="text-sm text-gray-500">
              Ditulis oleh <Author userId={post.userId} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
