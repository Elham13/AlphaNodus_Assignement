import styles from "./location.module.css";

type PropType = {
  text: string;
  active: boolean;
  onClick: () => void;
};

const FilterButton = ({ text, active, onClick }: PropType) => {
  return (
    <button
      className={`${styles.filterBtn} ${active && styles.filterBtnActive}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FilterButton;
