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
const itFuture =
  typeof FileReaderSync !== 'undefined' && FileReaderSync !== null ? it : xit;
describe('Blob', function() {
  describe('animeted', function() {
    itFuture('gif', function(done) {
      const fixture = new Blob([animated.gif], { type: 'image/gif' });

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('gif');
        expect(mime).toBe('image/gif');
        expect(type).toBe('blob');
        return done();
      });
    });

    itFuture('png', function(done) {
      const fixture = new Blob([animated.png], { type: 'image/png' });

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('png');
        expect(mime).toBe('image/png');
        expect(type).toBe('blob');
        return done();
      });
    });

    return itFuture('webp', function(done) {
      const fixture = new Blob([animated.webp], { type: 'image/webp' });

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('webp');
        expect(mime).toBe('image/webp');
        expect(type).toBe('blob');
        return done();
      });
    });
  });

  return describe('static', function() {
    itFuture('gif', function(done) {
      const fixture = new Blob([still.gif], { type: 'image/gif' });

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('gif');
        expect(mime).toBe('image/gif');
        expect(type).toBe('blob');
        return done();
      });
    });

    itFuture('png', function(done) {
      const fixture = new Blob([still.png], { type: 'image/png' });

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('png');
        expect(mime).toBe('image/png');
        expect(type).toBe('blob');
        return done();
      });
    });

    itFuture('webp', function(done) {
      const fixture = new Blob([still.webp], { type: 'image/webp' });

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('webp');
        expect(mime).toBe('image/webp');
        expect(type).toBe('blob');
        return done();
      });
    });

    itFuture('jpg', function(done) {
      const fixture = new Blob([still.jpg], { type: 'image/jpeg' });

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('jpg');
        expect(mime).toBe('image/jpeg');
        expect(type).toBe('blob');
        return done();
      });
    });

    itFuture('tif', function(done) {
      const fixture = new Blob([still.tif], { type: 'image/tiff' });

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('tif');
        expect(mime).toBe('image/tiff');
        expect(type).toBe('blob');
        return done();
      });
    });

    itFuture('bmp', function(done) {
      const fixture = new Blob([still.bmp], { type: 'image/bmp' });

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('bmp');
        expect(mime).toBe('image/bmp');
        expect(type).toBe('blob');
        return done();
      });
    });

    itFuture('jxr', function(done) {
      const fixture = new Blob([still.jxr], { type: 'image/vnd.ms-photo' });

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('jxr');
        expect(mime).toBe('image/vnd.ms-photo');
        expect(type).toBe('blob');
        return done();
      });
    });

    return itFuture('psd', function(done) {
      const fixture = new Blob([still.psd], {
        type: 'image/vnd.adobe.photoshop'
      });

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('psd');
        expect(mime).toBe('image/vnd.adobe.photoshop');
        expect(type).toBe('blob');
        return done();
      });
    });
  });
});
