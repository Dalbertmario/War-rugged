import BikeDisplay from "../components/BikeDisplay";
import Navbar from "../components/Navbar";
import Recommendation from "../components/Recommendation";
import SlidingImg from "../components/SlidingImg";
import Highlight from "../components/Highlight";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
function Home({ cart, dispatch }) {
  return (
    <div>
      <Navbar car={cart} />
      <Outlet />
      <SlidingImg />
      <BikeDisplay />
      <Highlight />
      <Recommendation dispatch={dispatch} />
      <Footer />
    </div>
  );
}

export default Home;
