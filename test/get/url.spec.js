/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const pixelUtil = require('../../src').default;

// Fixtures
const { animated, still } = require('fixture-images').http;

// Specs
describe('URL', function() {
  describe('animeted', function() {
    it('gif', function() {
      const fixture = animated.gif + '?foo=bar&baz';

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('url');
    });

    it('png', function() {
      const fixture = animated.png + '?foo=bar&baz';

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('url');
    });

    return it('webp', function() {
      const fixture = animated.webp + '?foo=bar&baz';

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('url');
    });
  });

  return describe('static', function() {
    it('gif', function() {
      const fixture = still.gif + '?foo=bar&baz';

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('gif');
      expect(mime).toBe('image/gif');
      return expect(type).toBe('url');
    });

    it('png', function() {
      const fixture = still.png + '?foo=bar&baz';

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('png');
      expect(mime).toBe('image/png');
      return expect(type).toBe('url');
    });

    it('webp', function() {
      const fixture = still.webp + '?foo=bar&baz';

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('webp');
      expect(mime).toBe('image/webp');
      return expect(type).toBe('url');
    });

    it('jpg', function() {
      const fixture = still.jpg + '?foo=bar&baz';

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jpg');
      expect(mime).toBe('image/jpeg');
      return expect(type).toBe('url');
    });

    it('tif', function() {
      const fixture = still.tif + '?foo=bar&baz';

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('tif');
      expect(mime).toBe('image/tiff');
      return expect(type).toBe('url');
    });

    it('bmp', function() {
      const fixture = still.bmp + '?foo=bar&baz';

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('bmp');
      expect(mime).toBe('image/bmp');
      return expect(type).toBe('url');
    });

    it('jxr', function() {
      const fixture = still.jxr + '?foo=bar&baz';

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('jxr');
      expect(mime).toBe('image/vnd.ms-photo');
      return expect(type).toBe('url');
    });

    return it('psd', function() {
      const fixture = still.psd + '?foo=bar&baz';

      const { ext, mime, type } = pixelUtil.get(fixture);

      expect(ext).toBe('psd');
      expect(mime).toBe('image/vnd.adobe.photoshop');
      return expect(type).toBe('url');
    });
  });
});
