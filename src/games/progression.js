import { getRandom } from '../cli.js';
import { answerCheck, getAnswer } from '../index.js';

export const a = 3;
export const stray = 'What number is missing in the progression?';

const generateProgression = () => {
  const start = getRandom(0, 50);
  const step = getRandom(1, 10);
  const len = getRandom(5, 15);
  const hidden = getRandom(0, len - 1);
  const progression = [];
  let missingNumber;
  for (let i = 0; i < len; i += 1) {
    const number = start + step * i;
    if (i === hidden) {
      missingNumber = number;
      progression.push('..');
    } else {
      progression.push(number);
    }
  }
  return { question: progression.join(' '), answer: missingNumber };
};

export const brainProgression = (name) => {
  const { question, answer } = generateProgression();
  const userAnswer = parseInt(getAnswer(question), 10);
  return answerCheck(userAnswer, answer, name);
};
