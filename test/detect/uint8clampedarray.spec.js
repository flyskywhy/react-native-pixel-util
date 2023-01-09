/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const pixelUtil = require('../../src').default;

// Fixtures
const { animated, still } = require('fixture-images');

// Specs
describe('Uint8ClampedArray', function() {
  const itFuture =
    typeof Uint8ClampedArray !== 'undefined' && Uint8ClampedArray !== null
      ? it
      : xit;

  describe('animeted', function() {
    itFuture('gif', function(done) {
      const fixture = new Uint8ClampedArray(animated.gif);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('gif');
        expect(mime).toBe('image/gif');
        expect(type).toBe('uint8clampedarray');
        return done();
      });
    });

    itFuture('png', function(done) {
      const fixture = new Uint8ClampedArray(animated.png);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('png');
        expect(mime).toBe('image/png');
        expect(type).toBe('uint8clampedarray');
        return done();
      });
    });

    return itFuture('webp', function(done) {
      const fixture = new Uint8ClampedArray(animated.webp);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('webp');
        expect(mime).toBe('image/webp');
        expect(type).toBe('uint8clampedarray');
        return done();
      });
    });
  });

  return describe('static', function() {
    itFuture('gif', function(done) {
      const fixture = new Uint8ClampedArray(still.gif);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('gif');
        expect(mime).toBe('image/gif');
        expect(type).toBe('uint8clampedarray');
        return done();
      });
    });

    itFuture('png', function(done) {
      const fixture = new Uint8ClampedArray(still.png);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('png');
        expect(mime).toBe('image/png');
        expect(type).toBe('uint8clampedarray');
        return done();
      });
    });

    itFuture('webp', function(done) {
      const fixture = new Uint8ClampedArray(still.webp);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('webp');
        expect(mime).toBe('image/webp');
        expect(type).toBe('uint8clampedarray');
        return done();
      });
    });

    itFuture('jpg', function(done) {
      const fixture = new Uint8ClampedArray(still.jpg);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('jpg');
        expect(mime).toBe('image/jpeg');
        expect(type).toBe('uint8clampedarray');
        return done();
      });
    });

    itFuture('tif', function(done) {
      const fixture = new Uint8ClampedArray(still.tif);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('tif');
        expect(mime).toBe('image/tiff');
        expect(type).toBe('uint8clampedarray');
        return done();
      });
    });

    itFuture('bmp', function(done) {
      const fixture = new Uint8ClampedArray(still.bmp);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('bmp');
        expect(mime).toBe('image/bmp');
        expect(type).toBe('uint8clampedarray');
        return done();
      });
    });

    itFuture('jxr', function(done) {
      const fixture = new Uint8ClampedArray(still.jxr);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('jxr');
        expect(mime).toBe('image/vnd.ms-photo');
        expect(type).toBe('uint8clampedarray');
        return done();
      });
    });

    return itFuture('psd', function(done) {
      const fixture = new Uint8ClampedArray(still.psd);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('psd');
        expect(mime).toBe('image/vnd.adobe.photoshop');
        expect(type).toBe('uint8clampedarray');
        return done();
      });
    });
  });
});
