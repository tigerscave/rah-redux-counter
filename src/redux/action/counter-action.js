import { ADD_COUNTER } from '../action-type'; 

export function countPlus() {
  return dispatch => {
    dispatch({
      type: ADD_COUNTER, 
    })
  }
}