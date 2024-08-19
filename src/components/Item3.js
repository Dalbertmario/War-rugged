import styles from "./Items.module.css";
const data = [
  {
    name: "Interceptor 650",
    year: 2034,
    img: "/interceptor.jpg",
    ind: 1,
    seat: ["seat-1.jpg", "seat-half.jpg"],
    tankpad: ["tankpad.jpg", "tankpad-2.jpg"],
    tankstrap: ["tankstrap-1.jpg", "trankstrap-2.jpg", "trankstrap-2.jpg"],
  },
  {
    name: "Continetal GT650",
    year: 2024,
    img: "/gt650.jpg",
    seat: ["seat-1.jpg", "seat-half.jpg"],
    tankpad: ["tankpad.jpg", "tankpad-2.jpg"],
    tankstrap: ["tankstrap-1.jpg", "trankstrap-2.jpg"],
  },
  {
    name: "Duke 390",
    img: "duke.jpg",
    seat: ["seat-1.jpg", "seat-half.jpg"],
    tankpad: ["tankpad.jpg", "tankpad-2.jpg"],
    tankstrap: ["tankstrap-1.jpg", "trankstrap-2.jpg"],
  },
  {
    name: "aprila",
    img: "aprila.jpg",
    seat: ["seat-1.jpg", "seat-half.jpg"],
    tankpad: ["tankpad.jpg", "tankpad-2.jpg"],
    tankstrap: ["tankstrap-1.jpg", "trankstrap-2.jpg"],
  },
  {
    name: "ducati",
    img: "ducati.jpg",
    seat: ["seat-1.jpg", "seat-half.jpg"],
    tankpad: ["tankpad.jpg", "tankpad-2.jpg"],
    tankstrap: ["tankstrap-1.jpg", "trankstrap-2.jpg"],
  },
  {
    name: "harley",
    img: "harley.jpg",
    seat: ["seat-1.jpg", "seat-half.jpg"],
    tankpad: ["tankpad.jpg", "tankpad-2.jpg"],
    tankstrap: ["tankstrap-1.jpg", "trankstrap-2.jpg"],
  },
];
function Items({ names, ref }) {
  const datas = data.filter((el) => el.name === names);
  console.log(datas.map((el) => el.tankpad));
  return (
    <div id="page1" className={styles.kind} ref={ref}>
      <div className={styles.widthc}>
        <h1>Seat Covers</h1>
        <ul className={styles.im}>
          {datas.map((el) =>
            el.tankstrap.map((els) => (
              <li className={styles.ls}>
                <img src={`./Others/${els}`} alt="itmes" />
                <div className={styles.centering}>
                  <span>
                    <p>{names} Tank Pads-UNION</p>
                  </span>
                  <select>
                    <option>Black</option>
                    <option>Brown </option>
                    <option>Tan</option>
                  </select>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Items;
