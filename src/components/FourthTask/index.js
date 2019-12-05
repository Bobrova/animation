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
    const widthChild = this._sliderWrapper.children[0].offsetWidth;
    if (((countSlides * widthChild) - Math.abs(translate)) < widthWrap) {
      const shift = widthWrap - ((countSlides * widthChild) - Math.abs(translate));
      this.setState({
        translate: translate + shift,
      });
    }
  }

  getTranslate = (shift) => {
    const { translate } = this.state;
    let shiftTranslate = shift;
    const widthWrap = this._sliderWrapper.offsetWidth;
    const widthChild = this._sliderWrapper.children[0].offsetWidth;
    if (((countSlides * widthChild) - (Math.abs(translate) + shift)) <= widthWrap) {
      shiftTranslate = (countSlides * widthChild) - widthWrap + translate;
    }
    if ((translate - shift) >= 0) {
      shiftTranslate = translate;
    }
    this.setState({
      translate: translate - shiftTranslate,
    });
  }

  scroll = (e) => {
    const shift = e.deltaY;
    this.getTranslate(shift);
  }

  handleClickRight = () => {
    const shift = 300;
    this.getTranslate(shift);
  }

  handleClickLeft = () => {
    const shift = -300;
    this.getTranslate(shift);
  }

  swipeEventHandler = (e) => {
    const shift = e.deltaX;
    this.getTranslate(shift);
  }

  getSliderRef = node => {
    this._sliderWrapper = node;
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
      <div className={styles.page}>
        <Swipeable
          onSwiped={this.swipeEventHandler}
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
      </div>
    );
  }
}

export default FourthTask;
