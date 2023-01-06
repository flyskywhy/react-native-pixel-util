/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const pixelUtil = require('../src');

it('createImageData', function() {
  const imageData = pixelUtil.createImageData(59, 798);

  expect(imageData.width).toBe(59);
  expect(imageData.height).toBe(798);
  expect(imageData.data instanceof Uint8Array).not.toBe(
    typeof Uint8ClampedArray !== 'undefined' && Uint8ClampedArray !== null
  );
  expect(imageData.data instanceof Uint8ClampedArray).toBe(
    typeof Uint8ClampedArray !== 'undefined' && Uint8ClampedArray !== null
  );
  return expect(imageData.data.length).toBe(59 * 798 * 4);
});
