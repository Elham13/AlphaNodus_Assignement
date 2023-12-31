import React from "react";
import styles from "./location.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

type PropType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LocationSearch = ({ onChange }: PropType) => {
  return (
    <div className={styles.searchWrapper}>
      <BiSearchAlt2 />
      <input type="text" placeholder="Search" onChange={onChange} />
    </div>
  );
};

export default LocationSearch;
