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
describe('ArrayBuffer', function() {
  const itFuture =
    typeof ArrayBuffer !== 'undefined' && ArrayBuffer !== null ? it : xit;

  describe('animeted', function() {
    itFuture('gif', function(done) {
      const fixture = new ArrayBuffer(animated.gif.length);
      new Uint8Array(fixture).set(animated.gif);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('gif');
        expect(mime).toBe('image/gif');
        expect(type).toBe('arraybuffer');
        return done();
      });
    });

    itFuture('png', function(done) {
      const fixture = new ArrayBuffer(animated.png.length);
      new Uint8Array(fixture).set(animated.png);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('png');
        expect(mime).toBe('image/png');
        expect(type).toBe('arraybuffer');
        return done();
      });
    });

    return itFuture('webp', function(done) {
      const fixture = new ArrayBuffer(animated.webp.length);
      new Uint8Array(fixture).set(animated.webp);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('webp');
        expect(mime).toBe('image/webp');
        expect(type).toBe('arraybuffer');
        return done();
      });
    });
  });

  return describe('static', function() {
    itFuture('gif', function(done) {
      const fixture = new ArrayBuffer(still.gif.length);
      new Uint8Array(fixture).set(still.gif);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('gif');
        expect(mime).toBe('image/gif');
        expect(type).toBe('arraybuffer');
        return done();
      });
    });

    itFuture('png', function(done) {
      const fixture = new ArrayBuffer(still.png.length);
      new Uint8Array(fixture).set(still.png);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('png');
        expect(mime).toBe('image/png');
        expect(type).toBe('arraybuffer');
        return done();
      });
    });

    itFuture('webp', function(done) {
      const fixture = new ArrayBuffer(still.webp.length);
      new Uint8Array(fixture).set(still.webp);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('webp');
        expect(mime).toBe('image/webp');
        expect(type).toBe('arraybuffer');
        return done();
      });
    });

    itFuture('jpg', function(done) {
      const fixture = new ArrayBuffer(still.jpg.length);
      new Uint8Array(fixture).set(still.jpg);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('jpg');
        expect(mime).toBe('image/jpeg');
        expect(type).toBe('arraybuffer');
        return done();
      });
    });

    itFuture('tif', function(done) {
      const fixture = new ArrayBuffer(still.tif.length);
      new Uint8Array(fixture).set(still.tif);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('tif');
        expect(mime).toBe('image/tiff');
        expect(type).toBe('arraybuffer');
        return done();
      });
    });

    itFuture('bmp', function(done) {
      const fixture = new ArrayBuffer(still.bmp.length);
      new Uint8Array(fixture).set(still.bmp);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('bmp');
        expect(mime).toBe('image/bmp');
        expect(type).toBe('arraybuffer');
        return done();
      });
    });

    itFuture('jxr', function(done) {
      const fixture = new ArrayBuffer(still.jxr.length);
      new Uint8Array(fixture).set(still.jxr);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('jxr');
        expect(mime).toBe('image/vnd.ms-photo');
        expect(type).toBe('arraybuffer');
        return done();
      });
    });

    return itFuture('psd', function(done) {
      const fixture = new ArrayBuffer(still.psd.length);
      new Uint8Array(fixture).set(still.psd);

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('psd');
        expect(mime).toBe('image/vnd.adobe.photoshop');
        expect(type).toBe('arraybuffer');
        return done();
      });
    });
  });
});
