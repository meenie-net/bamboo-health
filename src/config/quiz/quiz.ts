import { adhd } from "./modules/adhd";
import { procrastination } from "./modules/procrastination";
import { stressAnxiety } from "./modules/stressAnxiety";

const quiz: {
  [key: string]: {
    questions: TQuestion[];
    answers?: {
      [key: string]: [];
    };
  };
} = {
  stressAnxiety,
  adhd,
  procrastination,
};

Object.keys(quiz).forEach((q) => {
  const result = {};
  quiz[q].questions.forEach((q) => {
    Object.defineProperty(result, q.name!, {
      value: [],
      configurable: true,
      enumerable: true,
      writable: true,
    });
  });
  Object.defineProperty(quiz[q], "answers", {
    value: result,
    configurable: true,
    enumerable: true,
    writable: true,
  });
});

export default quiz;
