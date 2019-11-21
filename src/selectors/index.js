import { createSelector } from 'reselect';

const getActiveAnimation = (state) => state.item.animationName;

export const activeAnimationSelector = createSelector(
  [getActiveAnimation],
  activeAnimation => activeAnimation,
);
