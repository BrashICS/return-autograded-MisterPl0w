/* Tests for even_nine(value) */

const w = require('./main');

test('Does 9 work?', () => {
  expect(w.even_nine(9)).toBe(false);
});

test('Does 36 work?', () => {
  expect(w.even_nine(36)).toBe(true);
});

test('Does 54 work?', () => {
  expect(w.even_nine(54)).toBe(true);
});

test('Does 80 work?', () => {
  expect(w.even_nine(80)).toBe(false);
});