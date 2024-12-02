import { performance } from 'node:perf_hooks';
import consumeInput from './consumeInput/index.js';
import solutions from '../solutions/index.js';

const DIFFICULTY = process.env.DIFFICULTY || 'input';

const main = async () => {
  Object.keys(solutions).forEach((solution) => {
    const { a, b, parser } = solutions[solution];
    const contents = consumeInput(`${process.env.PWD}/solutions/${solution}/puzzle.${DIFFICULTY}.txt`);
    const parsed = parser(contents);
    const startA = performance.now();
    const solvedA = a(parsed);
    const endA = performance.now();

    const startB = performance.now();
    const solvedB = b(parsed);
    const endB = performance.now();

    console.group(solution);
    console.log('Part A:', solvedA, `(${Math.round((endA - startA) * 10000) / 10000}ms)`);
    console.log('Part B:', solvedB, `(${Math.round((endB - startB) * 10000) / 10000}ms)`);
    console.groupEnd();
  });
};

main();
