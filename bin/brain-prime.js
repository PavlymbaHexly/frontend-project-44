#!/usr/bin/env node
import { gameStart } from '../src/index.js';
import { stray, brainPrime, a } from '../src/games/prime.js';

gameStart(a, stray, brainPrime);
