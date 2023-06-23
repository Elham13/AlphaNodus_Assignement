import React from "react";
import styles from "./location.module.css";
import { HiRefresh } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

type PropType = {
  onRefresh: () => void;
};

const Header = ({ onRefresh }: PropType) => {
  return (
    <div className={styles.header}>
      <button title="Refresh" className={styles.refresBtn} onClick={onRefresh}>
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
