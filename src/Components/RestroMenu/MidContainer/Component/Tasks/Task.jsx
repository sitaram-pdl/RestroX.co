import React, { useState } from "react";
import styles from "./Task.module.css";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";

import { BiMessageDetail } from "react-icons/bi";

const Task = () => {
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
    {
      name: "Mo:Mo",
      image:
        "https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1",
      time: "10 Minutes",
      rating: "4.8",
      price: "200",
      name: "Chicken Pasta",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      time: "20 Minutes",
      rating: "4.8",
      price: "400",
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
    {
      name: "Mo:Mo",
      image:
        "https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1",
      time: "10 Minutes",
      rating: "4.8",
      price: "200",
    },
    {
      name: "Chicken Pasta",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      time: "20 Minutes",
      rating: "4.8",
      price: "400",
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
    {
      name: "Mo:Mo",
      image:
        "https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1",
      time: "10 Minutes",
      rating: "4.8",
      price: "200",
      name: "Chicken Pasta",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      time: "20 Minutes",
      rating: "4.8",
      price: "400",
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
    {
      name: "Mo:Mo",
      image:
        "https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1",
      time: "10 Minutes",
      rating: "4.8",
      price: "200",
    },
    {
      name: "Chicken Pasta",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      time: "20 Minutes",
      rating: "4.8",
      price: "400",
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
    {
      name: "Mo:Mo",
      image:
        "https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1",
      time: "10 Minutes",
      rating: "4.8",
      price: "200",
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={"./images/Illustration.png"} className={styles.images}></img>
      </div>
      <div className={styles.events}>
        <div className={styles.leftdate}>
          <div className={styles.textdate}>THU</div>
          <div className={styles.textdate}>24</div>
        </div>
        <div className={styles.rightevents}>
          <div className={styles.text2}>Birthday Events</div>
          <div className={styles.text1}>Store best ideas for birthday part</div>
        </div>
      </div>
      <div className={styles.location}>
        <div className={styles.lefticon}>
          <AiOutlineCalendar className={styles.icon} />
        </div>
        <div className={styles.righticon}>
          <div className={styles.eventdates}>Sat, May 25, 2020</div>
          <div className={styles.eventtimes}> 10 AM to 6 PM</div>
        </div>
      </div>
      <div className={styles.location}>
        <div className={styles.lefticon}>
          <TiLocationOutline className={styles.icon} />
        </div>
        <div className={styles.righticon}>
          <div className={styles.eventdates}>Central Park</div>
          <div className={styles.eventtimes}> Manhattan, New york City</div>
        </div>
      </div>

      <div className={styles.orderImage}>
        {item.slice(0, 5).map((dat) => (
          <div>
            <img src={dat.image} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
