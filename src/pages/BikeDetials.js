import { useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import styles from "./BikeDetails.module.css";
import Items from "../components/Items";
import Item2 from "../components/Item2";
import Item3 from "../components/Item3";

function BikeDetials() {
  const [datas] = useSearchParams();
  const d = datas.get("img");
  const name = datas.get("name");

  return (
    <div className={styles.all}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={d} alt="curretName" />
          <h1>{name}</h1>
          <div className={styles.itmes}>
            <button>TANK KNEE PADS</button>
            <button>SEAT COVERS</button>
            <h3>TANK STRAPS</h3>
          </div>
          <Items names={name} />
          <Item2 names={name} />
          <Item3 names={name} />
        </div>
      </div>
    </div>
  );
}

export default BikeDetials;
