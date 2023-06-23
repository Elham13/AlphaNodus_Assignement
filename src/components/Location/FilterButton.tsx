import styles from "./location.module.css";

type PropType = {
  text: string;
};

const FilterButton = ({ text }: PropType) => {
  return <button className={styles.filterBtn}>{text}</button>;
};

export default FilterButton;
