#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Welcome } from '../src/cli.js';
import { gameStart, duplicates } from '../src/index.js';

function isEven(num) {
  return num % 2 === 0;
}

function brainEven(name) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  duplicates(correctAnswer, userAnswer, name);
  return userAnswer === correctAnswer ? 1 : 0;
}

const gameName = brainEven;

const name = Welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameStart(name, gameName, 3);
