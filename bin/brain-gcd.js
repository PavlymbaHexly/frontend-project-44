#!/usr/bin/env node
import { gameStart } from '../src/index.js';
import { stray, brainGCD, c } from '../src/games/gcd.js';

gameStart(c, stray, brainGCD);
