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
const itFuture =
  typeof FileReaderSync !== 'undefined' && FileReaderSync !== null ? it : xit;
describe('Blob', function() {
  describe('animeted', function() {
    itFuture('gif', function() {
      const fixture = new Blob([animated.gif], { type: 'image/gif' });

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('blob');
    });

    itFuture('png', function() {
      const fixture = new Blob([animated.png], { type: 'image/png' });

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('blob');
    });

    return itFuture('webp', function() {
      const fixture = new Blob([animated.webp], { type: 'image/webp' });

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('blob');
    });
  });

  return describe('static', function() {
    itFuture('gif', function() {
      const fixture = new Blob([still.gif], { type: 'image/gif' });

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('blob');
    });

    itFuture('png', function() {
      const fixture = new Blob([still.png], { type: 'image/png' });

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('blob');
    });

    itFuture('webp', function() {
      const fixture = new Blob([still.webp], { type: 'image/webp' });

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('blob');
    });

    itFuture('jpg', function() {
      const fixture = new Blob([still.jpg], { type: 'image/jpeg' });

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jpg');
      expect(mime).toBe('image/jpeg');
      return expect(type).toBe('blob');
    });

    itFuture('tif', function() {
      const fixture = new Blob([still.tif], { type: 'image/tiff' });

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('tif');
      expect(mime).toBe('image/tiff');
      return expect(type).toBe('blob');
    });

    itFuture('bmp', function() {
      const fixture = new Blob([still.bmp], { type: 'image/bmp' });

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('bmp');
      expect(mime).toBe('image/bmp');
      return expect(type).toBe('blob');
    });

    itFuture('jxr', function() {
      const fixture = new Blob([still.jxr], { type: 'image/vnd.ms-photo' });

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jxr');
      expect(mime).toBe('image/vnd.ms-photo');
      return expect(type).toBe('blob');
    });

    return itFuture('psd', function() {
      const fixture = new Blob([still.psd], {
        type: 'image/vnd.adobe.photoshop'
      });

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('psd');
      expect(mime).toBe('image/vnd.adobe.photoshop');
      return expect(type).toBe('blob');
    });
  });
});
