import { ADD_COUNT } from '../action-type'; 
import { MINUS_COUNT } from '../action-type';
import { CLEAR_COUNT } from '../action-type';


export function countPlus() {
  return dispatch => {
    dispatch({
      type: ADD_COUNT, 
    })
  }
}

export function countMinus() {
  return dispatch => {
    dispatch({
      type: MINUS_COUNT,
    })
  }
}

export function countClear() {
  return dispatch => {
    dispatch({
      type: CLEAR_COUNT,
    })
  }
}