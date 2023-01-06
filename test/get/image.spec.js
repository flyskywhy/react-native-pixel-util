/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const pixelUtil = require('../../src');

// Fixtures
const { animated, still } = require('fixture-images').http;

// Specs
describe('Image', function() {
  const itFuture = typeof Image !== 'undefined' && Image !== null ? it : xit;

  describe('animeted', function() {
    itFuture('gif', function() {
      const fixture = new Image();
      fixture.src = animated.gif;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('image');
    });

    itFuture('png', function() {
      const fixture = new Image();
      fixture.src = animated.png;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('image');
    });

    return itFuture('webp', function() {
      const fixture = new Image();
      fixture.src = animated.webp;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('image');
    });
  });

  return describe('static', function() {
    itFuture('gif', function() {
      const fixture = new Image();
      fixture.src = still.gif;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('image');
    });

    itFuture('png', function() {
      const fixture = new Image();
      fixture.src = still.png;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('image');
    });

    itFuture('webp', function() {
      const fixture = new Image();
      fixture.src = still.webp;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('image');
    });

    itFuture('jpg', function() {
      const fixture = new Image();
      fixture.src = still.jpg;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jpg');
      expect(mime).toBe('image/jpeg');
      return expect(type).toBe('image');
    });

    itFuture('tif', function() {
      const fixture = new Image();
      fixture.src = still.tif;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('tif');
      expect(mime).toBe('image/tiff');
      return expect(type).toBe('image');
    });

    itFuture('bmp', function() {
      const fixture = new Image();
      fixture.src = still.bmp;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('bmp');
      expect(mime).toBe('image/bmp');
      return expect(type).toBe('image');
    });

    itFuture('jxr', function() {
      const fixture = new Image();
      fixture.src = still.jxr;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jxr');
      expect(mime).toBe('image/vnd.ms-photo');
      return expect(type).toBe('image');
    });

    return itFuture('psd', function() {
      const fixture = new Image();
      fixture.src = still.psd;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('psd');
      expect(mime).toBe('image/vnd.adobe.photoshop');
      return expect(type).toBe('image');
    });
  });
});
