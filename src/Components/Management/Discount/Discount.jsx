import React, { useState } from "react";
import styles from "./Discount.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiSelectMultiple } from "react-icons/bi";
import { HiSortDescending } from "react-icons/hi";

import cx from "classnames";

const Discount = () => {
  const [item, setItem] = useState([
    {
      name: "Chicken Pasta",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      time: "20 Minutes",
      rating: "4.8",
      price: "500",
    },
    {
      name: "Mo:Mo",
      image:
        "https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1",
      time: "10 Minutes",
      rating: "4.8",
      price: "200",
    },
    {
      name: "Ham and Cheese Club Sandwich",
      image:
        "https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg",
      time: "20 Minutes",
      rating: "4.8",
      price: "400",
    },
  ]);

  const option = [
    {
      name: "All",
    },
    {
      name: "Active",
    },
    {
      name: "Scheduled",
    },
    {
      name: "Expired",
    },
  ];
  const option2 = [
    {
      text: "Discount on items ( Normal Discount )",
      status: "Active",
      startDate: "15/07/2021",
      endDate: "18/07/2021",
      validDate: "All Week",
      type: "20% on non-veg dishes",
    },
    {
      text: "Free Pepsi on orders above Rs 250  ",

      status: "Expired",
      startDate: "15/07/2021",
      endDate: "18/07/2021",
      validDate: "All Week",
      type: "20% on non-veg dishes",
    },
    {
      text: "50% off on order above Rs 300",
      status: "Scheduled",
      startDate: "15/07/2021",
      endDate: "18/07/2021",
      validDate: "All Week",
      type: "20% on non-veg dishes",
    },
    {
      text: "50% off on order above Rs 300",
      status: "Active",
      startDate: "15/07/2021",
      endDate: "18/07/2021",
      validDate: "All Week",
      type: "20% on non-veg dishes",
    },
    {
      text: "50% off on order above Rs 300",
      status: "Expired",
      startDate: "15/07/2021",
      endDate: "18/07/2021",
      validDate: "All Week",
      type: "20% on non-veg dishes",
    },
    {
      text: "50% off on order above Rs 300",
      status: "Scheduled",
      startDate: "15/07/2021",
      endDate: "18/07/2021",
      validDate: "All Week",
      type: "20% on non-veg dishes",
    },
  ];
  const [itemsIndex, setItemIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.topLeft}>Discount & Order</div>
        <div className={styles.topRight}>
          <div className={styles.searchDiv}>
            <input className={styles.input} placeholder="Search here" />
            <AiOutlineSearch
              size="1.5em"
              color="gray"
              className={styles.menuicon}
            />
          </div>

          <div className={styles.menu}>
            <BiSelectMultiple
              size="1.5em"
              color="white"
              className={styles.menuicon}
            />
            Filter
          </div>
          <div className={styles.menu}>
            <HiSortDescending
              size="1.5em"
              color="white"
              className={styles.menuicon}
            />
            Short By
          </div>
          <div className={styles.menu}>
            <HiSortDescending
              size="1.5em"
              color="white"
              className={styles.menuicon}
            />
            Short By
          </div>
          <div className={styles.menu}>
            <HiSortDescending
              size="1.5em"
              color="white"
              className={styles.menuicon}
            />
            Short By
          </div>
        </div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.mapcontain1}>
        {option.map((dat, index) => (
          <div
            className={cx(
              styles.list1,
              itemsIndex == index ? styles.selectedList : null
            )}
            onClick={() => setItemIndex(index)}
          >
            {dat.name}
          </div>
        ))}
      </div>
      <div className={styles.mapContain2}>
        {option2.map((dat) => (
          <div className={styles.boxContainer}>
            <div className={styles.boxTop}>
              <div className={styles.boxTopLeft}>
                <div className={styles.topBoxText4}>{dat.text}</div>
              </div>
              <div className={styles.boxTopRight}>
                <BiDotsVerticalRounded className={styles.iconBox} />
              </div>
            </div>

            <div className={styles.boxActive}>
              <div
                className={cx(
                  styles.status,
                  dat.status === "Active" ? styles.active : null,
                  dat.status === "Expired" ? styles.expierd : null,
                  dat.status === "Scheduled" ? styles.scheduled : null
                )}
              >
                {dat.status}
              </div>
            </div>

            <div className={styles.hr}></div>
            <div className={styles.boxBot}>
              <div>
                <div className={styles.topBoxText1}>Valid Through</div>
                <div className={styles.topBoxText2}>
                  {dat.startDate}-{dat.endDate}
                </div>
              </div>
              <div>
                <div className={styles.topBoxText1}>Valid on</div>
                <div className={styles.topBoxText2}>{dat.validDate}</div>
              </div>
            </div>
            <div className={styles.boxBot1}>
              <div>
                <div className={styles.topBoxText1}>Type</div>
                <div className={styles.topBoxText2}>{dat.type}</div>
              </div>
              <div>
                <div className={styles.orderImage}>
                  {item.slice(0, 5).map((dat) => (
                    <div>
                      <img src={dat.image} className={styles.image} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discount;
