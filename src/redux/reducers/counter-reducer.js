import { ADD_COUNT } from '../action-type'; 
import { MINUS_COUNT } from '../action-type';
import { CLEAR_COUNT } from '../action-type';

const initialState = {
  count: 0,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_COUNT: {
      const { count } = state;
      return {
        count: count + 1
      }  
    }
    case MINUS_COUNT: {
      const { count } = state;
      return {
        count: count - 1
      }
    }
    case CLEAR_COUNT: {
      return {
        count: 0
      }
    }
    default:
    return state
  }
}