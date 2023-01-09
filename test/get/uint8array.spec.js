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
    itFuture('gif', function() {
      const fixture = new Uint8Array(animated.gif);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('uint8array');
    });

    itFuture('png', function() {
      const fixture = new Uint8Array(animated.png);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('uint8array');
    });

    return itFuture('webp', function() {
      const fixture = new Uint8Array(animated.webp);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('uint8array');
    });
  });

  return describe('static', function() {
    itFuture('gif', function() {
      const fixture = new Uint8Array(still.gif);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('uint8array');
    });

    itFuture('png', function() {
      const fixture = new Uint8Array(still.png);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('uint8array');
    });

    itFuture('webp', function() {
      const fixture = new Uint8Array(still.webp);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('uint8array');
    });

    itFuture('jpg', function() {
      const fixture = new Uint8Array(still.jpg);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jpg');
      expect(mime).toBe('image/jpeg');
      return expect(type).toBe('uint8array');
    });

    itFuture('tif', function() {
      const fixture = new Uint8Array(still.tif);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('tif');
      expect(mime).toBe('image/tiff');
      return expect(type).toBe('uint8array');
    });

    itFuture('bmp', function() {
      const fixture = new Uint8Array(still.bmp);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('bmp');
      expect(mime).toBe('image/bmp');
      return expect(type).toBe('uint8array');
    });

    itFuture('jxr', function() {
      const fixture = new Uint8Array(still.jxr);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jxr');
      expect(mime).toBe('image/vnd.ms-photo');
      return expect(type).toBe('uint8array');
    });

    return itFuture('psd', function() {
      const fixture = new Uint8Array(still.psd);

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('psd');
      expect(mime).toBe('image/vnd.adobe.photoshop');
      return expect(type).toBe('uint8array');
    });
  });
});
