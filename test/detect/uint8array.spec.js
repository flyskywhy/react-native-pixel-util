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
describe('Uint8Array', function() {
  const itFuture =
    typeof Uint8Array !== 'undefined' && Uint8Array !== null ? it : xit;

  describe('animeted', function() {
    itFuture('gif', function(done) {
      const fixture = new Uint8Array(animated.gif);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('gif');
        expect(mime).toBe('image/gif');
        expect(type).toBe('uint8array');
        return done();
      });
    });

    itFuture('png', function(done) {
      const fixture = new Uint8Array(animated.png);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('png');
        expect(mime).toBe('image/png');
        expect(type).toBe('uint8array');
        return done();
      });
    });

    return itFuture('webp', function(done) {
      const fixture = new Uint8Array(animated.webp);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('webp');
        expect(mime).toBe('image/webp');
        expect(type).toBe('uint8array');
        return done();
      });
    });
  });

  return describe('static', function() {
    itFuture('gif', function(done) {
      const fixture = new Uint8Array(still.gif);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('gif');
        expect(mime).toBe('image/gif');
        expect(type).toBe('uint8array');
        return done();
      });
    });

    itFuture('png', function(done) {
      const fixture = new Uint8Array(still.png);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('png');
        expect(mime).toBe('image/png');
        expect(type).toBe('uint8array');
        return done();
      });
    });

    itFuture('webp', function(done) {
      const fixture = new Uint8Array(still.webp);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('webp');
        expect(mime).toBe('image/webp');
        expect(type).toBe('uint8array');
        return done();
      });
    });

    itFuture('jpg', function(done) {
      const fixture = new Uint8Array(still.jpg);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('jpg');
        expect(mime).toBe('image/jpeg');
        expect(type).toBe('uint8array');
        return done();
      });
    });

    itFuture('tif', function(done) {
      const fixture = new Uint8Array(still.tif);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('tif');
        expect(mime).toBe('image/tiff');
        expect(type).toBe('uint8array');
        return done();
      });
    });

    itFuture('bmp', function(done) {
      const fixture = new Uint8Array(still.bmp);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('bmp');
        expect(mime).toBe('image/bmp');
        expect(type).toBe('uint8array');
        return done();
      });
    });

    itFuture('jxr', function(done) {
      const fixture = new Uint8Array(still.jxr);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('jxr');
        expect(mime).toBe('image/vnd.ms-photo');
        expect(type).toBe('uint8array');
        return done();
      });
    });

    return itFuture('psd', function(done) {
      const fixture = new Uint8Array(still.psd);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('psd');
        expect(mime).toBe('image/vnd.adobe.photoshop');
        expect(type).toBe('uint8array');
        return done();
      });
    });
  });
});
