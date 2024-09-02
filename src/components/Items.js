import { Link } from "react-router-dom";
import { useData } from "../contexts/ContextProvider";
import styles from "./Items.module.css";
import { useState } from "react";

function Items({ names, ref }) {
  const { data } = useData();
  const datas = data.filter((el) => el.name === names);
  const [selecting, setSelection] = useState("black");
  console.log(selecting);
  return (
    <div id="page1" className={styles.kind} ref={ref}>
      <div className={styles.widthc}>
        <h1>Tank Strap</h1>
        <ul className={styles.im}>
          {datas.map((el) =>
            el.tankpad.map((els) => (
              <Link to={`/FinalPage?color=${selecting}`}>
                <li className={styles.ls}>
                  <img src={`./Others/${els}`} alt="itmes" />
                  <div className={styles.centering}>
                    <span>
                      <p>{names} Tank Pads-UNION</p>
                    </span>
                    <select
                      value={selecting}
                      onChange={(e) => setSelection(e.target.value)}
                    >
                      <option value="Black">Black</option>
                      <option value="Brown">Brown </option>
                      <option value="Tan">Tan</option>
                    </select>
                  </div>
                </li>
              </Link>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Items;
