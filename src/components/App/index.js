import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';

class App extends Component {
  render() {
    return (
      <section className={styles.page}>
        <Link to="/first-task" className={styles.btn}>First Task</Link>
        <Link to="/second-task" className={styles.btn}>Second Task</Link>
        <Link to="/third-task" className={styles.btn}>Third Task</Link>
        <Link to="/fourth-task" className={styles.btn}>Fourth Task</Link>
      </section>
    );
  }
}
export default App;
