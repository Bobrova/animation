import React, { Component } from 'react';
import PropTypes from 'prop-types';
import delay from 'lodash.delay';
import styles from './style.scss';

class ListItem extends Component {
  state = {
    opacity: '0',
    translate: '-20%',
  }

  componentDidMount() {
    const { id } = this.props;
    delay(this.handleRunBlock, 120 * id);
  }

  handleRunBlock = () => {
    const { steps, maxSteps } = this.props;
    this.setState({
      widthPersonalBlock: Math.round((100 * steps) / maxSteps) * 0.8,
      opacity: '1',
      translate: 0,
    });
  }

  render() {
    const {
      person,
      steps,
      source,
      id,
    } = this.props;

    const { widthPersonalBlock, opacity, translate } = this.state;
    const stepsNumber = Math.round(+steps);
    let color = '#236840';
    if (stepsNumber > 12) color = '#2c827a';
    if (stepsNumber < 8) color = '#b29e0a';

    return (
      <div
        className={styles.listItem}
      >
        <div
          className={styles.personBlock}
          style={{
            flexBasis: `${widthPersonalBlock}%`,
            transform: `translateX(${translate})`,
            opacity,
            background: color,
          }}
        >
          <span
            className={`${styles.personName} ${styles.fadeInLeft}`}
            style={{ animationDelay: `${id * 120}ms` }}
          >
            {person}
          </span>
        </div>
        <div
          className={styles.stepsBlock}
        >
          <span
            className={`${styles.steps} ${styles.fadeInLeft}`}
            style={{ animationDelay: `${id * 120}ms` }}
          >
            {`${steps}k steps`}
          </span>
          <span
            className={`${styles.source} ${styles.fadeInLeft}`}
            style={{ animationDelay: `${id * 130}ms` }}
          >
            {source}
          </span>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  steps: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  maxSteps: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ListItem;
