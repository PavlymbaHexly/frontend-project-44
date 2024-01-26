#!/usr/bin/env node
import readlineSync from 'readline-sync';

function isEven(num) {
  return num % 2 === 0;
}

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if ((isEven(randomNumber) && userAnswer === 'yes') || (!isEven(randomNumber) && userAnswer === 'no')) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`${userAnswer} is wrong answer`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

playGame();
