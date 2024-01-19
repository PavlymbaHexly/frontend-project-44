#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isEven = (num) => num % 2 === 0;

const printWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};

const getPlayerName = () => readlineSync.question('May I have your name? ');

const greetPlayer = (playerName) => {
  console.log(`Hello, ${playerName}!`);
};

const printInstructions = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const playGame = () => {
  printWelcomeMessage();
  const playerName = getPlayerName();
  greetPlayer(playerName);
  printInstructions();

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isEven(randomNumber) && userAnswer.toLowerCase() === 'yes') {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else if (!isEven(randomNumber) && userAnswer.toLowerCase() === 'no') {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isEven(randomNumber) ? 'yes' : 'no'}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

playGame();
