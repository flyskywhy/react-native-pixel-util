/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const pixelUtil = require('../src');

// Fixtures
const fixtureImages = require('fixture-images');

// Specs
describe('set', () =>
  it('Rewrite the imageData.data', function() {
    const imageData = { data: new Array(10) };
    const source = { data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] };

    pixelUtil.set(imageData, source);

    expect(imageData.data[0]).toBe(0);
    return expect(imageData.data[9]).toBe(9);
  }));
