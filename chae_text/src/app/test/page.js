import styles from "../styles/Test.module.css";

const TEST = () => {
  return (
    <div className={styles.container}>
      <div className="left">
        <div className={styles.header}>Header</div>
        <div className={styles.content}>Content Area</div>
        <div className={styles.footer}></div>
      </div>
      <div>
        <span className={styles.penIcon}>Pen Icon</span>
      </div>
    </div>
  );
};

export default TEST;
