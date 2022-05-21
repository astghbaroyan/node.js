'use strict'

import {
    imposterFormula
} from "./second.js";

console.log(imposterFormula(1, 10));
console.log(imposterFormula(2, 5));


//Assert module
// import assert  from "assert";
// import { strict as assert } from 'assert';  // ->  Strict assertion mode
// import assert from 'assert/strict';         // ->   Strict assertion mode
import { strict as assert } from 'assert';
const apples = 1;
const oranges = 1;
assert.strictEqual(
  apples,
  oranges,
  `apples ${apples} !== oranges ${oranges}`
);
// AssertionError [ERR_ASSERTION]: apples 1 !== oranges 2

assert.strictEqual(
  1,
  '1',
  new TypeError('Inputs are not identical')
);
// TypeError: Inputs are not identical