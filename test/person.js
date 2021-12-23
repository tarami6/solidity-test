const { assert } = require('chai');
const Person = artifacts.require('./Person.sol');

contract('Person', (accounts) => {
  const [owner] = accounts;
  describe('Person', () => {
    it('is doing somthing', async () => {
      const person = await Person.deployed();
      const name = await person.name();
      assert.equal(name, 'test');
    });
  });

  describe('Rami should be hired', () => {
    it('Is checking Ramis status', async () => {
      const person = await Person.deployed();
      const status = await person.hireRami(true);
      assert.equal(status, 'Rami will start build the future on 20 Jan 2022');
    });
  });
});
