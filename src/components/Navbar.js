import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBar.module.css";
import { useData } from "../contexts/ContextProvider";
function Navbar({ car }) {
  const { sidepanel, dispatch } = useData();

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <h3>War & Rugged</h3>
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
        <li>
          <h4 onClick={() => dispatch({ type: "sidepanel" })}>cart</h4>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
