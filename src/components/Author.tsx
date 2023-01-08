import React from "react";
import { useSelector } from "react-redux";
import { userType } from "../model";

export default function Author(userId: any) {
  const users = useSelector((state: any) => state.users);
  console.log(users, "dari users");
  const username = users.find(
    (user: userType) => user.id === Number(userId.userId)
  );

  return (
    <div>
      <span className=" underline">
        {username ? username.user : "penulis tidak dikenal"}
      </span>
    </div>
  );
}
