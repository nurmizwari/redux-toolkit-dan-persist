import { createSlice } from "@reduxjs/toolkit";

export interface ApiType {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  AuthorId: number;
  CategoryId: number;
  createdAt: string;
  updatedAt: string;
}

const initialState: ApiType[] = [
  {
    id: 0,
    name: "",
    description: "",
    price: 0,
    imgUrl: "",
    AuthorId: 0,
    CategoryId: 0,
    createdAt: "",
    updatedAt: "",
  },
];

const api = createSlice({
  name: "api",
  initialState,
  reducers: {
    getData: (state, action) => {
      console.log(action.payload, "Action.payload");
      state.push(action.payload);
    },
  },
});

export const { getData } = api.actions;
export default api.reducer;
