import { SETLEVEL, CONFIGURE, SELECTROW, SELECTCOL, UNSELECT, REPLACE} from './actionTypes';
const { getGameData } = require('../utils/game');

const initialState = {
  counter : 0,
  coins:100,
  diamonds:100,
  correctOrder:[[]],
  currentOrder:[[]],
  lastCharacter:"",
  selectedRow:null,
  selectedCol:null,
}

export const mainReducer = ( state=initialState, action) =>{
  switch(action.type){
    case SETLEVEL:
      const { correctOrder, currentOrder, lastCharacter } = getGameData();
      return { ...state, correctOrder, currentOrder, lastCharacter }
    case CONFIGURE:
      return {...state, isConfigured : true }
    case SELECTROW:
      return { ...state, selectedRow : action.row }
    case SELECTCOL:
      return { ...state, selectedCol : action.col }
    case UNSELECT:
      return { ...state, selectedRow : null, selectedCol : null }
    case REPLACE:
      return { ...state, currentOrder : action.newOrder }
    default:
      return state
  }
}