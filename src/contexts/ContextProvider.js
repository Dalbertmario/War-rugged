import { createContext, useContext, useReducer } from "react";

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
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        cartt: [...state.cartt, action.payload],
        sidepanel: true,
      };
    case "sidepanel":
      return { ...state, sidepanel: true };
    case "sidepanel/close":
      return { ...state, sidepanel: false };
    case "cart/remove":
      return {
        ...state,
        cartt: state.cartt.filter((el) => el !== action.payload),
      };
    default:
      throw new Error("Unknown");
  }
}
const ContentProvider = createContext();

function ContextProvider({ children }) {
  const [{ cartt, sidepanel, data }, dispatch] = useReducer(reducer, initial);

  return (
    <ContentProvider.Provider value={{ dispatch, cartt, sidepanel, data }}>
      {children}
    </ContentProvider.Provider>
  );
}

function useData() {
  const data = useContext(ContentProvider);
  return data;
}
export { useData, ContextProvider };
