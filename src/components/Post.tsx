// import React, { ReactNode } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { postType } from "../app/post/postSlice";
// import { deletePost } from "../app/post/postSlice";
// import Author from "./Author";
// import TimeAgo from "./TimeAgo";
// export default function Post() {
//   const posts = useSelector((state: any) => state.posts);
//   console.log(posts, "ini post dari post ");
//   const users = useSelector((state: any) => state.users);
//   console.log(users, "user dari post");
//   const dispatch = useDispatch();

//   const hapus = (id: number) => {
//     dispatch(deletePost(id));
//   };

//   return (
//     <div>
//       {posts.map((post: postType) => {
//         return (
//           <div key={post.id} className="border p-5 rounded-md mb-5 shadow-md">
//             <h2 className="text-lg font-bold">{post.title}</h2>
//             {/* <TimeAgo timestamp={post.date} /> */}
//             <p className="py-3">{post.content.substr(0, 100)}...</p>
//             <p className="text-sm text-gray-500">
//               Ditulis oleh <Author userId={post.userId} />
//             </p>
//             <button
//               onClick={() => hapus(post.id)}
//               className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[30px]"
//             >
//               Hapus
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { postType } from "../app/post/postSlice";
import { deletePost } from "../app/post/postSlice";
import Author from "./Author";
import TimeAgo from "./TimeAgo";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const posts = useSelector((state: any) => state.posts);
  console.log(posts, "ini post dari post ");
  const users = useSelector((state: any) => state.users);
  console.log(users, "user dari post");
  const dispatch = useDispatch();

  const hapus = (id: number) => {
    dispatch(deletePost(id));
  };
  return (
    <div>
      {posts.map((post: postType) => {
        return (
          <Card sx={{ minWidth: 275, marginTop: 2, boxShadow: 2 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {post.title}
              </Typography>
              <Typography variant="h5" component="div">
                {post.content.substr(0, 100)}...
              </Typography>
              <Typography variant="body2">
                Ditulis oleh <Author userId={post.userId} />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => hapus(post.id)}
                size="large"
                variant="contained"
                sx={{ width: "100%" }}
              >
                Hapus
              </Button>
              {/* <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[30px]">
                Hapus
              </button> */}
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
