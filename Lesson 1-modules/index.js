'use strict'

import {
    imposterFormula
} from "./second.js";

console.log(imposterFormula(1, 10));  // 10
console.log(imposterFormula(2, 5));   // 40


//Assert module

//import assert  from "assert";
// import { strict as assert } from 'assert';  // ->  Strict assertion mode
// import assert from 'assert/strict';         // ->   Strict assertion mode
import { strict as assert } from 'assert';

// Creates call tracker.
const tracker = new assert.CallTracker();

//**tracker.calls([fn][, exact])
const callsfunc = tracker.calls(imposterFormula, 2);  // -> ok

// const callsfunc = tracker.calls(imposterFormula, 1); // -> If the function has been called 1 time, it gives  an 'ERR_ASSERTION'.  'Expected the imposterFormula function to be executed 1 time(s) but was executed 2 time(s).'
// const callsfunc = tracker.calls(imposterFormula, 0); // -> If the function is called 0 times, it gives an RangeError [ERR_OUT_OF_RANGE]: The value of "exact" is out of range. It must be >= 1 && < 4294967296. Received 0
callsfunc();
callsfunc();

tracker.verify();
// const callsfunc = tracker.calls(imposterFormula, 1);
// [
//   {
//     'message 0': 'Expected the imposterFormula function to be executed 1 time(s) but was executed 2 time(s).',
//     'actual 0': 2,
//     'expected 0': 1,
//     'operator 0': 'imposterFormula',
//     'stack trace 0': Error
  
//   }
// ]


//**assert.deepStrictEqual(actual, expected[, message])
//assert.deepEqual
//assert.deepEqual(1, 1);  // Ok 
//assert.deepEqual('1', 1);  // Ok 
assert.deepStrictEqual(1, 1); // ok
// assert.deepStrictEqual('1', 1); // '1' !== 1


//**assert.notDeepStrictEqual(actual, expected[, message])
//assert.notDeepEqual
//assert.notDeepEqual(1, 1);  // AssertionError [ERR_ASSERTION]: Expected "actual" not to be loosely deep-equal to: 1
//assert.notDeepEqual('1', 1);  // AssertionError [ERR_ASSERTION]: Expected values not to be loosely deep-equal: '1'
//assert.notDeepStrictEqual(1, 1); // AssertionError [ERR_ASSERTION]: Expected "actual" not to be strictly deep-equal to: 1
assert.notDeepStrictEqual('1', 1); // ok


//**assert.doesNotMatch(string, regexp[, message])
// assert.doesNotMatch('I like bee', /like/);
// // AssertionError [ERR_ASSERTION]: The input was expected to not match the regular expression /like/.
// assert.doesNotMatch(123, /hello/);
// // AssertionError [ERR_ASSERTION]: The "string" argument must be of type string. Received type number (123)
assert.doesNotMatch('I like bee', /other/);  // ok


//**assert.equal(actual, expected[, message]) 
// const actual = imposterFormula(2, 5);
// const executed = 50;
// assert.strictEqual(imposterFormula(2, 5), 50); // Error  40 !== 50
assert.strictEqual(1, 1); // OK, 1 == 1
// assert.strictEqual(1, '1'); // Error 1 == '1'
// assert.strictEqual(NaN, NaN); // OK


//**assert.fail([message])
// assert.fail(); // AssertionError [ERR_ASSERTION]: Failed
// assert.fail('hello'); // AssertionError [ERR_ASSERTION]: hello
// assert.fail(new SyntaxError('Unexpected token')); // SyntaxError  'Unexpected token'


//**assert.ifError(value)
assert.ifError(null); // ok
assert.ifError(undefined);// ok
// assert.ifError('value');  // AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 'value'
// assert.ifError(1); // AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 1


//**assert.match(string, regexp[, message])
assert.match('I like bee', /like/); //ok
//assert.match(123, /hello/);
// AssertionError [ERR_ASSERTION]: The "string" argument must be of type string. Received type number (123)
// assert.match('I like bee', /other/);
// AssertionError [ERR_ASSERTION]: The input did not match the regular expression /other/.


// **assert.notStrictEqual(actual, expected[, message])
//assert.notEqual(1, 2); // OK
//assert.notEqual(1, 1); // AssertionError: 1 != 1
//assert.notEqual(1, '1'); // AssertionError: 1 != '1'
//assert.notStrictEqual(1, 2); // OK
//assert.notStrictEqual(1, 1); // AssertionError [ERR_ASSERTION]: Expected "actual" to be strictly unequal to: 1
//assert.notStrictEqual(1, '1'); // OK


//**assert.ok(value[, message])
//assert.ok(true); // OK
// assert.ok(1); // OK
//assert.ok(); // AssertionError: No value argument passed to `assert.ok()`
//assert.ok(false, "it's false"); // AssertionError: it's false


// import path from "path";

// console.log(path.dirname('path'));
// console.log(path.dirname('./second.js'));


// Console module

import console from 'console';

console.log('hello world'); // Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//   Error: Whoops, something bad happened


const name = 'Astghik';
console.warn(`My name is ${name}! `);

//**console.assert(value[, ...message])
console.assert(1, 'Its one'); //ok
console.assert(0, 'ist zero'); //Assertion failed: ist zero


//**console.count([label])
console.count('counts'); // 1
console.count('counts'); // 2
console.count('counts'); // 3

//**console.table(tabularData[, properties])
console.table([
  { name: 'Anahit', lastName: 'Avanesyan' },
  { name: 'Aram', lastName: 'Grigoryan' },
  { name: 'Lilith', lastName: 'Loryan' },
  { name: 'Azat', lastName: 'Zaqaryan' },
])

//┌─────────┬──────────┬─────────────┐
//│ (index) │   name   │  lastName   │
//├─────────┼──────────┼─────────────┤
//│    0    │ 'Anahit' │ 'Avanesyan' │
//│    1    │  'Aram'  │ 'Grigoryan' │
//│    2    │ 'Lilith' │  'Loryan'   │
//│    3    │  'Azat'  │ 'Zaqaryan'  │
//└─────────┴──────────┴─────────────┘
