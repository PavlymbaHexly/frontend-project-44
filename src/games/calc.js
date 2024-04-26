import { getRandom } from '../cli.js';
import { answerCheck, getAnswer } from '../index.js';

const randMax = 25;
export const stray = 'What is the result of the expression?';
export const a = 3;

const operations = ['+', '-', '*'];

export const brainCalc = (name) => {
  const getRandomOperation = () => operations[getRandom(0, operations.length - 1)];

  const getCorrectAnswer = (num1, num2, operation) => {
    switch (operation) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      default: return 0;
    }
  };

  let correctCount = 0;
  while (correctCount < a) {
    const number1 = getRandom(0, randMax);
    const number2 = getRandom(0, randMax);
    const operation = getRandomOperation();
    const correctAnswer = getCorrectAnswer(number1, number2, operation);

    const question = `${number1} ${operation} ${number2}`;
    const userAnswer = getAnswer(question);
    if (answerCheck(userAnswer, correctAnswer, name) === 1) {
      console.log('Correct!');
      correctCount += 1;
    } else return 0;
  }

  console.log(`Congratulations, ${name}!`);
  
  return 1;
};
