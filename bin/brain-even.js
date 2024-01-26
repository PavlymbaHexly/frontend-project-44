#!/usr/bin/env node
import readlineSync from 'readline-sync';

function isEven(num) {
  return num % 2 === 0;
}

const playGame = () => {
  // eslint-disable-next-line no-use-before-define
  printWelcomeMessage();
  // eslint-disable-next-line no-use-before-define
  const playerName = getPlayerName();
  // eslint-disable-next-line no-use-before-define
  greetPlayer(playerName);
  // eslint-disable-next-line no-use-before-define
  printInstructions();
  // eslint-disable-next-line no-use-before-define
  startGame(playerName);
};

const printWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};

const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  return playerName;
};

const greetPlayer = (playerName) => {
  console.log(`Hello, ${playerName}!`);
};

const printInstructions = () => {
  // Реализация функции вывода инструкций
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const startGame = (playerName) => {
  // Реализация логики игры
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((isEven(randomNumber) && userAnswer.toLowerCase() === 'yes') || (!isEven(randomNumber) && userAnswer.toLowerCase() === 'no')) {
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
