import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.scss';

const Ball = (props) => {
  const handleEndAnimation = () => {
    const { delAnimationAction } = props;
    delAnimationAction();
  };

  const handleClick = () => {
    const { setAnimationAction, animation } = props;
    setAnimationAction({ animation });
  };

  const {
    activeAnimation,
    animation,
    classAnimation,
  } = props;
  const ballClass = classNames(
    styles.ball,
    { [styles[classAnimation]]: activeAnimation === animation },
  );
  return (
    <div className={styles.item}>
      <div
        className={styles.btn}
        onClick={handleClick}
      >
        {animation}
      </div>
      <div
        onAnimationEnd={handleEndAnimation}
        className={ballClass}
      />
    </div>
  );
};

Ball.propTypes = {
  activeAnimation: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
  classAnimation: PropTypes.string.isRequired,
  delAnimationAction: PropTypes.func.isRequired,
  setAnimationAction: PropTypes.func.isRequired,
};

export default Ball;
