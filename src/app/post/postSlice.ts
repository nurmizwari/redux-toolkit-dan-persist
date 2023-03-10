import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export interface postType {
  id: number;
  title: string;
  content: string;
  userId: number;
  date: any;
}

const initialState: postType[] = [
  {
    id: 1,
    title: "post 1",
    content:
      "Sint amet velit consectetur fugiat non deserunt esse ad adipisicing fugiat eiusmod voluptate officia. Qui anim laboris ea voluptate duis esse. Nisi cupidatat officia reprehenderit magna non do deserunt sint fugiat. Proident laboris cupidatat cupidatat voluptate aliquip reprehenderit ut id duis minim proident Lorem ullamco eiusmod. Laborum sit incididunt eu velit non dolor et minim voluptate tempor. Tempor proident sit proident consectetur ipsum nisi sit aute.",
    userId: 1,
    date: dayjs(),
  },
  {
    id: 2,
    title: "post 2",
    content:
      "Non deserunt qui est esse cillum laboris reprehenderit proident sint fugiat laborum. Ex commodo incididunt enim Lorem non aute eu nulla. Ea reprehenderit veniam incididunt est Lorem nisi quis id veniam labore tempor velit. Aute et incididunt elit adipisicing. Duis consectetur et cupidatat qui nisi commodo eu aliquip ex. Eiusmod duis reprehenderit id sint culpa nulla adipisicing velit reprehenderit magna aliqua eu ad mollit. Laborum do esse sit sit sit aute voluptate.",
    userId: 2,
    date: dayjs(),
  },
];

const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      console.log(state, action);
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, deletePost } = post.actions;
export default post.reducer;
