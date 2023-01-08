import React from "react";
import { useState } from "react";
import { addPost } from "../app/post/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { userType } from "../app/users/userSLice";

export default function AddPost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const users = useSelector((state: any) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTitle("");
    setContent("");
    if (title && content && userId) {
      dispatch(
        addPost({
          id: nanoid(),
          title: title,
          content: content,
          userId: userId,
          date: new Date().toISOString(),
        })
      );
      navigate("/");
    } else {
      alert("data harus diisi!");
    }
  };

  return (
    <div className="border p-5 rounded-md shadow-md ">
      <h1 className="font-bold text-xl mb-4">Add Post</h1>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col mb-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="border border-black outline-none px-3 rounded-md"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Penulis">Penulis</label>
          <select
            name=""
            id=""
            className="border  border-black rounded-md"
            onChange={(e) => setUserId(e.target.value)}
          >
            <option disabled selected>
              Pilih Penulis
            </option>
            {users.map((user: userType) => (
              <option key={user.id} value={user.id}>
                {user.user}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="content">Content</label>
          <textarea
            name=""
            id=""
            className="border border-black outline-none  py-2 px-3 rounded-md"
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <button
            className="border bg-blue-600 mt-4 rounded-xl py-1 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
