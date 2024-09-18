import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useData } from "../contexts/ContextProvider";
import Cart from "./Cart";

function ApplayOut() {
  const { sidepanel } = useData();
  return (
    <div>
      <Navbar />
      {sidepanel && <Cart />}
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ApplayOut;
