import { ADD_COUNTER } from '../action-type'; 

const initialState = {
  count: 0,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_COUNTER: {
      const { count } = state;
      return {
        count: count + 1
      }
    }

    default:  
      return state
  }
}