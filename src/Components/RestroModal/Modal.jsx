import React from "react";
import styles from "./Modal.module.css";
import { BiHomeAlt, BiCreditCard, BiSupport } from "react-icons/bi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { useState } from "react";
import Home from "./Home";
import Billing from "./Billing/Billing";
import Store from "./Store/Store";
import Support from "./Support/Support";
import cx from "classnames";
const RestroModal = () => {
  const [tab, setTab] = useState("Home");
  const menuHandler = () => {
    switch (tab) {
      case "Home":
        return <Home />;
      case "Billing":
        return <Billing />;
      case "Store":
        return <Store />;
      case "Support":
        return <Support />;
      default:
        return <Home />;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.screen}>{menuHandler()}</div>
      <div className={styles.hr}></div>
      <div className={styles.menu}>
        <div
          className={cx(styles.icon, tab === "Home" ? styles.white : null)}
          onClick={() => setTab("Home")}
        >
          <div className={styles.icon}>
            <BiHomeAlt size="2em" />
          </div>
          <div className={styles.text}>Restro X</div>
        </div>
        <div
          className={cx(styles.icon, tab === "Billing" ? styles.white : null)}
          onClick={() => setTab("Billing")}
        >
          <div>
            <FaWallet size="2em" />{" "}
          </div>
          <div className={styles.text}>Billing</div>
        </div>
        <div
          className={cx(styles.icon, tab === "Support" ? styles.white : null)}
          onClick={() => setTab("Support")}
        >
          <div>
            <BiSupport size="2em" />{" "}
          </div>
          <div className={styles.text}>Support</div>
        </div>
        <div
          className={cx(styles.icon, tab === "Store" ? styles.white : null)}
          onClick={() => setTab("Store")}
        >
          <div>
            <AiOutlineAppstoreAdd size="2em" />
          </div>
          <div className={styles.text}>Store</div>
        </div>
        <div
          className={cx(styles.icon, tab === "Offers" ? styles.white : null)}
          onClick={() => setTab("Offers")}
        >
          <div>
            <GiPartyPopper size="2em" />
          </div>
          <div className={styles.text}>Refer & order</div>
        </div>
        <div
          className={cx(styles.icon, tab === "Offers" ? styles.white : null)}
          onClick={() => setTab("Offers")}
        >
          <div>
            <GiPartyPopper size="2em" />
          </div>
          <div className={styles.text}>Chat</div>
        </div>
      </div>
    </div>
  );
};

export default RestroModal;
