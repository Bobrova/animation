import React from 'react';
import { slides, countSlides } from 'constants/sliderConstants';
import { Swipeable } from 'react-swipeable';
import styles from './style.scss';

class FourthTask extends React.Component {
  state = {
    translate: 0,
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const { translate } = this.state;
    const widthWrap = this._sliderWrapper.offsetWidth;
    if (((countSlides * 300) - Math.abs(translate)) < widthWrap) {
      const shift = widthWrap - ((countSlides * 300) - Math.abs(translate));
      this.setState({
        translate: translate + shift,
      });
    }
  }

  scroll = (e) => {
    const { translate } = this.state;
    let s = e.deltaY || e.detail || e.wheelDelta;
    const widthWrap = this._sliderWrapper.offsetWidth;
    if ((Math.abs((translate + s)) > ((countSlides * 300) - widthWrap))) {
      s = -(((countSlides * 300) - widthWrap) + translate);
    }
    if ((translate + s) > 0) {
      s = -translate;
    }
    this.setState({
      translate: translate + s,
    });
  }

  handleClickRight = () => {
    const { translate } = this.state;
    const widthWrap = this._sliderWrapper.offsetWidth;
    let shift = 300;
    if (((countSlides * 300) - (Math.abs(translate) + shift)) <= widthWrap) {
      shift = (countSlides * 300) - widthWrap + translate;
    }
    this.setState({
      translate: translate - shift,
    });
  }

  handleClickLeft = () => {
    const { translate } = this.state;
    let shift = 300;
    if ((translate + shift) >= 0) {
      shift = Math.abs(translate);
    }
    this.setState({
      translate: translate + shift,
    });
  }

  getSliderRef = node => {
    this._sliderWrapper = node;
  }

  swipeEventHandler = (e) => {
    const { translate } = this.state;
    let s = -e.deltaX;
    const widthWrap = this._sliderWrapper.offsetWidth;
    if ((Math.abs((translate + s)) > ((countSlides * 300) - widthWrap))) {
      s = -(((countSlides * 300) - widthWrap) + translate);
    }
    if ((translate + s) > 0) {
      s = -translate;
    }
    this.setState({
      translate: translate + s,
    });
  }

  render() {
    const slider = slides.map((item, idx) => (
      <div
        key={idx}
        className={styles.sliderItem}
        style={{
          background: item.color,
        }}
      >
        {item.title}
      </div>
    ));
    const config = {
      delta: 10,
      preventDefaultTouchmoveEvent: false,
      trackTouch: true,
      trackMouse: true,
      rotationAngle: 0,
    };

    const { translate } = this.state;
    return (
      <Swipeable
        onSwiped={(eventData) => this.swipeEventHandler(eventData)}
        {...config}
      >
        <div className={styles.slider}>
          <div
            className={styles.sliderWrapper}
            ref={this.getSliderRef}
            onWheel={this.scroll}
            style={{
              transform: `translateX(${translate}px)`,
            }}
          >
            {slider}
          </div>
          <div
            className={`${styles.sliderControl} ${styles.sliderControlLeft}`}
            onClick={this.handleClickLeft}
          />
          <div
            className={`${styles.sliderControl} ${styles.sliderControlRight}`}
            onClick={this.handleClickRight}
          />
        </div>
      </Swipeable>
    );
  }
}

export default FourthTask;
