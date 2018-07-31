import { createAction } from 'redux-actions';

export const COUNT_UP = 'COUNT_UP';
export const countUp = createAction(COUNT_UP);

const INITIAL_STATE = {
  count: 0
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COUNT_UP: {
      const { count } = state;
      return {
        count: count + 1
      }
    }

    default: {
      return state;
    }
  }
}