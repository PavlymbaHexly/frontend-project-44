#!/usr/bin/env node
import { gameStart } from '../src/index.js';
import { stray, brainCalc, a } from '../src/games/calc.js';

gameStart(a, stray, brainCalc);
