import Navbar from "../components/Navbar";
import styles from "./Glove.module.css";

function Glove() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className={styles.glove}>
        <h1>Glove</h1>
        <img src="/gloves.jpg"></img>
      </div>
    </div>
  );
}

export default Glove;
