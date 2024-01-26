#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Welcome } from '../src/cli.js';
import {
  gameStart, duplicates, randomNum,
} from '../src/index.js';

const max = 50;
const repeats = 3;

function generateProgression() {
  const progression = [];
  const start = randomNum(1, max);
  const step = randomNum(1, 10);
  for (let i = 0; i < 10; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
}

// eslint-disable-next-line consistent-return
function brainProgression(name) {
  const progression = generateProgression();
  const hiddenIndex = randomNum(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  duplicates(correctAnswer, answer, name);
  if (correctAnswer !== answer) {
    return 0;
  }
}

const gameName = brainProgression;

const name = Welcome();
console.log('What number is missing in the progression?');
gameStart(name, gameName, repeats);
