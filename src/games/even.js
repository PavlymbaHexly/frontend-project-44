import readlineSync from 'readline-sync';
import { getRandom } from '../cli.js';

const randMax = 100;
export const stray = 'Answer "yes" if the number is even, otherwise answer "no".';
export const a = 3;

export const brainEven = () => {
  const number = getRandom(0, randMax);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
  return userAnswer === correctAnswer ? 1 : 0;
};
