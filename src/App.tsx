import React from "react";
import "./App.css";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddPost from "./components/AddPost";
import Login from "./components/Login";

function App() {
  return (
    <div className="App font-mono">
      <Navbar />
      <section className="max-w-2xl mx-auto m-8">
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
