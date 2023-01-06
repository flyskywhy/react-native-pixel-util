/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
let fs, request;
const Promise = require('bluebird');
const { PixelData } = require('./pixel-data');

if (typeof window === 'undefined' || window === null) {
  request = require('request');
  fs = require('fs');
}

// Public
class PixelUtil extends PixelData {
  createBuffer(file) {
    const promise = (() => {
      switch (this.getTypeof(file)) {
        case 'path':
          return this.fetchFile(file);

        case 'url':
          return this.fetchBuffer(file);

        case 'datauri':
          return Promise.resolve(this.getBuffer(file));

        case 'binary':
          return Promise.resolve(this.getBufferBinary(file));

        case 'blob':
          return this.readAsArrayBuffer(file);

        case 'file':
          return this.readAsArrayBuffer(file);

        case 'image':
          return this.fetchBuffer(file.src);

        default:
          return Promise.resolve(file);
      }
    })();

    return promise.then(arraybuffer => new Buffer(new Uint8Array(arraybuffer)));
  }

  fetchFile(path) {
    if (typeof window === 'undefined' || window === null) {
      return Promise.resolve(fs.readFileSync(path));
    } else {
      return this.fetchBuffer(path);
    }
  }

  fetchBuffer(url) {
    if (typeof window === 'undefined' || window === null) {
      return new Promise(function(resolve, reject) {
        return request({ url, encoding: null }, function(
          error,
          response,
          buffer
        ) {
          if (error != null) {
            return reject(error);
          }

          return resolve(buffer);
        });
      });
    } else {
      return this.fetchArrayBuffer(url);
    }
  }

  fetchArrayBuffer(url) {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';
      xhr.send();

      xhr.onerror = error => reject(xhr.statusText);

      return (xhr.onload = function() {
        if (xhr.readyState !== 4) {
          return reject(xhr.statusText);
        }

        return resolve(xhr.response);
      });
    });
  }
}

module.exports = new PixelUtil();
module.exports.PixelUtil = PixelUtil;
