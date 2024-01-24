import readlineSync from 'readline-sync';

export function Welcome() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
