#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Welcome } from '../src/cli.js';
import {
  gameStart, duplicates, randomNum,
} from '../src/index.js';

const max = 50;
const repeats = 3;

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// eslint-disable-next-line consistent-return
function brainPrime(name) {
  const question = randomNum(1, max);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  duplicates(correctAnswer, answer, name);
  if (correctAnswer !== answer) {
    return 0;
  }
}

const gameName = brainPrime;

const name = Welcome();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
gameStart(name, gameName, repeats);
