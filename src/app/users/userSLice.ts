import { createSlice } from "@reduxjs/toolkit";

export interface userType {
  id: number;
  user: string;
}

const initialState: userType[] = [
  {
    id: 1,
    user: "Penulis 1",
  },
  {
    id: 2,
    user: "Penulis 2",
  },
];

const users = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

// export const { addPost } = post.actions;
export default users.reducer;
