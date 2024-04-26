import { getRandom } from '../cli.js';
import { answerCheck, getAnswer } from '../index.js';

const randMax = 100;
export const c = 3;
export const stray = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  return a + b;
};

export const brainGCD = (name) => {
  const [number1, number2] = [getRandom(0, randMax), getRandom(0, randMax)];
  const correctAnswer = findGCD(number1, number2);
  const question = `${number1} ${number2}`;
  const answer = getAnswer(question);
  return answerCheck(answer, correctAnswer, name);
};
