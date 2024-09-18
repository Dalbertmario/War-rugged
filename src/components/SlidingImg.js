import { useCallback, useMemo, useState } from "react";
import styles from "./SlidingImg.module.css";

function SlidingImg() {
  const img = useMemo(function () {
    return [
      "../Others/seat.jpg",
      "../Others/seat-half.jpg",
      "../Others/seat.jpg",
    ];
  }, []);

  const [increment, setImcement] = useState(0);
  function handelleft() {
    if (increment <= 2) {
      setImcement((el) => el + 1);
    }
  }
  function handelright() {
    increment >= 1 && setImcement((el) => el - 1);
  }
  console.log(increment);

 

  return (
    <section className={styles.container}>
      <div className={styles.sliderWrapper}>
        <button onClick={() => handelright()} className={styles.btn1}>
          {`<`}
        </button>
        <div className={styles.slider}>
          {img.map((el) => (
            <img src={el} alt="item" style={{ translate: -700 * increment }} />
          ))}

          {/* <img id="img-2" src="Super-meteor.jpg" alt="meteor" /> */}
        </div>
        <button onClick={() => handelleft()} className={styles.btn2}>
          {`>`}
        </button>
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
