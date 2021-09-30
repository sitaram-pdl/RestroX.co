import React, { useState } from "react";
import styles from "./ProductManagement.module.css";
import cx from "classnames";

import { AiOutlineMessage, AiOutlineSearch } from "react-icons/ai";
import { VscCallOutgoing } from "react-icons/vsc";

import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import AddItem from "./AddItem";
import AddMenu from "./AddMenu";
import UserMenu from "../../Settings/UserMenu/UserMenu";
import ViewMenu from "../ViewMenu/UserMenu";
import Header from "../Components/TopHeader/Header";
const ProductManagement = (props) => {
  const [options, setOptions] = useState([
    { name: "Digital Menu", total: "124", img: "/images/menu/1.png" },
    { name: "Physical Menu", total: "124", img: "/images/menu/2.png" },

    { name: "All Dishes", total: "124", img: "/images/menu/3.png" },
    { name: "Category", total: "124", img: "/images/menu/4.png" },
    { name: "Discount", total: "124", img: "/images/menu/5.png" },
    { name: "QR Code ", total: "124", img: "/images/menu/6.png" },
    { name: "Real Time Menu", total: "124", img: "/images/menu/7.png" },
    { name: "Review Price", total: "124", img: "/images/menu/3.png" },
  ]);
  const [data, setData] = useState([
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
  ]);
  const [shortcuts, setShortcuts] = useState([
    { name: "Add Dishes" },
    { name: "Add New Menu" },
    { name: "Review Dishe Price" },
  ]);
  const [addDish, setAddDish] = useState(false);
  const [addMenu, setMenu] = useState(false);
  const [viewMenu, setViewMenu] = useState(false);
  const menuHandler = (a) => {
    switch (a) {
      case "Add Dishes":
        setAddDish((b) => !b);
        break;

      case "Add New Menu":
        setMenu((b) => !b);
        break;

      case "View Menu":
        setViewMenu((b) => !b);
        break;
    }
  };
  const [hover, setHover] = useState(1);
  return (
    <div className={cx(styles.container, props.theme ? styles.whiteBox : null)}>
      <Header subheader={"Menu Management"} header={"Management"} {...props} />

      <div className={styles.scroll}>
        <div className={styles.singleTop}>
          <div className={styles.leftSide}>
            <div className={styles.table2}>
              <div className={styles.row}>
                <div>Category</div>
                <div className={styles.subText}>24 Categories</div>
              </div>

              <div>
                <div className={styles.addButton}>Add Category</div>
              </div>
            </div>

            <div className={styles.menu}>
              {data.map((dat, index) => (
                <div
                  onMouseEnter={() => setHover(index)}
                  className={cx(
                    styles.menuBox,
                    props.theme ? styles.white : null,
                    hover == index ? styles.hoverBox : null
                  )}
                >
                  <img className={styles.image} src={dat.image}></img>
                  <div className={styles.text}>{dat.name}</div>
                  <div className={styles.price}>23 Items</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.fadedGraph}>
            <div className={styles.shortcut}>Shortcuts</div>
            <div className={styles.boxType2}>
              {shortcuts.map((dat) => (
                <div
                  className={styles.typesBox2}
                  onClick={() => menuHandler(dat.name)}
                >
                  <div>{dat.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.table3}>
          <div className={styles.row}>
            <div>Types</div>
            <div className={styles.subText}>7 different types of menu</div>
          </div>

          <div>
            <div className={styles.addButton}>Add Menu</div>
          </div>
        </div>

        <div className={styles.boxType}>
          {[0, 1, 2, 3, 5, 0, 1, 2, 3, 5].map((dat) => (
            <div className={styles.typesBox}>
              <div>
                <img
                  src="/images/Take Away Food.png"
                  className={styles.typesImage}
                />
              </div>
              <div className={styles.typesRight}>
                <div>Dine in Menu</div>
                <div className={styles.items}>211 Items</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.table3}>
          <div className={styles.row}>
            <div>Management</div>
            <div className={styles.subText}>24 Categories</div>
          </div>
        </div>

        <div className={styles.list}>
          {options.map((dat) => (
            <div
              className={styles.box}
              onClick={() =>
                props.history.push(`/management/Menu Management/${dat.name}/0`)
              }
            >
              <div className={styles.images}>
                <img className={styles.image2} src={dat.img} />
              </div>
              <div className={styles.text}>{dat.name}</div>
              <div className={styles.text2}>{dat.total} items in menu</div>
            </div>
          ))}
        </div>
      </div>
      {addDish ? (
        <div className={styles.fixed}>
          <div
            className={styles.absolute}
            onClick={() => menuHandler("Add Dishes")}
          />

          <div className={styles.modal}>
            <AddItem menuHandler={menuHandler} />
          </div>
        </div>
      ) : null}
      {addMenu ? (
        <div className={styles.fixed}>
          <div
            className={styles.absolute}
            onClick={() => menuHandler("Add New Menu")}
          />

          <div className={styles.modal2}>
            <AddMenu />
          </div>
        </div>
      ) : null}
      {viewMenu ? (
        <div className={styles.fixed}>
          <div
            className={styles.absolute}
            onClick={() => menuHandler("View Menu")}
          />

          <div className={styles.modal3}>
            <ViewMenu />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductManagement;
