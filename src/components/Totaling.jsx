import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Totaling.module.css";
import { useData } from "../contexts/ContextProvider";
function Totaling() {
  const [btn, setbtn] = useState(false);
  const { cartt, dispatch } = useData();
  console.log(cartt);
  const price = cartt.map((el) => el.price);
  const total = price.reduce((a, b) => a + b, 0);
  console.log(total);
  return (
    <div className={styles.carting}>
      <div className={styles.total}>
        <h3>SUBTOTAL</h3>
        <h3>{total > 0 && total} Rs</h3>
      </div>
      <div className={styles.coupon}>
        <button className={styles.btnc} onClick={() => setbtn((e) => !e)}>
          Have a coupuon?{" "}
        </button>
        {btn && (
          <div className={styles.couponin}>
            <input type="text" /> <button>Apply</button>
          </div>
        )}
      </div>
      <div className={styles.btns}>
        <Link to="/viewCart">
          <button onClick={() => dispatch({ type: "sidepanel/close" })}>
            VIEW CART
          </button>
        </Link>
        <Link to="/checkOut">
          <button onClick={() => dispatch({ type: "sidepanel/close" })}>
            CHECK OUT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Totaling;
