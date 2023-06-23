import styles from "./loader.module.css";

const loader = {
  backgroundColor: "orange",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5rem",
};
const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
