import { ProductSwitcher } from "carbon-components";
import { style } from "dom-helpers";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { RiArrowRightSLine } from "react-icons/ri";
import cx from "classnames";
const Header = (props) => {
  const [myTree, setMyTree] = useState([]);
  const [tempIndex, setTempIndex] = useState([]);
  useEffect(() => {
    const oldUrl = props.match.url;
    const urlArr = oldUrl.split("/");
    const temp = [];
    for (let index = 1; index < urlArr.length; index++) {
      temp[index - 1] = urlArr[index];
    }
    setMyTree(temp);
  }, []);
  const routingFunction = (index) => {
    switch (index) {
      case 0:
        props.history.push(`/management/Menu Management/0/0`);
        break;
      case 1:
        props.history.push(`/management/${myTree[index]}/0/0`);
        break;
      case 2:
        props.history.push(
          `/management/${myTree[index - 1]}/${myTree[index]}/0`
        );
        break;
      case 3:
        props.history.push(
          `/management/${myTree[index - 2]}/${myTree[index - 1]}/${
            myTree[index]
          }`
        );
        break;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.padding}>
        <div className={styles.header}>{myTree[myTree.indexOf("0") - 1]}</div>
        <div className={styles.subheader}>
          {myTree.map((dat, index) =>
            dat === "0" ? null : (
              <div
                className={cx(styles.displayflex)}
                onClick={() => {
                  routingFunction(index);
                }}
                onMouseEnter={() => setTempIndex(index)}
                onMouseLeave={() => setTempIndex("10")}
              >
                {index ? (
                  <div>
                    <RiArrowRightSLine
                      size={"1.38em"}
                      style={{ marginTop: "0.0em" }}
                    />
                  </div>
                ) : null}

                <div
                  className={cx(
                    styles.marginLeft,
                    index === tempIndex ? styles.background : null
                  )}
                >
                  {dat}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className={styles.hr}></div>
    </div>
  );
};

export default Header;
