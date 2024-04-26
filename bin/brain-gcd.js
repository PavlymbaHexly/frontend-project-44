#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Welcome } from '../src/cli.js';
import { gameStart, duplicates, randomNum } from '../src/index.js';

const max = 150;
const repeats = 3;

function findGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
}

function brainGCD(name) {
  const [random1, random2] = [randomNum(0, max), randomNum(0, max)];
  console.log(`Question: ${random1} ${random2}`);
  const correctAnswer = findGCD(random1, random2);
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  duplicates(correctAnswer, answer, name);
  return correctAnswer === answer ? 1 : 0;
}

const gameName = brainGCD;

const name = Welcome();
console.log('Find the greatest common divisor of given numbers.');
gameStart(name, gameName, repeats);
