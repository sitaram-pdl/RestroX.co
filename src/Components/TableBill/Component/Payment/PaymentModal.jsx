import React, { useState } from "react";
import styles from "./PaymentModal.module.css";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const PamentModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const option = [
    {
      name: "10% service change",
      percent: "10%",
      rs: "0",
    },
    {
      name: "discount",
      percent: "10%",
      rs: "0",
    },
    {
      name: "discount",
      percent: "10%",
      rs: "0",
    },
    {
      name: "discount",
      percent: "10%",
      rs: "0",
    },
  ];

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowModal}
        onClick={() => setShowModal(!showModal)}
      >
        {showModal ? (
          <RiArrowDownSLine color="white" size="2em" />
        ) : (
          <RiArrowUpSLine color="white" size="2em" />
        )}
      </div>
      {showModal ? (
        <div className={styles.absoluteContain}>
          <div className={styles.buttonRow}>
            <div className={styles.text}>Additional Charges</div>
            <div className={styles.text}>Edit </div>
          </div>
          <div className={styles.hr} />
          <div className={styles.buttonRow}>
            <div className={styles.text}>Sub Total : </div>
            <div className={styles.text}> Rs 10047 </div>
          </div>
          <div>
            {option.map((dat) => (
              <div className={styles.mapcontain}>
                <div className={styles.name}>{dat.name} </div>
                <div>{dat.percent}</div>
                <div> {dat.rs}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className={styles.buttonRow}>
        <div className={styles.text11}>Total :</div>
        <div className={styles.text11}>Rs2500</div>{" "}
      </div>
      <div className={styles.buttonRow1}>
        <div
          className={styles.addOrder}
          onClick={() =>
            props.history.push(`/addOrder/${props.match.params.tableName}`)
          }
        >
          Add Order
        </div>

        <div
          className={styles.payment}
          onClick={() => props.setShow((dat) => !dat)}
        >
          Proceed to Payment
        </div>
      </div>
    </div>
  );
};

export default PamentModal;
