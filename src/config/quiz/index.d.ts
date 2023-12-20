type TQuizCategory = "stressAnxiety" | "adhd" | "procrastination";
type TQuestionType =
  | "rectangleMultiple"
  | "squareMultiple"
  | "oneColumnArrow"
  | "twoColumnsArrow"
  | "comment"
  | "plainText";
type TOption = { label: string; img?: string; score?: number };
type TQuestion = {
  type: TQuestionType;
  name?: string;
  label: string;
  options?: Array<TOption>;
  img: string;
  payload?: { userInfo?: string; tips?: string; content: string };
};
