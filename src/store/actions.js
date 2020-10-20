import { SETLEVEL, UNSELECT, CONFIGURE, SELECTROW, SELECTCOL, REPLACE, WIN, PLAY } from './actionTypes';

export const setLevel = () => ({
  type: SETLEVEL,
});

export const configure = () => ({
  type: CONFIGURE,
});

export const win = () => ({
  type: WIN,
});

export const play = () => ({
  type: PLAY,
});

export const selectRow = (row) => ({
  type: SELECTROW,
  row
});
export const selectCol = (col) => ({
  type: SELECTCOL,
  col
});

export const replace = (newOrder) => ({
  type: REPLACE,
  newOrder
});

export const unSelect = () => ({
  type: UNSELECT,
});