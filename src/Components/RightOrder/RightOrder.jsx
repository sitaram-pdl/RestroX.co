import React, { useState } from "react";
import styles from "./RightOrder.module.css";
import cx from "classnames";
import { AiOutlineDelete } from "react-icons/ai";
const RightOrder = (props) => {
  const [tempIndex, setTempIndex] = useState(0);
  const [mode, setMode] = useState(0);
  const [show, setShow] = useState(true);
  const [data, setData] = useState([
    { name: "Dine In" },
    { name: "To Go" },
    { name: "Delivery" },
  ]);
  const [items, setItems] = useState([
    { name: "Dine In" },
    { name: "Take Away" },
    { name: "Delivery" },
    { name: "Dine In" },
    { name: "Take Away" },
    { name: "Delivery" },
    { name: "Dine In" },
    { name: "Take Away" },
    { name: "Delivery" },
    { name: "Dine In" },
    { name: "Take Away" },
    { name: "Delivery" },
  ]);

  return (
    <div className={cx(styles.container, props.theme ? styles.white : null)}>
      <div className={cx(styles.title, props.theme ? styles.white : null)}>
        Orders #3362
      </div>
      <div>
        <div className={styles.selector}>
          {data.map((dat, index) => (
            <div
              onClick={() => setMode(index)}
              className={cx(mode == index ? styles.box : styles.box2)}
            >
              {dat.name}
            </div>
          ))}
        </div>
        <div className={styles.table}>
          <div
            className={cx(styles.legend, props.theme ? styles.white2 : null)}
          >
            <div className={styles.item}>Item</div>
            <div className={styles.qty}>Qty</div>
            <div className={styles.price}>Price</div>
          </div>
          <div className={styles.itemsDiv}>
            {items.map((dat, index) => (
              <div className={styles.marginTop}>
                <div
                  className={cx(
                    styles.legend,
                    props.theme ? styles.white2 : null
                  )}
                >
                  <div className={styles.item1}>
                    <div className={styles.row}>
                      <div className={styles.image}>
                        <img
                          className={styles.image}
                          src="https://www.southsidemarket.com/wp-content/uploads/2017/07/HeroFinal-69.jpg"
                        />
                      </div>
                      <div className={styles.desc}>
                        <div className={styles.descText}>
                          Spicy Seasoned Food
                        </div>
                        <div className={styles.priceDesc}>Rs. 200</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.displayFlex}>
                    {show === true && tempIndex === index ? (
                      <div className={styles.plus}>-</div>
                    ) : null}
                    <div
                      className={cx(
                        styles.qty2,
                        props.theme ? styles.qty3 : null
                      )}
                      onClick={
                        (() => setShow(!show), () => setTempIndex(index))
                      }
                    >
                      3
                    </div>
                    {show === true && tempIndex === index ? (
                      <div className={styles.plus}>+</div>
                    ) : null}
                  </div>
                  <div className={styles.price2}>Rs 200</div>
                </div>
                <div className={styles.lowerDiv}>
                  <div
                    className={cx(
                      styles.textField,
                      props.theme ? styles.qty3 : null
                    )}
                  >
                    <input
                      className={cx(
                        styles.input,
                        props.theme ? styles.qty3 : null
                      )}
                      placeholder="Order Note..."
                    ></input>
                  </div>
                  <div className={styles.remove}>
                    <AiOutlineDelete size="16" color="#f06c38da" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.lowestDiv}>
            <div className={styles.hr} />
            <div className={styles.rowDiv}>
              <div>No of items</div>
              <div>4</div>
            </div>
            <div className={styles.rowDiv}>
              <div>Sub Total</div>
              <div>Rs 200</div>
            </div>
          </div>
          <div className={styles.lowestDiv1}>
            <div className={styles.button}>Confirm Order</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightOrder;
