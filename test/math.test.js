const test = require('node:test');
const assert = require('node:assert');
const { add, isEven, formatName } = require('../src/math.js');

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('isEven detects even numbers', () => {
  assert.equal(isEven(4), true);
  assert.equal(isEven(7), false);
});

test('formatName joins first and last', () => {
  assert.equal(formatName('Ada', 'Lovelace'), 'Ada Lovelace');
});
