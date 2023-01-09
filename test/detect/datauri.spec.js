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
    itFuture('gif', function(done) {
      let fixture = 'data:image/gif;base64,';
      fixture += animated.gif.toString('base64');

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('gif');
        expect(mime).toBe('image/gif');
        expect(type).toBe('datauri');
        return done();
      });
    });

    itFuture('png', function(done) {
      let fixture = 'data:image/png;base64,';
      fixture += animated.png.toString('base64');

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('png');
        expect(mime).toBe('image/png');
        expect(type).toBe('datauri');
        return done();
      });
    });

    return itFuture('webp', function(done) {
      let fixture = 'data:image/webp;base64,';
      fixture += animated.webp.toString('base64');

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('webp');
        expect(mime).toBe('image/webp');
        expect(type).toBe('datauri');
        return done();
      });
    });
  });

  return describe('static', function() {
    itFuture('gif', function(done) {
      let fixture = 'data:image/gif;base64,';
      fixture += still.gif.toString('base64');

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('gif');
        expect(mime).toBe('image/gif');
        expect(type).toBe('datauri');
        return done();
      });
    });

    itFuture('png', function(done) {
      let fixture = 'data:image/png;base64,';
      fixture += still.png.toString('base64');

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('png');
        expect(mime).toBe('image/png');
        expect(type).toBe('datauri');
        return done();
      });
    });

    itFuture('webp', function(done) {
      let fixture = 'data:image/webp;base64,';
      fixture += still.webp.toString('base64');

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('webp');
        expect(mime).toBe('image/webp');
        expect(type).toBe('datauri');
        return done();
      });
    });

    itFuture('jpg', function(done) {
      let fixture = 'data:image/jpeg;base64,';
      fixture += still.jpg.toString('base64');

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('jpg');
        expect(mime).toBe('image/jpeg');
        expect(type).toBe('datauri');
        return done();
      });
    });

    itFuture('tif', function(done) {
      let fixture = 'data:image/tiff;base64,';
      fixture += still.tif.toString('base64');

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('tif');
        expect(mime).toBe('image/tiff');
        expect(type).toBe('datauri');
        return done();
      });
    });

    itFuture('bmp', function(done) {
      let fixture = 'data:image/bmp;base64,';
      fixture += still.bmp.toString('base64');

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('bmp');
        expect(mime).toBe('image/bmp');
        expect(type).toBe('datauri');
        return done();
      });
    });

    itFuture('jxr', function(done) {
      let fixture = 'data:image/vnd.ms-photo;base64,';
      fixture += still.jxr.toString('base64');

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('jxr');
        expect(mime).toBe('image/vnd.ms-photo');
        expect(type).toBe('datauri');
        return done();
      });
    });

    return itFuture('psd', function(done) {
      let fixture = 'data:image/vnd.adobe.photoshop;base64,';
      fixture += still.psd.toString('base64');

      return pixelUtil.detect(fixture).then(function({ ext, mime, type }) {
        expect(ext).toBe('psd');
        expect(mime).toBe('image/vnd.adobe.photoshop');
        expect(type).toBe('datauri');
        return done();
      });
    });
  });
});
