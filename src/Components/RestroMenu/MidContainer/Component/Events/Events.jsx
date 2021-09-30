import React, { useRef } from "react";
import styles from "./Events.module.css";
import Tasks from "../Tasks/Task";
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const Events = () => {
  const scroll = useRef(null);
  const handleScroll = (e) => {
    const container = scroll.current;
    const containerScrollPosition = scroll.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleleft}>Events</div>

        <div className={styles.titleright}>
          <div>
            <BsThreeDots className={styles.icon1} />
          </div>
          <div>
            <FaPlus className={styles.icon1} />
          </div>
        </div>
      </div>
      <div className={styles.title2}>
        <div className={styles.text1}>
          A board to keep track of persoal tasks.
        </div>
      </div>
      <div className={styles.slide} ref={scroll} onWheel={handleScroll}>
        <div className={styles.mapContain}>
          <Tasks /> <Tasks /> <Tasks /> <Tasks /> <Tasks /> <Tasks /> <Tasks />{" "}
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Events;
