import React, { useState, useRef } from "react";
import styles from "./RightOrder.module.css";
import cx from "classnames";
import ProceedToPayment from "./Component/ProceedToPayment/ProceedToPayment";

import PaymentModal from "./Component/Payment/PaymentModal";

const RightOrder = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const [mode, setMode] = useState(0);
  const [data, setData] = useState([
    { name: "Dine In" },
    { name: "Take Away" },
    { name: "Delivery" },
  ]);
  const [items, setItems] = useState([
    { name: "Dine In" },
    { name: "Take Away" },
    { name: "Delivery" },
  ]);
  const option = [
    { name: "All", number: "", type: "" },
    { name: "Order ", number: "#34562", type: "" },
    { name: "Order", number: "#34562", type: "TakeAway" },
    { name: "All", number: "", type: "" },
    { name: "Order ", number: "#34562", type: "" },
    { name: "Order", number: "#34562", type: "TakeAway" },
  ];
  const [styl, setStyl] = useState(0);
  const option1 = [
    {
      name: "Spicy too spicy yar",
      priceItem: "229",
      qty: "1",
      price: "2999",
    },
    {
      name: "Spicy too spicy yar",
      priceItem: "229",
      qty: "1",
      price: "2999",
    },
    {
      name: "Spicy too spicy yar",
      priceItem: "229",
      qty: "1",
      price: "2999",
    },
    {
      name: "Spicy too spicy yar",
      priceItem: "229",
      qty: "1",
      price: "2999",
    },
    {
      name: "Spicy too spicy yar",
      priceItem: "229",
      qty: "1",
      price: "2999",
    },
    {
      name: "Spicy too spicy yar",
      priceItem: "229",
      qty: "1",
      price: "2999",
    },
  ];
  const option2 = [
    {
      name: "Spicy too spicy yar",
      priceItem: "229",
      qty: "1",
      price: "2999",
    },
  ];
  const totaloption = [
    {
      name: "Service Charge",
      amount: "0",
    },
    {
      name: "Discount",
      amount: "0",
    },
    {
      name: "Total",
      amount: "2103",
    },
  ];
  const scroll = useRef(null);
  const totalAmt = useState({ totalAmt: 2500 });

  const handleScroll = (e) => {
    const container = scroll.current;
    const containerScrollPosition = scroll.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  return (
    <div className={cx(styles.container, props.theme ? styles.white : null)}>
      <div className={styles.topRow} ref={scroll} onWheel={handleScroll}>
        {option.map((dat, index) => (
          <div
            className={cx(styles.topTab, styl == index ? styles.white : null)}
            onClick={() => setStyl(index)}
          >
            <div className={styles.topName}>{dat.name}</div>{" "}
            <div className={styles.topNumber}>{dat.number}</div>
            {dat.type != "" ? (
              <div className={styles.topType1}>({dat.type})</div>
            ) : null}
          </div>
        ))}
      </div>
      <div className={styles.header}>
        <div className={styles.item}>Item</div>
        <div className={styles.qty}>Qty</div>
        <div className={styles.price}>Price</div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.scroll}>
        <div className={styles.topType}>Die in</div>
        <div className={styles.paddingBottom}>
          {option1.map((dat) => (
            <div className={styles.header1}>
              <div className={styles.item1}>
                <div>
                  <img
                    src={
                      "https://images.squarespace-cdn.com/content/v1/5a4aa9ea90badea8b8c07c4f/1586187526276-MF2S55KMONPE1L173M8I/Maddalena%2Bsplatter-5.jpg?format=1000w"
                    }
                    className={styles.images}
                  />
                </div>
                <div className={styles.mapLeft}>
                  <div className={styles.text1}>{dat.name}</div>
                  <div className={styles.price1}>Rs {dat.priceItem}</div>
                </div>
              </div>

              <div className={styles.qty}>{dat.qty}</div>
              <div className={styles.price}>Rs {dat.price}</div>
            </div>
          ))}
        </div>
        <div className={styles.topType}>Take Away</div>
        <div className={styles.paddingBottom}>
          {option1.map((dat) => (
            <div className={styles.header1}>
              <div className={styles.item1}>
                <div>
                  <img
                    src={
                      "https://images.squarespace-cdn.com/content/v1/5a4aa9ea90badea8b8c07c4f/1586187526276-MF2S55KMONPE1L173M8I/Maddalena%2Bsplatter-5.jpg?format=1000w"
                    }
                    className={styles.images}
                  />
                </div>
                <div className={styles.mapLeft}>
                  <div className={styles.text1}>{dat.name}</div>
                  <div className={styles.price1}>Rs {dat.priceItem}</div>
                </div>
              </div>

              <div className={styles.qty}>{dat.qty}</div>
              <div className={styles.price}>Rs {dat.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div>{show ? <ProceedToPayment setShow={setShow} /> : null}</div>
      <PaymentModal setShow={setShow} {...props} />
    </div>
  );
};

export default RightOrder;
