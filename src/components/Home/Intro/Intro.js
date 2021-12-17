import styles from "./Intro.module.css";

const Intro = () => {
  const introPara = `At Barefoot Farm we are specialised in growing chemical and pesticide-free Mixed Salad leaves, Rocket, and Spinach all year round. \n `;
  return (
    <>
      <h1 className={styles.header}>LOCALLY PRODUCED SALAD LEAF</h1>
      <div className={styles.newLine}>{introPara}</div>
    </>
  );
};

export default Intro;
