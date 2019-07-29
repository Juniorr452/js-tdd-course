import * as R from 'ramda';
import sum from './utils';

console.log("Union:", R.union([1, 2, 3], [2, 3, 4, 5]));
console.log("Sum 1 + 1:", sum(1,1))