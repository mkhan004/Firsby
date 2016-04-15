'use strict';

let expect = require('chai').expect;


class Tester {

  expectEqual(key, value) {
    expect(key).to.equal(value);
  }

  expectNotEqual(key, value) {
    expect(key).to.not.equal(value);
  }

  expectProperty(key, value) {
    expect(key).to.have.property(value);
  }

  expectToContain(key, value) {
    expect(key).toContainJson(value);
  }

}

module.exports = Tester;
