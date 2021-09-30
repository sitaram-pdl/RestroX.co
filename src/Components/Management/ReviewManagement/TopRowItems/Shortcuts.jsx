import React from "react";
import styles from "./Shortcuts.module.css";
import { FcGoogle } from "react-icons/fc";
const Shortcuts = () => {
  const option = [
    { name: "FoodHunter" },
    { name: "Google" },
    { name: "Yelp" },
    { name: "TripAdviser" },
    { name: "Zomato" },
    { name: "Foodmandu" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.mapcontain}>
        {option.map((dat) => (
          <div className={styles.displayflex}>
            <div>
              {" "}
              <FcGoogle className={styles.icon} />
            </div>
            <div className={styles.name}>{dat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shortcuts;
