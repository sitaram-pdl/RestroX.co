import React, { useState } from "react";
import styles from "./Overlay.module.css";
import { BiSelectMultiple, BiBellPlus, BiUserPlus } from "react-icons/bi";
import { HiSortDescending, HiOutlineDotsVertical } from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import { RiPushpin2Line } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import {
  AiOutlineSearch,
  AiOutlinePicture,
  AiOutlineCheckSquare,
  AiFillDelete,
} from "react-icons/ai";

const Overlay = (props) => {
  const [data, setData] = useState([
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum doloonsequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum dolor  consequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum doloonsequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum dolor  consequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam eligendi impedit, ad ducimus libero magnam dolor odio ullam, voluptatibus laboriosam dignissimos vero quibusdam porro facilis facere possimus? Perspiciatis, consequuntur.",
    },
    {
      name: "Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.Lorem ipsum dolor sit amet,  consequuntur.",
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div> Flutter Development</div>
        <div className={styles.topIcon}>
          <div>
            <RiPushpin2Line />
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
      <div className={styles.mid}>{data[props.temp].name}</div>
      <div className={styles.nextToMid}></div>
      <div className={styles.bottom}></div>
    </div>
  );
};
export default Overlay;
