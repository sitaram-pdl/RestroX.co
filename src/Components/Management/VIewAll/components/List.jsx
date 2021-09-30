import React, { useState } from "react";
import styles from "./List.module.css";
import "antd/dist/antd.css";
import { Switch } from "antd";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import cx from "classnames";
import "./styles.css";
import { Checkbox } from "antd";

const List = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [items, setItems] = useState([
    {
      index: 0,
      isCheckedArray: false,
      id: "AAA!",
      item: "Spicy seasoned seafood nodles",
      price: "Rs 290",
      category: "Food-Lunch",
      listedmenu: "Die in menu,fridat night",
      review: "8.5/10 ( 21 review)",
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
    },
    {
      index: 1,
      isCheckedArray: false,
      id: "AAA!",
      item: "Spicy seasoned seafood nodles",
      price: "Rs 290",
      category: "Food-Lunch",
      listedmenu: "Die in menu,fridat night",
      review: "8.5/10 ( 21 review)",
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
    },
    {
      index: 2,
      isCheckedArray: false,
      id: "AAA!",
      item: "Spicy seasoned seafood nodles",
      price: "Rs 290",
      category: "Food-Lunch",
      listedmenu: "Die in menu,fridat night",
      review: "8.5/10 ( 21 review)",
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
    },
    {
      index: 3,
      isCheckedArray: true,
      id: "AAA!",
      item: "Spicy seasoned seafood nodles",
      price: "Rs 290",
      category: "Food-Lunch",
      listedmenu: "Die in menu,fridat night",
      review: "8.5/10 ( 21 review)",
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
    },
    {
      index: 4,
      isCheckedArray: false,
      id: "AAA!",
      item: "Spicy seasoned seafood nodles",
      price: "Rs 290",
      category: "Food-Lunch",
      listedmenu: "Die in menu,fridat night",
      review: "8.5/10 ( 21 review)",
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
    },
    {
      index: 5,
      isCheckedArray: false,
      id: "AAA!",
      item: "Spicy seasoned seafood nodles",
      price: "Rs 290",
      category: "Food-Lunch",
      listedmenu: "Die in menu,fridat night",
      review: "8.5/10 ( 21 review)",
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
    },
  ]);

  const handleOnChange = () => {
    items.forEach((item, index) => {
      handleOnChangeArray(index, isChecked);
    });
    setIsChecked(!isChecked);
  };
  const handleOnChangeArray = (index, val) => {
    var name = [...items];
    name[index].isCheckedArray = !val;

    setItems(name);
  };
  return (
    <div className={styles.container}>
      <div className={styles.search2}>
        <div className={styles.sn} id="two">
          <Checkbox checked={isChecked} onChange={() => handleOnChange()} />
        </div>
        <div className={styles.id}>ID</div>
        <div className={styles.item}>Item</div>
        <div className={styles.price}>Price</div>
        <div className={styles.category}>Category</div>
        <div className={styles.category}>Listed Menu</div>

        <div className={styles.review}>Review {"&"} Raing</div>
        <div className={styles.status}>Status</div>

        <div className={styles.sn1}></div>
      </div>
      {items.map((dat, index) => (
        <div
          className={cx(styles.search3, index % 2 === 1 ? styles.grey : null)}
        >
          <div className={styles.sn} id="one">
            <Checkbox
              checked={dat.isCheckedArray}
              onChange={() =>
                handleOnChangeArray(dat.index, dat.isCheckedArray)
              }
            />
          </div>
          <div className={styles.id}>{dat.id}</div>
          <div className={styles.item}>
            <img className={styles.image} src={dat.image}></img>
            {dat.item}
          </div>
          <div className={styles.price}>{dat.price}</div>

          <div className={styles.category}>{dat.category}</div>
          <div className={styles.category}>{dat.listedmenu}</div>
          <div className={styles.review}>
            <AiFillStar size="1.5em" color="yellow" className={styles.menuicon}>
              {" "}
            </AiFillStar>{" "}
            {dat.review}
          </div>
          <div className={styles.status1} id="three">
            <Switch defaultChecked />
          </div>
          <div className={styles.sn1}>
            <BiDotsVerticalRounded />
          </div>
        </div>
      ))}
    </div>
  );
};
export default List;
