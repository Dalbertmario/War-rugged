import {
  Outlet,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./BikeDetails.module.css";
import Items from "../components/Items";
import Item2 from "../components/Item2";
import Item3 from "../components/Item3";
import {
  Link as LinkScroll,
  animateScroll as scroll,
} from "react-scroll/modules";

function BikeDetials() {
  const [datas, setDatas] = useSearchParams();
  const d = datas.get("img");
  const name = datas.get("name");
  const scrollToKneePad = () => {
    scroll.scrollTo(500);
  };
  const scrollToSeat = () => {
    scroll.scrollTo(1100);
  };

  return (
    <div className={styles.all}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={d} alt="curretName" />
          <h1>{name}</h1>
          <div className={styles.itmes}>
            <button onClick={scrollToKneePad}>TANK KNEE PADS</button>
            <button onClick={scrollToSeat}>SEAT COVERS</button>
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
