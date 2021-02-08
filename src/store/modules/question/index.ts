import {ApplicationAction, Question} from './types';

function reducer(state: Question[] = [], action: ApplicationAction) {
  switch (action.type) {
    case 'ADD_QUESTIONS':
      return action.questions;
    case 'RESPONSE_QUESTION':
      const aux: Question[] = state.map((item: Question) =>
        item.id === action.question.id
          ? {...item, response: action.question.response}
          : item,
      );
      return aux;
  }
}

export default reducer;
