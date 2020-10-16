import { ADDITION, SUBTRACTION, CONFIGURE, SHOWALERT, HIDEALERT } from './actionTypes';

const initialState = {
  counter : 0,
  coins:100,
  diamonds:100,
  isConfigured:false,
}

export const mainReducer = ( state=initialState, action) =>{
  switch(action.type){
    case ADDITION:
      return { ...state, counter : state.counter + 1 }
    case SUBTRACTION:
      return { ...state, counter : state.counter - 1 }
    case CONFIGURE:
      return {...state, isConfigured : true }
    default:
      return state
  }
}