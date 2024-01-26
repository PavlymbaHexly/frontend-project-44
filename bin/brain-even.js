#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  gameStart, duplicates, Welcome, randomNum,
} from '../src/index.js';

const max = 100;
const repeats = 3;

function isEven(num) {
  return num % 2 === 0;
}

// eslint-disable-next-line consistent-return
function brainEven(name) {
  const question = randomNum(1, max);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  duplicates(correctAnswer, answer, name);
  if (correctAnswer !== answer) {
    return 0;
  }
}

const gameName = brainEven;

const name = Welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameStart(name, gameName, repeats);
