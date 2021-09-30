import React, { useState } from "react";
import styles from "./Notes.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect } from "react";
const Notes = () => {
  const [data, setData] = useState([
    1,
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
  ]);
  const [trigger, setTrigger] = useState(0);
  useEffect(() => {
    var grid = document.getElementById("masonry"),
      rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      ),
      rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
    data.forEach((dat, index) => {
      var box = document.getElementById(`i${index}`);
      var rowSpan = Math.ceil(
        (box.querySelector("#desc").getBoundingClientRect().height + 10) /
          (60 + 10)
      );
      box.style.gridRowEnd = "span " + (rowSpan + 1);
    });
  }, [trigger]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.textNotes}>Notes</div>
        <div className={styles.textSubNotes}>
          A board to keep track of personal tasks
        </div>
      </div>
      <div className={styles.searchDiv} onClick={() => setTrigger(1)}>
        <AiOutlineSearch size="1.5em" color="gray" />
        <input className={styles.input} placeholder="Search your note..." />
      </div>
      <div className={styles.notes} id="masonry">
        {data.map((dat, index) => (
          <div className={styles.box} id={`i${index}`}>
            <div className={styles.title}>Title</div>
            <div id="desc" className={styles.noteDesc}>
              {dat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notes;
