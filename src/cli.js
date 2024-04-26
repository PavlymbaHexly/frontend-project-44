import readlineSync from 'readline-sync';

export function Welcome() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export const getRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);
