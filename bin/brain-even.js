#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isEven = (num) => num % 2 === 0;

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

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
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(randomNumber) ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

playGame();
