/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const pixelUtil = require('../../src');

// Fixtures
const { animated, still } = require('fixture-images');

// Specs
describe('Uint8Array', function() {
  const itFuture =
    typeof Uint8Array !== 'undefined' && Uint8Array !== null ? it : xit;

  describe('animeted', function() {
    itFuture('gif', function() {
      let fixture = 'data:image/gif;base64,';
      fixture += animated.gif.toString('base64');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('datauri');
    });

    itFuture('png', function() {
      let fixture = 'data:image/png;base64,';
      fixture += animated.png.toString('base64');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('datauri');
    });

    return itFuture('webp', function() {
      let fixture = 'data:image/webp;base64,';
      fixture += animated.webp.toString('base64');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('datauri');
    });
  });

  return describe('static', function() {
    itFuture('gif', function() {
      let fixture = 'data:image/gif;base64,';
      fixture += still.gif.toString('base64');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('datauri');
    });

    itFuture('png', function() {
      let fixture = 'data:image/png;base64,';
      fixture += still.png.toString('base64');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('datauri');
    });

    itFuture('webp', function() {
      let fixture = 'data:image/webp;base64,';
      fixture += still.webp.toString('base64');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('datauri');
    });

    itFuture('jpg', function() {
      let fixture = 'data:image/jpeg;base64,';
      fixture += still.jpg.toString('base64');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jpg');
      expect(mime).toBe('image/jpeg');
      return expect(type).toBe('datauri');
    });

    itFuture('tif', function() {
      let fixture = 'data:image/tiff;base64,';
      fixture += still.tif.toString('base64');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('tif');
      expect(mime).toBe('image/tiff');
      return expect(type).toBe('datauri');
    });

    itFuture('bmp', function() {
      let fixture = 'data:image/bmp;base64,';
      fixture += still.bmp.toString('base64');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('bmp');
      expect(mime).toBe('image/bmp');
      return expect(type).toBe('datauri');
    });

    itFuture('jxr', function() {
      let fixture = 'data:image/vnd.ms-photo;base64,';
      fixture += still.jxr.toString('base64');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jxr');
      expect(mime).toBe('image/vnd.ms-photo');
      return expect(type).toBe('datauri');
    });

    return itFuture('psd', function() {
      let fixture = 'data:image/vnd.adobe.photoshop;base64,';
      fixture += still.psd.toString('base64');

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('psd');
      expect(mime).toBe('image/vnd.adobe.photoshop');
      return expect(type).toBe('datauri');
    });
  });
});
