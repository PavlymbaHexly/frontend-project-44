#!/usr/bin/env node
import { gameStart } from '../src/index.js';
import { stray, brainEven, a } from '../src/games/even.js';

gameStart(a, stray, brainEven);
