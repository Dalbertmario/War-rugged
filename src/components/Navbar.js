import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBar.module.css";
function Navbar({ car }) {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <h3>War & Rugged</h3>
        <span></span>
      </div>

      <div className={styles.list}>
        <ul className={styles.lists}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/glove">Glove</NavLink>
          </li>
          <li>
            <NavLink to="/tankKnee">Tank knee Pads</NavLink>
          </li>
          <li>
            <NavLink to="/seat">Seat Cover</NavLink>
          </li>
          <li>
            <NavLink to="/panel">Side Panel Bags</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add-Ons</NavLink>
          </li>
          <li>
            <NavLink to="/pan">Panniers</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop All</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink onClick={() => car((el) => !el)} to="cart">
              cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
