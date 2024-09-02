import { useData } from "../contexts/ContextProvider";
import styles from "./Recommendation.module.css";
function Recommendation() {
  const { dispatch } = useData();
  const recommedn = [
    {
      name: "Royal Enfield Classic 350 -120 Year limited edition",
      price: 2299,
      img: ["product-1.jpg"],
      option: ["Black", "Tabbaco Brown"],
    },
    {
      name: "The Slotshot",
      price: 999,
      img: ["product-2.jpg"],
      option: ["Vintage Tan", "Horrer Blue"],
    },
    {
      name: "Super Meteor 650 -black",
      price: 2599,
      img: ["product-3.jpg"],
      option: ["Crazy Black", "Bum"],
    },
  ];

  return (
    <div className={styles.pr}>
      <h1>Recommendation</h1>
      <div className={styles.all}>
        <ul className={styles.des}>
          {recommedn.map((el) => (
            <li>
              <div className={styles.new}>
                <img src={el.img[0]} alt="products" />
                <div className={styles.pda}>
                  <h5>{el.name}</h5>
                  <select className={styles.details}>
                    {el.option.map((els) => (
                      <option>{els}</option>
                    ))}
                  </select>
                </div>
                <strong>Rs{el.price}.00</strong>
                <button onClick={() => dispatch({ type: "add", payload: el })}>
                  Add-To-Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Recommendation;
