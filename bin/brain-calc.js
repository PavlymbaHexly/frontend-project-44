#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { Welcome } from '../src/cli.js';
import {
  gameStart, randomNum,
} from '../src/index.js';

// Функция с заданием
function brainCalcTask() {
  const operators = ['+', '-', '*'];
  const max = 150;
  const [random1, random2] = [randomNum(0, max), randomNum(0, max)];
  const operator = randomNum(0, operators.length - 1);
  const expression = `${random1} ${operators[operator]} ${random2}`;
  // eslint-disable-next-line no-eval
  const correctAnswer = eval(expression);
  return { question: expression, correctAnswer };
}

// Движок
function brainCalc() {
  const task = brainCalcTask();
  console.log(`Question: ${task.question}`);
  const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
  return { ...task, userAnswer };
}

const gameName = brainCalc;

const name = Welcome();
console.log('What is the result of the expression?');
gameStart(name, gameName);
