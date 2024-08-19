import styles from "./SlidingImg.module.css";
function SlidingImg() {
  return (
    <section className={styles.container}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          <img id="img-1" src="../Others/seat.jpg" alt="seat" />

          {/* <img id="img-2" src="Super-meteor.jpg" alt="meteor" /> */}
        </div>
        <div className={styles.sliderNav}>
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
        </div>
      </div>
      {/* <img src="Super-meteor.jpg" alt="meteor" />
      <img src="tankbag.jpg" alt="tank" /> */}
    </section>
  );
}

export default SlidingImg;
