import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
function Cart({ cart, item }) {
  return (
    <div className={styles.dis}>
      <div className={cart && styles.cart}>
        {cart && (
          <div className={styles.i}>
            <h2>Items In Your Cart</h2>
            <ul>
              {item.map((el) => (
                <li key={el.name}>
                  <div>
                    <img src={`${el.img}`} alt="proimg" />
                  </div>
                  <div>
                    <h3>{el.name}</h3>
                  </div>
                  <div>{el.price}</div>
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
