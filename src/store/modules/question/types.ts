import {Action} from 'redux';

export interface Question {
  id: string;
  img: string;
  awnsers: {
    label: string;
    correct: boolean;
  }[];
  response: string;
}

export interface ApplicationState {
  questions: Question[];
}
export interface ResponseQuestion extends Action {
  type: 'RESPONSE_QUESTION';
  question: Question;
}
export interface AddQuestions extends Action {
  type: 'ADD_QUESTIONS';
  questions: Question[];
}
export type ApplicationAction = ResponseQuestion | AddQuestions;
