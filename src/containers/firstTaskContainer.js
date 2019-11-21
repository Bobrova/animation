import { connect } from 'react-redux';
import FirstTask from 'components/FirstTask';
import {
  setAnimationAction,
  delAnimationAction,
} from 'actions';
import { activeAnimationSelector } from 'selectors';

const mapStateToProps = state => ({
  activeAnimation: activeAnimationSelector(state),
});

export default connect(
  mapStateToProps,
  {
    setAnimationAction,
    delAnimationAction,
  },
)(FirstTask);
