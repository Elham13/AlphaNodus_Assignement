import React from "react";
import styles from "./location.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const LocationSearch = () => {
  return (
    <div className={styles.searchWrapper}>
      <BiSearchAlt2 />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default LocationSearch;
