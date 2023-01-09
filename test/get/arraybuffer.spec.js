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
    itFuture('gif', function() {
      const fixture = new ArrayBuffer(animated.gif.length);
      new Uint8Array(fixture).set(animated.gif);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('arraybuffer');
    });

    itFuture('png', function() {
      const fixture = new ArrayBuffer(animated.png.length);
      new Uint8Array(fixture).set(animated.png);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('arraybuffer');
    });

    return itFuture('webp', function() {
      const fixture = new ArrayBuffer(animated.webp.length);
      new Uint8Array(fixture).set(animated.webp);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('arraybuffer');
    });
  });

  return describe('static', function() {
    itFuture('gif', function() {
      const fixture = new ArrayBuffer(still.gif.length);
      new Uint8Array(fixture).set(still.gif);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('arraybuffer');
    });

    itFuture('png', function() {
      const fixture = new ArrayBuffer(still.png.length);
      new Uint8Array(fixture).set(still.png);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('arraybuffer');
    });

    itFuture('webp', function() {
      const fixture = new ArrayBuffer(still.webp.length);
      new Uint8Array(fixture).set(still.webp);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('arraybuffer');
    });

    itFuture('jpg', function() {
      const fixture = new ArrayBuffer(still.jpg.length);
      new Uint8Array(fixture).set(still.jpg);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jpg');
      expect(mime).toBe('image/jpeg');
      return expect(type).toBe('arraybuffer');
    });

    itFuture('tif', function() {
      const fixture = new ArrayBuffer(still.tif.length);
      new Uint8Array(fixture).set(still.tif);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('tif');
      expect(mime).toBe('image/tiff');
      return expect(type).toBe('arraybuffer');
    });

    itFuture('bmp', function() {
      const fixture = new ArrayBuffer(still.bmp.length);
      new Uint8Array(fixture).set(still.bmp);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('bmp');
      expect(mime).toBe('image/bmp');
      return expect(type).toBe('arraybuffer');
    });

    itFuture('jxr', function() {
      const fixture = new ArrayBuffer(still.jxr.length);
      new Uint8Array(fixture).set(still.jxr);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jxr');
      expect(mime).toBe('image/vnd.ms-photo');
      return expect(type).toBe('arraybuffer');
    });

    return itFuture('psd', function() {
      const fixture = new ArrayBuffer(still.psd.length);
      new Uint8Array(fixture).set(still.psd);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('psd');
      expect(mime).toBe('image/vnd.adobe.photoshop');
      return expect(type).toBe('arraybuffer');
    });
  });
});
