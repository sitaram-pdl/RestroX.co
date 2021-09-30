import React from "react";
import styles from "./Support.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Support = () => {
  const option = [
    {
      name: "Report your Problem",
    },
    {
      name: "My Ticket",
    },
    {
      name: "Write a Mail",
    },
    {
      name: "Make a call",
    },
    {
      name: "Getting Started",
    },
    {
      name: "Watch Tutorial",
    },
    {
      name: "Pricing Policies",
    },
    {
      name: "User Account",
    },
    {
      name: "FAQS",
    },
    {
      name: "Help Yourself",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.howcanText}>How can we help you?</div>
      <div className={styles.searchDiv}>
        <input
          className={styles.input}
          placeholder="Start Typing your search..."
        />
        <AiOutlineSearch size="6em" color="white" className={styles.menuicon} />
      </div>
      <div className={styles.text1}>or choose an option listed below</div>
      <div className={styles.mapcontain}>
        {option.map((dat) => (
          <div className={styles.box}>
            {dat.name === "Report your Problem" ||
            dat.name === "Watch Tutorial" ||
            dat.name === "Help Yourself" ? (
              <img
                src="/images/supporticon1.png"
                className={styles.imageColor}
              />
            ) : (
              <img
                src="/images/supporticon2.png"
                className={styles.imageColor}
              />
            )}
            <div className={styles.name}>{dat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
