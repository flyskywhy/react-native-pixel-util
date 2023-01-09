/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const pixelUtil = require('../src').default;

// Fixtures
const fixtureImages = require('fixture-images');

// Specs
describe('.getTypeof', function() {
  it('path', function() {
    let fixture = fixtureImages.path.animated.gif;

    let type = pixelUtil.getTypeof(fixture);
    expect(type).toBe('path');

    // Fixed #1
    fixture =
      '/home/flyskywhy/proj/react-native-pixel-util/node_modules/fixture-images/still.WEBP';

    type = pixelUtil.getTypeof(fixture);
    return expect(type).toBe('path');
  });

  it('url', function() {
    const fixture = fixtureImages.https.animated.gif;

    const type = pixelUtil.getTypeof(fixture);
    return expect(type).toBe('url');
  });

  it('datauri', function() {
    let fixture = 'data:image/gif;base64,';
    fixture += fixtureImages.animated.gif.toString('base64');

    const type = pixelUtil.getTypeof(fixture);
    return expect(type).toBe('datauri');
  });

  it('binary', function() {
    const fixture = fixtureImages.animated.gif.toString('binary');

    const type = pixelUtil.getTypeof(fixture);
    return expect(type).toBe('binary');
  });

  it('buffer', function() {
    const fixture = fixtureImages.animated.gif;

    const type = pixelUtil.getTypeof(fixture);
    return expect(type).toBe('buffer');
  });

  let itFuture =
    typeof ArrayBuffer !== 'undefined' && ArrayBuffer !== null ? it : xit;
  itFuture('arraybuffer', function() {
    const fixture = new ArrayBuffer(fixtureImages.animated.gif);

    const type = pixelUtil.getTypeof(fixture);
    return expect(type).toBe('arraybuffer');
  });

  itFuture =
    typeof Uint8Array !== 'undefined' && Uint8Array !== null ? it : xit;
  itFuture('uint8array', function() {
    const fixture = new Uint8Array(fixtureImages.animated.gif);

    const type = pixelUtil.getTypeof(fixture);
    return expect(type).toBe('uint8array');
  });

  itFuture =
    typeof Uint8ClampedArray !== 'undefined' && Uint8ClampedArray !== null
      ? it
      : xit;
  itFuture('uint8clampedarray', function() {
    const fixture = new Uint8ClampedArray(fixtureImages.animated.gif);

    const type = pixelUtil.getTypeof(fixture);
    return expect(type).toBe('uint8clampedarray');
  });

  itFuture = typeof Blob !== 'undefined' && Blob !== null ? it : xit;
  itFuture('blob', function() {
    const fixture = new Blob([fixtureImages.animated.gif], {
      type: 'image/gif'
    });

    const type = pixelUtil.getTypeof(fixture);
    return expect(type).toBe('blob');
  });

  // File isn't constructor
  xit('file', function() {
    const fixture = new File([fixtureImages.animated.gif], {
      type: 'image/gif'
    });

    const type = pixelUtil.getTypeof(fixture);
    return expect(type).toBe('file');
  });

  itFuture = typeof Image !== 'undefined' && Image !== null ? it : xit;
  return itFuture('image', function() {
    const fixture = new Image();
    fixture.src = fixtureImages.https.animated.gif;

    const type = pixelUtil.getTypeof(fixture);
    return expect(type).toBe('image');
  });
});
