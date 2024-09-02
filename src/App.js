import { BrowserRouter, Routes, Route } from "react-router-dom";
import BikeDisplay from "./components/BikeDisplay";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Eor from "./pages/Eor";
import Glove from "./pages/Glove";
import BikeDetilas from "./pages/BikeDetials";
import Cart from "./pages/Cart";
import { ContextProvider } from "./contexts/ContextProvider";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="bikeDetails" element={<BikeDetilas />} />
          <Route path="glove" element={<Glove />} />
          <Route path="*" element={<Eor />} />
          <Route path="FinalPage" element={<FinalPage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
