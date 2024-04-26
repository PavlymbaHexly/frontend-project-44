#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Welcome } from '../src/cli.js';
import { gameStart, duplicates, randomNum } from '../src/index.js';

const operators = ['+', '-', '*'];
const max = 150;
const repeats = 3;

// eslint-disable-next-line consistent-return
function brainCalc(name) {
  const [random1, random2] = [randomNum(0, max), randomNum(0, max)];
  const operatorIndex = randomNum(0, operators.length - 1);
  const operator = operators[operatorIndex];
  const expression = `${random1} ${operator} ${random2}`;
  console.log(`Question: ${expression}`);
  // eslint-disable-next-line no-use-before-define
  const correctAnswer = calculateAnswer(random1, random2, operator);
  const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
  duplicates(correctAnswer, userAnswer, name);
  if (correctAnswer !== userAnswer) {
    return 0;
  }
}

function calculateAnswer(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 0;
  }
}

const gameName = brainCalc;

const name = Welcome();
console.log('What is the result of the expression?');
gameStart(name, gameName, repeats);
