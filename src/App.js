import { BrowserRouter, Routes, Route } from "react-router-dom";
import BikeDisplay from "./components/BikeDisplay";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Eor from "./pages/Eor";
import Glove from "./pages/Glove";
import BikeDetilas from "./pages/BikeDetials";
import Cart from "./pages/Cart";
import { useReducer, useState } from "react";
const data = { cartt: [] };
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, cartt: [...state.cartt, action.payload] };
    default:
      throw new Error("Unknown");
  }
}
function App() {
  const [cart, setcart] = useState(false);
  const [{ cartt }, dispatch] = useReducer(reducer, data);
  console.log(cartt);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cart={setcart} dispatch={dispatch} />}>
          <Route path="cart" element={<Cart cart={cart} item={cartt} />} />
        </Route>

        <Route path="bikeDetails" element={<BikeDetilas />} />

        <Route path="glove" element={<Glove />} />
        <Route path="*" element={<Eor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
