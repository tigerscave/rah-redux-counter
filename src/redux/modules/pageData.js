import { createAction } from 'redux-actions';

export const COUNT_UP = 'COUNT_UP';
export const countUp = createAction(COUNT_UP);

export const COUNT_DOWN = 'COUNT_DOWN';
export const countDown = createAction(COUNT_DOWN);

export const COUNT_CLEAR = 'COUNT_CLEAR';
export const countClear = createAction(COUNT_CLEAR);

export const INPUT_NUMBER = 'INPUT_NUMBER';
export const inputNumber = createAction(INPUT_NUMBER);

export const NUMBER_BUTTONS = 'NUMBER_BUTTONS';
export const numberButton = createAction(NUMBER_BUTTONS);

const INITIAL_STATE = {
  count: 0
};

console.log(countUp());

const pageDataReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  
  switch(action.type) {
    case COUNT_UP: {
      const { count } = state;
      return {
        count: count + 1
      }
    }

    case COUNT_DOWN: {
      const { count } = state;
      return {
        count: count - 1
      }
    }

    case COUNT_CLEAR: {
      return {
        count: 0
      }
    }

    case INPUT_NUMBER: {
      console.log(typeof(action.payload));
      
      return {
        count: action.payload
      }
    }

    case NUMBER_BUTTONS: {
      return {
        count: action.payload
      }
    }

    default: {
      return state;
    }
  }
};

export default pageDataReducer;