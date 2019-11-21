import React from 'react';
import ListItem from 'components/SecondTask/Item';
import { list } from 'constants/secondTaskConstants';
import styles from './style.scss';

const SecondTask = () => {
  const arrayOfSteps = list.map(item => +item.steps);
  const maxSteps = Math.max.apply(null, arrayOfSteps);
  const listPeople = list.map(item => (
    <ListItem
      key={item.id}
      id={item.id}
      steps={item.steps}
      person={item.person}
      source={item.source}
      maxSteps={maxSteps}
    />
  ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        { listPeople }
      </div>
    </div>
  );
};

export default SecondTask;
