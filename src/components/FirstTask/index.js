import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ball from 'components/FirstTask/Ball';
import { animations } from 'constants/firstTaskConstants';
import styles from './style.scss';

class FirstTask extends Component {
  render() {
    const {
      setAnimationAction,
      delAnimationAction,
      activeAnimation,
    } = this.props;
    const listballs = animations.map(item => (
      <Ball
        key={item.id}
        animation={item.name}
        activeAnimation={activeAnimation}
        classAnimation={item.animation}
        delAnimationAction={delAnimationAction}
        setAnimationAction={setAnimationAction}
      />
    ));
    return (
      <div className={styles.page}>
        <div className={styles.ballsfield}>
          {listballs}
        </div>
      </div>
    );
  }
}

FirstTask.propTypes = {
  setAnimationAction: PropTypes.func.isRequired,
  activeAnimation: PropTypes.string.isRequired,
  delAnimationAction: PropTypes.func.isRequired,
};

export default FirstTask;
