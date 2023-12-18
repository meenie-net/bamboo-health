type TQuizCategory = "stressAnxiety";
type TQuestionType = "rectangleMultiple" | "squareMultiple";
type TQuestion = {
  type: TQuestionType;
  name: string;
  label: string;
  options: Array<string>;
  img: string;
};
