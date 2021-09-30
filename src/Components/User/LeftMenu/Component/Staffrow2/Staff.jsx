import React, { useState } from "react";

import styles from "./Staff.module.css";
import cx from "classnames";

const Staff = () => {
  const [itemsIndex, setItemIndex] = useState(0);
  const [option, setOption] = useState([
    { name: "All" },
    { name: "Manager" },
    { name: "Reception" },
    { name: "Writer" },
    { name: "Chef" },
  ]);

  const [items, setItems] = useState([
    {
      name: "Subin Bhandari",
      desc: "Manager",
      image:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
    },
    {
      name: "Subin Bhandari",
      desc: "Manager",
      image:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
    },
    {
      name: "Subin Bhandari",
      desc: "Manager",
      image:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
    },
    {
      name: "Subin Bhandari",
      desc: "Manager",
      image:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
    },
    {
      name: "Subin Bhandari",
      desc: "Manager",
      image:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
    },
    {
      name: "Subin Bhandari",
      desc: "Manager",
      image:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
    },
    {
      name: "Subin Bhandari",
      desc: "Manager",
      image:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
    },
    {
      name: "Subin Bhandari",
      desc: "Manager",
      image:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
    },
    {
      name: "Subin Bhandari",
      desc: "Manager",
      image:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
    },
  ]);
  return (
    <div className={styles.maincontainer}>
      <div className={styles.headercontain}>
        <div className={styles.headerleft}>Staff</div>
        <div className={styles.headerright}>See All</div>
      </div>
      <div className={styles.itemcontainer}>
        {option.map((dat, index) => (
          <div
            className={cx(styles.itm, itemsIndex == index ? styles.active : 0)}
            onClick={() => setItemIndex(index)}
          >
            {dat.name}
          </div>
        ))}
      </div>
      <div className={styles.staffmaincontain}>
        {items.map((dat, index) => (
          <div className={styles.stafflistcontain}>
            <div>
              <img className={styles.image} src={dat.image}></img>
            </div>

            <div>
              <div className={styles.small1}>{dat.name}</div>
              <div className={styles.small2}>{dat.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
