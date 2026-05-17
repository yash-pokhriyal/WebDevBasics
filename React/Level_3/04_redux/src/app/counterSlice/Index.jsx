import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 1,
  reducers: {
    increaseby1: (state) => state + 1,
    increaseby10: (state) => state + 10,
    decreaseby1: (state) => state - 1,
    decreaseby10: (state) => state - 10,
    // jab hum neeche se data bhejte hain to wo data payload ke andar me aati hai
    increaseByValue: (state, action) => (state += action.payload),
  },
});

export const {
  increaseby1,
  increaseby10,
  decreaseby1,
  decreaseby10,
  increaseByValue,
} = counterSlice.actions;

export default counterSlice.reducer;