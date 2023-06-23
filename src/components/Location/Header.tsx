import React from "react";
import styles from "./location.module.css";
import { HiRefresh } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

const Header = () => {
  return (
    <div className={styles.header}>
      <button title="Refresh" className={styles.refresBtn}>
        <HiRefresh />
      </button>
      <h3>Locations</h3>
      <button className={styles.addBtn}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default Header;
