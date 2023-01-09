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
describe('createBuffer', function() {
  let itFuture = typeof window === 'undefined' || window === null ? it : xit;
  itFuture('path', function(done) {
    const fixture = fixtureImages.path.animated.gif;

    return pixelUtil.createBuffer(fixture).then(function(buffer) {
      expect(Buffer.isBuffer(buffer)).toBe(true);
      expect(buffer.length).toBe(fixtureImages.animated.gif.length);
      return done();
    });
  });

  it('url', function(done) {
    const fixture = fixtureImages.https.animated.gif;

    return pixelUtil.createBuffer(fixture).then(function(buffer) {
      expect(Buffer.isBuffer(buffer)).toBe(true);
      expect(buffer.length).toBe(fixtureImages.animated.gif.length);
      return done();
    });
  });

  it('datauri', function(done) {
    let fixture = 'data:image/gif;base64,';
    fixture += fixtureImages.animated.gif.toString('base64');

    return pixelUtil.createBuffer(fixture).then(function(buffer) {
      expect(Buffer.isBuffer(buffer)).toBe(true);
      expect(buffer.length).toBe(fixtureImages.animated.gif.length);
      return done();
    });
  });

  it('binary', function(done) {
    const fixture = fixtureImages.animated.gif.toString('binary');

    return pixelUtil.createBuffer(fixture).then(function(buffer) {
      expect(Buffer.isBuffer(buffer)).toBe(true);
      expect(buffer.length).toBe(fixtureImages.animated.gif.length);
      return done();
    });
  });

  it('buffer', function(done) {
    const fixture = fixtureImages.animated.gif;

    return pixelUtil.createBuffer(fixture).then(function(buffer) {
      expect(Buffer.isBuffer(buffer)).toBe(true);
      expect(buffer.length).toBe(fixtureImages.animated.gif.length);
      return done();
    });
  });

  itFuture =
    typeof ArrayBuffer !== 'undefined' && ArrayBuffer !== null ? it : xit;
  itFuture('arraybuffer', function(done) {
    const fixture = new ArrayBuffer(fixtureImages.animated.gif.length);
    new Uint8Array(fixture).set(fixtureImages.animated.gif);

    return pixelUtil.createBuffer(fixture).then(function(buffer) {
      expect(Buffer.isBuffer(buffer)).toBe(true);
      expect(buffer.length).toBe(fixtureImages.animated.gif.length);
      return done();
    });
  });

  itFuture =
    typeof Uint8Array !== 'undefined' && Uint8Array !== null ? it : xit;
  itFuture('uint8array', function(done) {
    const fixture = new Uint8Array(fixtureImages.animated.gif);

    return pixelUtil.createBuffer(fixture).then(function(buffer) {
      expect(Buffer.isBuffer(buffer)).toBe(true);
      expect(buffer.length).toBe(fixtureImages.animated.gif.length);
      return done();
    });
  });

  itFuture =
    typeof Uint8ClampedArray !== 'undefined' && Uint8ClampedArray !== null
      ? it
      : xit;
  itFuture('uint8clampedarray', function(done) {
    const fixture = new Uint8ClampedArray(fixtureImages.animated.gif);

    return pixelUtil.createBuffer(fixture).then(function(buffer) {
      expect(Buffer.isBuffer(buffer)).toBe(true);
      expect(buffer.length).toBe(fixtureImages.animated.gif.length);
      return done();
    });
  });

  itFuture = typeof Blob !== 'undefined' && Blob !== null ? it : xit;
  itFuture('blob', function(done) {
    const fixture = new Blob([fixtureImages.animated.gif], {
      type: 'image/gif'
    });

    return pixelUtil.createBuffer(fixture).then(function(buffer) {
      expect(Buffer.isBuffer(buffer)).toBe(true);
      expect(buffer.length).toBe(fixtureImages.animated.gif.length);
      return done();
    });
  });

  // File isn't constructor
  xit('file', function(done) {
    const fixture = new File([fixtureImages.animated.gif], {
      type: 'image/gif'
    });

    return pixelUtil.createBuffer(fixture).then(function(buffer) {
      expect(Buffer.isBuffer(buffer)).toBe(true);
      expect(buffer.length).toBe(fixtureImages.animated.gif.length);
      return done();
    });
  });

  itFuture = typeof Image !== 'undefined' && Image !== null ? it : xit;
  return itFuture('image', function(done) {
    const fixture = new Image();
    fixture.src = fixtureImages.https.animated.gif;

    return pixelUtil.createBuffer(fixture).then(function(buffer) {
      expect(Buffer.isBuffer(buffer)).toBe(true);
      expect(buffer.length).toBe(fixtureImages.animated.gif.length);
      return done();
    });
  });
});
