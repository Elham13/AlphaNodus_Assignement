import styles from "./loader.module.css";

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
