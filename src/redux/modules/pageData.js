import { createAction } from 'redux-actions';

export const COUNT_UP = 'COUNT_UP';
export const countUp = createAction(COUNT_UP);

export const COUNT_DOWN = 'COUNT_DOWN';
export const countDown = createAction(COUNT_DOWN);

export const COUNT_CLEAR = 'COUNT_CLEAR';
export const countClear = createAction(COUNT_CLEAR);

const INITIAL_STATE = {
  count: 0
};

const pageDataReducer = (state = INITIAL_STATE, action) => {
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

    default: {
      return state;
    }
  }
};

export default pageDataReducer;