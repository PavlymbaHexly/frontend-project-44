#!/usr/bin/env node
import { gameStart } from '../src/index.js';
import { stray, brainProgression, a } from '../src/games/progression.js';

gameStart(a, stray, brainProgression);
