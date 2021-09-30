import React from "react";
import styles from "./Billing.module.css";
import { Progress } from "antd";
import "antd/dist/antd.css";

const Billing = () => {
  const option = [
    {
      day: "14",
      monthYear: "Jul,2021",
      paymentType: "Online Payment",
      packageName: "Renewed Package",
      packageTimeFrame: "3",
      invoiceNumber: "2272781",
      status: "Paid",
      amount: "1470",
    },
    {
      day: "14",
      monthYear: "Jul,2021",
      paymentType: "Online Payment",
      packageName: "Renewed Package",
      packageTimeFrame: "3",
      invoiceNumber: "2272781",
      status: "Paid",
      amount: "1470",
    },
    {
      day: "14",
      monthYear: "Jul,2021",
      paymentType: "Online Payment",
      packageName: "Renewed Package",
      packageTimeFrame: "3",
      invoiceNumber: "2272781",
      status: "Paid",
      amount: "1470",
    },
    {
      day: "14",
      monthYear: "Jul,2021",
      paymentType: "Online Payment",
      packageName: "Renewed Package",
      packageTimeFrame: "3",
      invoiceNumber: "2272781",
      status: "Paid",
      amount: "1470",
    },
    {
      day: "14",
      monthYear: "Jul,2021",
      paymentType: "Online Payment",
      packageName: "Renewed Package",
      packageTimeFrame: "3",
      invoiceNumber: "2272781",
      status: "Paid",
      amount: "1470",
    },
    {
      day: "14",
      monthYear: "Jul,2021",
      paymentType: "Online Payment",
      packageName: "Renewed Package",
      packageTimeFrame: "3",
      invoiceNumber: "2272781",
      status: "Paid",
      amount: "1470",
    },
    {
      day: "14",
      monthYear: "Jul,2021",
      paymentType: "Online Payment",
      packageName: "Renewed Package",
      packageTimeFrame: "3",
      invoiceNumber: "2272781",
      status: "Paid",
      amount: "1470",
    },
    {
      day: "14",
      monthYear: "Jul,2021",
      paymentType: "Online Payment",
      packageName: "Renewed Package",
      packageTimeFrame: "3",
      invoiceNumber: "2272781",
      status: "Paid",
      amount: "1470",
    },
    {
      day: "14",
      monthYear: "Jul,2021",
      paymentType: "Online Payment",
      packageName: "Renewed Package",
      packageTimeFrame: "3",
      invoiceNumber: "2272781",
      status: "Paid",
      amount: "1470",
    },
    {
      day: "14",
      monthYear: "Jul,2021",
      paymentType: "Online Payment",
      packageName: "Renewed Package",
      packageTimeFrame: "3",
      invoiceNumber: "2272781",
      status: "Paid",
      amount: "1470",
    },
    {
      day: "14",
      monthYear: "Jul,2021",
      paymentType: "Online Payment",
      packageName: "Renewed Package",
      packageTimeFrame: "3",
      invoiceNumber: "2272781",
      status: "Paid",
      amount: "1470",
    },
    {
      day: "14",
      monthYear: "Jul,2021",
      paymentType: "Online Payment",
      packageName: "Renewed Package",
      packageTimeFrame: "3",
      invoiceNumber: "2272781",
      status: "Paid",
      amount: "1470",
    },
  ];
  const option2 = [
    { name: "Date" },
    { name: "Payment" },
    { name: "Pacakage" },
    { name: "Status" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <img src={"/images/bro.png"}></img>
        </div>
        <div>
          <div className={styles.text1}>No Due</div>
          <div className={styles.text2}> You have no remaining Due</div>
        </div>
        <div className={styles.displayFlex}>
          <div className={styles.progressContain}>
            <div>
              <Progress
                type="circle"
                percent={75}
                strokeColor={"green"}
                strokeWidth={10}
              />
            </div>
            <div className={styles.text2}>Remaining Days</div>
          </div>
          <div>
            <div className={styles.text3}> Rs1650</div>
            <div className={styles.text2}>Basic 3 months</div>
            <div className={styles.text2}>02/03/2021</div>
            <div className={styles.button}>Pay Advance</div>
          </div>
        </div>
        <div className={styles.text2}>Account Rellated Support</div>
      </div>
      <div className={styles.right}>
        <div className={styles.text2}>Payment History</div>

        <div className={styles.displayFlex1}>
          <div className={styles.tableHeader}>
            {option2.map((dat) => (
              <div>{dat.name}</div>
            ))}
          </div>
          {option.map((dat) => (
            <div className={styles.width100}>
              <div>
                <div className={styles.text4}>{dat.day}</div>
                <div className={styles.text5}>{dat.monthYear}</div>
              </div>
              <div>
                <div className={styles.text22}>{dat.paymentType}</div>
                <div className={styles.text5}>Invoice {dat.invoiceNumber}</div>
              </div>

              <div>
                <div className={styles.text22}>{dat.packageName}</div>
                <div className={styles.text5}>{dat.packageTimeFrame} month</div>
              </div>
              <div>
                <div className={styles.text22}>{dat.status}</div>
                <div className={styles.text5}>Rs {dat.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Billing;
