import style from "./BikeDisplay.module.css";
import { Link } from "react-router-dom";
import { useData } from "../contexts/ContextProvider";
import { useSelector } from "react-redux";
function BikeDisplay() {
  // const { data } = useData();
  const { data } = useData();
  return (
    <div className={style.edit}>
      <h1>Seacrh By Bike</h1>

      <ul className={style.col}>
        {data.map((el) => (
          <Link to={`/bikeDetails?img=${el.img}&name=${el.name}`}>
            <li className={style.over}>
              <img src={el.img} alt="interceptor" className={style.overlay} />
              <div className={style.text}>
                <h3>{el.name}</h3>
                <a href="as" className={style.link}>
                  shop now
                </a>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      {/* <img src="/interceptor.jpg" alt="interceptor" /> */}
    </div>
  );
}

export default BikeDisplay;
