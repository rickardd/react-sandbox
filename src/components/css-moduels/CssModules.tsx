import styles from "./Button.module.css";

export const CssModules = () => {
  const disabled = true;
  return (
    <>
      <p>CSS Modules do not support nested selectors. We have to go with flat structure</p>

      <p>.button .red (background-color: red;) ... does not work</p>

      <p>We have to do combine .button and .red </p>
      <button className={`${styles.button} ${disabled ? styles.disabled : ""}`}>Disable button</button>
      <button className={`${styles.button} ${styles.red}`}>Red button</button>
      <button className={`${styles.button}`}>Defualt button</button>
    </>
  );
};
