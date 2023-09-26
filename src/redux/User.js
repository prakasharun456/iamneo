import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: "1",
      name: "Arun",
    },
  ],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      state.users = [
        ...state.users,
        { id: action.payload.id, name: action.payload.name },
      ];
    },
    remove: (state, action) => {
      state.users = [state.users.filter((u) => u.id !== action.payload)];
    },
  },
});

export const { add, remove, update } = userSlice.actions;
export default userSlice.reducer;
