export interface IFormModel {
  description: string;
  questions: IQuetionsModel[];
}
export interface IQuetionsModel {
  questionName: string;
  answerName: IAnswerModel[];
  isRequired: boolean;
  isTypeCheckbox: boolean;
}
export interface IAnswerModel {
  answer: string;
  answerText: string;
  value: boolean;
}
