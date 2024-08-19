import styles from "./Highlight.module.css";
function Highlight() {
  return (
    <div className={styles.full}>
      <div className={styles.listing}>
        <h3>Exclusive Products</h3>
        <h3>Premium Packaging</h3>
        <h3>Free WorldWide Shipping</h3>
      </div>
    </div>
  );
}

export default Highlight;
