import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
export function gameStart(name, gameName, repeats) {
  let count = 0;
  while (count < repeats) {
    if (gameName(name) === 0) return 0;
    count += 1;
  }
  console.log(`Congratulations, ${name}!`);
}

// eslint-disable-next-line consistent-return
export function duplicates(correctAnswer, answer, name) {
  if (correctAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Let's try again, ${name}`);
    return 0;
  }
}

export function Welcome() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
