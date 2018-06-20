const assert = require('assert');

const ssn = require('./../../src/shortStringNumber');

describe('Test suite for: `shortStringNumber`.', () => {
  describe('Invalid value:', () => {
    it('1', () => assert.strictEqual(ssn(true), true));
  });

  describe('<= 1e4:', () => {
    it('1', () => assert.strictEqual(ssn(1024), 1024));
    it('2', () => assert.strictEqual(ssn(8084), 8084));
  });

  describe('<= 1e6:', () => {
    it('1', () => assert.strictEqual(ssn(9999), 9999));
    it('2', () => assert.strictEqual(ssn(11623), '11.6k'));
    it('3', () => assert.strictEqual(ssn(41939), '41.9k'));
    it('4', () => assert.strictEqual(ssn(201305), '201.3k'));
    it('5', () => assert.strictEqual(ssn(687651), '687.7k'));
    it('6', () => assert.strictEqual(ssn(999999), '1000.0k'));
  });

  describe('<= 1e9:', () => {
    it('1', () => assert.strictEqual(ssn(1033183), '1.03m'));
    it('2', () => assert.strictEqual(ssn(1039183), '1.04m'));
    it('3', () => assert.strictEqual(ssn(22051000), '22.05m'));
  });

  describe('Way big number:', () => {
    it('1', () => assert.strictEqual(ssn(1222333444555666), 1222333444555666));
  });
});
