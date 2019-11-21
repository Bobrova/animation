import {
  SET_ANIMATION,
  DEL_ANIMATION,
} from 'constants/ActionTypes';

const initialState = {
  item: {
    animationName: '',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ANIMATION: {
      return {
        ...state,
        item: {
          animationName: action.payload.animation,
        },
      };
    }
    case DEL_ANIMATION: {
      return {
        ...state,
        item: {
          animationName: '',
        },
      };
    }
    default:
      return state;
  }
}
