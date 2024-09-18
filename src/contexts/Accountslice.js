import { createSlice } from "@reduxjs/toolkit";

const initial = {
  cartt: [],
  sidepanel: false,
  data: [
    {
      name: "Interceptor 650",

      year: 2034,
      img: "/interceptor.jpg",
      ind: 1,
      seat: ["seat-1.jpg", "seat-half.jpg"],
      tankpad: ["tankpad.jpg", "tankpad-2.jpg"],
      tankstrap: ["tankstrap-1.jpg", "trankstrap-2.jpg", "trankstrap-2.jpg"],
    },
    {
      name: "Continetal GT650",
      year: 2024,
      img: "/gt650.jpg",
      seat: ["seat-1.jpg", "seat-half.jpg"],
      tankpad: ["tankpad.jpg", "tankpad-2.jpg"],
      tankstrap: ["tankstrap-1.jpg", "trankstrap-2.jpg"],
    },
    {
      name: "Duke 390",
      img: "duke.jpg",
      seat: ["seat-1.jpg", "seat-half.jpg"],
      tankpad: ["tankpad.jpg", "tankpad-2.jpg"],
      tankstrap: ["tankstrap-1.jpg", "trankstrap-2.jpg"],
    },
    {
      name: "aprila",
      img: "aprila.jpg",
      seat: ["seat-1.jpg", "seat-half.jpg"],
      tankpad: ["tankpad.jpg", "tankpad-2.jpg"],
      tankstrap: ["tankstrap-1.jpg", "trankstrap-2.jpg"],
    },
    {
      name: "ducati",
      img: "ducati.jpg",
      seat: ["seat-1.jpg", "seat-half.jpg"],
      tankpad: ["tankpad.jpg", "tankpad-2.jpg"],
      tankstrap: ["tankstrap-1.jpg", "trankstrap-2.jpg"],
    },
    {
      name: "harley",
      img: "harley.jpg",
      seat: ["seat-1.jpg", "seat-half.jpg"],
      tankpad: ["tankpad.jpg", "tankpad-2.jpg"],
      tankstrap: ["tankstrap-1.jpg", "trankstrap-2.jpg"],
    },
  ],
};

const Accountslice = createSlice({
  name: "a",
  initial,
  reducer: {
    add(state, action) {
      state.cartt = [...state.cartt, action.payload];
    },
    sidepanel(state) {
      state.sidepanel = true;
    },
    sidepanelClose(state) {
      state.sidepanel = false;
    },
    cartRemove(state, action) {
      state.cartt = state.cartt.filter((el) => el !== action.payload);
    },
  },
});

export const { add, sidepanel, sidepanelClose, cartRemove } =
  Accountslice.actions;
export default Accountslice.reducer;
