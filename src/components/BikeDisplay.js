import { useState, useReducer } from "react";
import style from "./BikeDisplay.module.css";
import { Link } from "react-router-dom";

const data = [
  { name: "Interceptor 650", year: 2034, img: "/interceptor.jpg", ind: 1 },
  { name: "Continetal GT650", year: 2024, img: "/gt650.jpg" },
  { name: "Duke 390", img: "duke.jpg" },
  { name: "aprila", img: "aprila.jpg" },
  { name: "ducati", img: "ducati.jpg" },
  { name: "harley", img: "harley.jpg" },
];

function BikeDisplay() {
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
