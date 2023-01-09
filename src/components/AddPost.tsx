// import React from "react";
// import { useState } from "react";
// import { addPost } from "../app/post/postSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
// import { userType } from "../app/users/userSLice";

// export default function AddPost() {
//   const [title, setTitle] = useState<string>("");
//   const [content, setContent] = useState<string>("");
//   const [userId, setUserId] = useState<string>("");

//   const users = useSelector((state: any) => state.users);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const submitHandler = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     setTitle("");
//     setContent("");
//     if (title && content && userId) {
//       dispatch(
//         addPost({
//           id: nanoid(),
//           title: title,
//           content: content,
//           userId: userId,
//           date: new Date().toISOString(),
//         })
//       );
//       navigate("/");
//     } else {
//       alert("data harus diisi!");
//     }
//   };

//   return (
//     <div className="border p-5 rounded-md shadow-md ">
//       <h1 className="font-bold text-xl mb-4">Add Post</h1>
//       <form onSubmit={submitHandler}>
//         <div className="flex flex-col mb-4">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             className="border border-black outline-none px-3 rounded-md"
//             placeholder="Title"
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="Penulis">Penulis</label>
//           <select
//             name=""
//             id=""
//             className="border  border-black rounded-md"
//             onChange={(e) => setUserId(e.target.value)}
//           >
//             <option disabled selected>
//               Pilih Penulis
//             </option>
//             {users.map((user: userType) => (
//               <option key={user.id} value={user.id}>
//                 {user.user}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="content">Content</label>
//           <textarea
//             name=""
//             id=""
//             className="border border-black outline-none  py-2 px-3 rounded-md"
//             placeholder="Content"
//             onChange={(e) => setContent(e.target.value)}
//             value={content}
//           ></textarea>
//         </div>
//         <div className="flex flex-col">
//           <button
//             className="border bg-blue-600 mt-4 rounded-xl py-1 text-white"
//             type="submit"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
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
import { useState } from "react";
import { addPost } from "../app/post/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { userType } from "../app/users/userSLice";
import { Autocomplete, TextField } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const validationSchema = yup.object({
  title: yup
    .string()
    .max(10, "Must be 15 characters or less")
    .required("Required"),
  content: yup
    .string()
    .max(100, "Must be 15 characters or less")
    .required("Required"),
});

export default function AddPost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string | number | undefined>("");

  const users: userType[] = useSelector((state: any) => state.users);
  console.log(users, "users");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      users: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      console.log(values, "values formik");
      let obj = {
        id: nanoid(),
        title: values.title,
        content: values.content,
        userId: values.users.id,
      };
      dispatch(addPost(obj));
      navigate("/");
    },
  });

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          textAlign={"center"}
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          Add Post
        </Typography>
        <form action="" onSubmit={formik.handleSubmit}>
          <TextField
            sx={{ width: "100%" }}
            name="title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.title}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={users}
            sx={{ width: "100%", marginTop: 2 }}
            getOptionLabel={(option) => option.user}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            value={formik.values.users}
            onChange={(e, value) => {
              formik.setFieldValue("users", value);
            }}
            renderInput={(params) => <TextField {...params} label="Penulis" />}
          />
          {/* <CardActions> */}
          <TextField
            name="content"
            rows={5}
            multiline
            onChange={formik.handleChange}
            value={formik.values.content}
            aria-label="minimum height"
            // minRows={3}
            placeholder="Minimum 3 rows"
            style={{
              width: "100%",
              marginTop: 10,
            }}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <Button
            size="large"
            variant="contained"
            sx={{ width: "100%", marginTop: 2 }}
            type="submit"
          >
            POSTING
          </Button>
          {/* </CardActions> */}
        </form>
      </CardContent>
    </Card>
  );
}
