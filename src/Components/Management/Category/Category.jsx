import React, { useState } from "react";
import styles from "./Category.module.css";
import cx from "classnames";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { BiSelectMultiple } from "react-icons/bi";
import { HiSortDescending } from "react-icons/hi";
import { BiEditAlt } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiArrowLeftCircle } from "react-icons/fi";
import "antd/dist/antd.css";
import { Switch } from "antd";

const Category = () => {
  const [itemsIndex, setItemIndex] = useState(0);
  const [option, setOption] = useState([
    { name: "All Dishes" },
    { name: "Cold Dishes" },
    { name: "Soup" },
    { name: "Grill" },
    { name: "Appetizer" },
    { name: "Desert" },
  ]);
  const option1 = [
    {
      name: "Breakfast",
      image:
        "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
      dishesNum: "222",
      soldPerDay: "37",
    },
    {
      name: "Breakfast",
      image:
        "https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg",
      dishesNum: "222",
      soldPerDay: "37",
    },
    {
      name: "Breakfast",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMhZ1MVwL4_Vhnj2QegzPJuytj2YWJgw8Lpdy5AFkS1bhlBs9WTAxP0df6Uvj_kIqVwE&usqp=CAU",
      dishesNum: "222",
      soldPerDay: "37",
    },
    {
      name: "Breakfast",
      image:
        "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
      dishesNum: "222",
      soldPerDay: "37",
    },
    {
      name: "Breakfast",
      image:
        "https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg",
      dishesNum: "222",
      soldPerDay: "37",
    },
    {
      name: "Breakfast",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMhZ1MVwL4_Vhnj2QegzPJuytj2YWJgw8Lpdy5AFkS1bhlBs9WTAxP0df6Uvj_kIqVwE&usqp=CAU",
      dishesNum: "222",
      soldPerDay: "37",
    },
    {
      name: "Breakfast",
      image:
        "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
      dishesNum: "222",
      soldPerDay: "37",
    },
    {
      name: "Breakfast",
      image:
        "https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg",
      dishesNum: "222",
      soldPerDay: "37",
    },
    {
      name: "Breakfast",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMhZ1MVwL4_Vhnj2QegzPJuytj2YWJgw8Lpdy5AFkS1bhlBs9WTAxP0df6Uvj_kIqVwE&usqp=CAU",
      dishesNum: "222",
      soldPerDay: "37",
    },
    {
      name: "Breakfast",
      image:
        "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
      dishesNum: "222",
      soldPerDay: "37",
    },
    {
      name: "Breakfast",
      image:
        "https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg",
      dishesNum: "222",
      soldPerDay: "37",
    },
    {
      name: "Breakfast",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMhZ1MVwL4_Vhnj2QegzPJuytj2YWJgw8Lpdy5AFkS1bhlBs9WTAxP0df6Uvj_kIqVwE&usqp=CAU",
      dishesNum: "222",
      soldPerDay: "37",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.title}>Category</div>

        <div className={styles.secondRow}>
          <div className={styles.searchDiv}>
            <input className={styles.input} placeholder="Search here" />
            <AiOutlineSearch
              size="1.5em"
              color="gray"
              className={styles.menuicon}
            />
          </div>
          <div className={styles.menu}>
            <BiFoodMenu
              size="1.5em"
              color="white"
              className={styles.menuicon}
            />
            Menu
          </div>
          <div className={styles.menu}>
            <BiSelectMultiple
              size="1.5em"
              color="white"
              className={styles.menuicon}
            />
            Select
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
            <BiEditAlt size="1.5em" color="white" className={styles.menuicon} />
            Edit
          </div>
        </div>
      </div>
      <div className={styles.mapContain}>
        {option1.map((dat) => (
          <div className={styles.box}>
            <div className={styles.images}>
              <img src={dat.image} className={styles.image} />
            </div>
            <div className={styles.mapName}>{dat.name}</div>
            <div className={styles.boxBot}>
              <div className={styles.dishesNum}>{dat.dishesNum} Dishes</div>
              <div className={styles.vr}></div>
              <div className={styles.soldPerDay}>{dat.soldPerDay} Sold/Day</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
