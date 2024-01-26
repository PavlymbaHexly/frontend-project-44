#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Welcome } from '../src/cli.js';

function isEven(num) {
  return num % 2 === 0;
}

const getUserAnswer = () => readlineSync.question('Your answer: ').toLowerCase();

const checkAnswer = (randomNumber, userAnswer, playerName) => {
  if ((isEven(randomNumber) && userAnswer === 'yes') || (!isEven(randomNumber) && userAnswer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer`);
  console.log(`Let's try again, ${playerName}!`);
  return false;
};

const playGame = () => {
  const playerName = Welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = getUserAnswer();

    if (checkAnswer(randomNumber, userAnswer, playerName)) {
      correctAnswersCount += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

playGame();
