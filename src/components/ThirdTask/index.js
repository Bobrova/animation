import React from 'react';
import styles from './style.scss';

const ThirdTask = () => {
  return (
    <div className={styles.page}>
      <div className={styles.controlBlock} />
      <div className={styles.controlBlock} />
      <div className={styles.controlBlock} />
      <div className={styles.controlBlock} />
      <div className={styles.backblock} />
      <div className={`${styles.picblock} ${styles.picblock1}`} />
      <div className={`${styles.picblock} ${styles.picblock2}`} />
      <div className={`${styles.picblock} ${styles.picblock3}`} />
      <div className={`${styles.picblock} ${styles.picblock4}`} />
      <div className={`${styles.picblock} ${styles.picblock5}`} />
    </div>
  );
};

export default ThirdTask;
