import readlineSync from 'readline-sync';
import { Welcome } from './cli.js';

export const gameStart = (n, str, gameName) => {
  const name = Welcome();
  let correctCount = 0;
  console.log(str);
  while (correctCount < n) {
    if (gameName(name) === 1) {
      correctCount += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 1;
};

export const getAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

export const loseGame = (correctAnswer, answer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const answerCheck = (answer, correctAnswer) => {
  const parsedAnswer = typeof correctAnswer === 'number' ? parseInt(answer, 10) : answer;
  const isCorrect = parsedAnswer === correctAnswer;
  return isCorrect ? 1 : 0;
};
