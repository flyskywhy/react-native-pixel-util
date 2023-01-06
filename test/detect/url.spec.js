/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const pixelUtil = require('../../src');

// Fixtures
const { animated, still } = require('fixture-images').http;

// Specs
describe('URL', function() {
  describe('animeted', function() {
    it('gif', function(done) {
      const fixture = animated.gif + '?foo=bar&baz';

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('gif');
        expect(mime).toBe('image/gif');
        expect(type).toBe('url');
        return done();
      });
    });

    it('png', function(done) {
      const fixture = animated.png + '?foo=bar&baz';

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('png');
        expect(mime).toBe('image/png');
        expect(type).toBe('url');
        return done();
      });
    });

    return it('webp', function(done) {
      const fixture = animated.webp + '?foo=bar&baz';

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('webp');
        expect(mime).toBe('image/webp');
        expect(type).toBe('url');
        return done();
      });
    });
  });

  return describe('static', function() {
    it('gif', function(done) {
      const fixture = still.gif + '?foo=bar&baz';

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('gif');
        expect(mime).toBe('image/gif');
        expect(type).toBe('url');
        return done();
      });
    });

    it('png', function(done) {
      const fixture = still.png + '?foo=bar&baz';

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('png');
        expect(mime).toBe('image/png');
        expect(type).toBe('url');
        return done();
      });
    });

    it('webp', function(done) {
      const fixture = still.webp + '?foo=bar&baz';

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('webp');
        expect(mime).toBe('image/webp');
        expect(type).toBe('url');
        return done();
      });
    });

    it('jpg', function(done) {
      const fixture = still.jpg + '?foo=bar&baz';

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('jpg');
        expect(mime).toBe('image/jpeg');
        expect(type).toBe('url');
        return done();
      });
    });

    it('tif', function(done) {
      const fixture = still.tif + '?foo=bar&baz';

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('tif');
        expect(mime).toBe('image/tiff');
        expect(type).toBe('url');
        return done();
      });
    });

    it('bmp', function(done) {
      const fixture = still.bmp + '?foo=bar&baz';

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('bmp');
        expect(mime).toBe('image/bmp');
        expect(type).toBe('url');
        return done();
      });
    });

    it('jxr', function(done) {
      const fixture = still.jxr + '?foo=bar&baz';

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('jxr');
        expect(mime).toBe('image/vnd.ms-photo');
        expect(type).toBe('url');
        return done();
      });
    });

    return it('psd', function(done) {
      const fixture = still.psd + '?foo=bar&baz';

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('psd');
        expect(mime).toBe('image/vnd.adobe.photoshop');
        expect(type).toBe('url');
        return done();
      });
    });
  });
});
