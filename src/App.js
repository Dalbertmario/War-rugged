import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BikeDisplay from "./components/BikeDisplay";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Eor from "./pages/Eor";
import Glove from "./pages/Glove";
import BikeDetilas from "./pages/BikeDetials";
import Cart from "./pages/Cart";
import { ContextProvider } from "./contexts/ContextProvider";
import FinalPage from "./pages/FinalPage";
import Footer from "./components/Footer";
import ApplayOut from "./pages/ApplayOut";
import ViewCart from "./pages/ViewCart";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    element: <ApplayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [{ path: "cart", element: <Cart /> }],
      },

      { path: "bikeDetails", element: <BikeDetilas /> },
      { path: "glove", element: <Glove /> },
      { path: "FinalPage", element: <FinalPage /> },
      { path: "viewCart", element: <ViewCart /> },
      { path: "checkOut", element: <Checkout /> },
    ],
  },

  // {
  //   path: "/",
  //   element: <Home />,
  //   errorElement: <Eor />,
  //   children: [{ path: "cart", element: <Cart /> }],
  // },

  // { path: "bikeDetails", element: <BikeDetilas /> },
  // { path: "glove", element: <Glove /> },
  // { path: "FinalPage", element: <FinalPage /> },
]);
function App() {
  return (
    // <ContextProvider>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />}>
    //         <Route path="cart" element={<Cart />} />
    //       </Route>
    //       <Route path="bikeDetails" element={<BikeDetilas />} />
    //       <Route path="glove" element={<Glove />} />
    //       <Route path="*" element={<Eor />} />
    //       <Route path="FinalPage" element={<FinalPage />} />
    //     </Routes>
    //   </BrowserRouter>
    // </ContextProvider>
    //);
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
