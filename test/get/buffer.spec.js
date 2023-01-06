/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const pixelUtil = require('../../src');

// Fixtures
const { animated, still } = require('fixture-images');

// Specs
describe('Buffer', function() {
  describe('animeted', function() {
    it('gif', function() {
      const fixture = animated.gif;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('buffer');
    });

    it('png', function() {
      const fixture = animated.png;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('buffer');
    });

    return it('webp', function() {
      const fixture = animated.webp;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('buffer');
    });
  });

  return describe('static', function() {
    it('gif', function() {
      const fixture = still.gif;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('buffer');
    });

    it('png', function() {
      const fixture = still.png;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('buffer');
    });

    it('webp', function() {
      const fixture = still.webp;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('buffer');
    });

    it('jpg', function() {
      const fixture = still.jpg;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jpg');
      expect(mime).toBe('image/jpeg');
      return expect(type).toBe('buffer');
    });

    it('tif', function() {
      const fixture = still.tif;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('tif');
      expect(mime).toBe('image/tiff');
      return expect(type).toBe('buffer');
    });

    it('bmp', function() {
      const fixture = still.bmp;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('bmp');
      expect(mime).toBe('image/bmp');
      return expect(type).toBe('buffer');
    });

    it('jxr', function() {
      const fixture = still.jxr;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jxr');
      expect(mime).toBe('image/vnd.ms-photo');
      return expect(type).toBe('buffer');
    });

    return it('psd', function() {
      const fixture = still.psd;

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('psd');
      expect(mime).toBe('image/vnd.adobe.photoshop');
      return expect(type).toBe('buffer');
    });
  });
});
