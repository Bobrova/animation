import { connect } from 'react-redux';
import FirstTask from 'components/FirstTask';
import {
  setAnimationAction,
  delAnimationAction,
} from 'actions';

const mapStateToProps = state => ({
  activeAnimation: state.item.animationName,
});

export default connect(
  mapStateToProps,
  {
    setAnimationAction,
    delAnimationAction,
  },
)(FirstTask);
