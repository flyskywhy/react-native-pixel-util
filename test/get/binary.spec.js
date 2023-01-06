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
describe('Binary', function() {
  describe('animeted', function() {
    it('gif', function() {
      const fixture = animated.gif.toString('binary');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('binary');
    });

    it('png', function() {
      const fixture = animated.png.toString('binary');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('binary');
    });

    return it('webp', function() {
      const fixture = animated.webp.toString('binary');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('binary');
    });
  });

  return describe('static', function() {
    it('gif', function() {
      const fixture = still.gif.toString('binary');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('binary');
    });

    it('png', function() {
      const fixture = still.png.toString('binary');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('binary');
    });

    it('webp', function() {
      const fixture = still.webp.toString('binary');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('binary');
    });

    it('jpg', function() {
      const fixture = still.jpg.toString('binary');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jpg');
      expect(mime).toBe('image/jpeg');
      return expect(type).toBe('binary');
    });

    it('tif', function() {
      const fixture = still.tif.toString('binary');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('tif');
      expect(mime).toBe('image/tiff');
      return expect(type).toBe('binary');
    });

    it('bmp', function() {
      const fixture = still.bmp.toString('binary');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('bmp');
      expect(mime).toBe('image/bmp');
      return expect(type).toBe('binary');
    });

    it('jxr', function() {
      const fixture = still.jxr.toString('binary');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jxr');
      expect(mime).toBe('image/vnd.ms-photo');
      return expect(type).toBe('binary');
    });

    return it('psd', function() {
      const fixture = still.psd.toString('binary');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('psd');
      expect(mime).toBe('image/vnd.adobe.photoshop');
      return expect(type).toBe('binary');
    });
  });
});
