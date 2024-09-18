import styles from "./Cart.module.css";
import { useData } from "../contexts/ContextProvider";
import { useEffect, useState } from "react";
import Totaling from "../components/Totaling";
import { Link } from "react-router-dom";
function Cart() {
  const { sidepanel, cartt, dispatch } = useData();
  const [quantity, setquantity] = useState(1);
  useEffect(
    function () {
      dispatch({ type: "sidepanel" });
    },
    [cartt, dispatch]
  );

  return (
    <div className={styles.dis}>
      <div className={`${sidepanel ? styles.cart : styles.carting}`}>
        {sidepanel && (
          <div className={styles.i}>
            <button onClick={() => dispatch({ type: "sidepanel/close" })}>
              &#x274C;
            </button>
            <h2>SHOPPING BAG</h2>
            {cartt >= 0 ? (
              <h3>No products in the cart</h3>
            ) : (
              <h3>Items In Your Cart</h3>
            )}
            <ul>
              {cartt.map((el) => (
                <li key={el.name} className={styles.gg}>
                  <div className={styles.imgss}>
                    <img src={`${el.img}`} alt="proimg" />
                  </div>
                  <div className={styles.title}>
                    <h3>{el.name}</h3>
                  </div>
                  <div className={styles.quantity}>
                    <div>
                      <button onClick={() => setquantity((e) => e + 1)}>
                        +
                      </button>
                      <input
                        style={{ width: "38px", textAlign: "center" }}
                        value={quantity}
                        type="number"
                      />
                      <button
                        onClick={() => setquantity((e) => e > 0 && e - 1)}
                      >
                        -
                      </button>
                    </div>
                    <div className={styles.price}>
                      <h4>${el.price}</h4>
                    </div>
                  </div>

                  <div className={styles.btnss}>
                    <button
                      onClick={() =>
                        dispatch({ type: "cart/remove", payload: el })
                      }
                    >
                      &#x274C;
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Totaling />
      </div>
    </div>
  );
}

export default Cart;
