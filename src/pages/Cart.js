import styles from "./Cart.module.css";
import { useData } from "../contexts/ContextProvider";
import { useEffect } from "react";
function Cart() {
  const { sidepanel, cartt, dispatch } = useData();
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
            <h2>Items In Your Cart</h2>
            <ul>
              {cartt.map((el) => (
                <li key={el.name}>
                  <div>
                    <img src={`${el.img}`} alt="proimg" />
                  </div>
                  <div>
                    <h3>{el.name}</h3>
                  </div>
                  <div>{el.price}</div>
                  <button
                    onClick={() =>
                      dispatch({ type: "cart/remove", payload: el })
                    }
                  >
                    &#x274C;
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
