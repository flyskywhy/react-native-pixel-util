/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
import imageType from 'image-type';
import mime from 'react-native-mime-types';
import FileReader from 'react-native-filereader';
import {Buffer} from 'buffer';

// Mime settings
// mime.define({ 'image/vnd.ms-photo': ['jxr'] });
mime.extensions['image/vnd.ms-photo'] = 'jxr';
mime.extensions['image/jpeg'] = 'jpg';
mime.extensions['image/tiff'] = 'tif';

// Public
class PixelType {
  get(file) {
    const type = this.getTypeof(file);
    const trusted = (() => {
      switch (type) {
        case 'datauri':
          return this.getBuffer(file);

        case 'binary':
          return this.getBufferBinary(file);

        case 'blob':
          return this.readAsArrayBufferSync(file);

        case 'file':
          return this.readAsArrayBufferSync(file);

        default:
          return file;
      }
    })();

    let pixelType = (() => {
      switch (type) {
        case 'url':
          var [url, querystring] = Array.from(trusted.split('?'));

          return this.lookupImageType(url);
        case 'path':
          return this.lookupImageType(trusted);
        case 'image':
          return this.lookupImageType(trusted.src);
        default:
          return this.getImageType(trusted);
      }
    })();

    if (pixelType == null) {
      pixelType = {};
    }
    pixelType.type = type;

    return pixelType;
  }

  detect(file) {
    const type = this.getTypeof(file);

    const promise = (() => {
      switch (type) {
        case 'datauri':
          return Promise.resolve(this.getBuffer(file));

        case 'binary':
          return Promise.resolve(this.getBufferBinary(file));

        case 'blob':
          return this.readAsArrayBuffer(file);

        case 'file':
          return this.readAsArrayBuffer(file);

        default:
          return Promise.resolve(file);
      }
    })();

    return promise.then(trusted => {
      let pixelType = (() => {
        switch (type) {
          case 'url':
            var [url, querystring] = Array.from(trusted.split('?'));

            return this.lookupImageType(url);
          case 'path':
            return this.lookupImageType(trusted);
          case 'image':
            return this.lookupImageType(trusted.src);
          default:
            return this.getImageType(trusted);
        }
      })();

      if (pixelType == null) {
        pixelType = {};
      }
      pixelType.type = type;

      return pixelType;
    });
  }

  getTypeof(file) {
    if (Buffer.isBuffer(file)) {
      return 'buffer';
    }

    let type = Object.prototype.toString.call(file);
    type = type
      .toString()
      .match(/(\w+)\]/)[1]
      .toLowerCase();
    switch (type) {
      case 'string':
        switch (false) {
          case !file.match(/^https?:\/\//):
            return 'url';

          case !file.match(/^data:image\//):
            return 'datauri';

          case !file.replace(/^file:\//, '').match(/^\/\/?[\w\-.~ ]/):
            return 'path';

          default:
            return 'binary';
        }

      case 'htmlimageelement':
        return 'image';

      default:
        return type;
    }
  }

  getImageType(buffer) {
    if (buffer instanceof ArrayBuffer) {
      buffer = new Uint8Array(buffer);
    }
    return imageType(buffer);
  }

  lookupImageType(url) {
    const mimeType = mime.lookup(url);

    return {
      mime: mimeType,
      ext: mime.extension(mimeType)
    };
  }

  getBuffer(datauri) {
    return new Buffer(datauri.slice(datauri.indexOf(',') + 1), 'base64');
  }

  getBufferBinary(binary) {
    return new Buffer(binary, 'binary');
  }

  readAsArrayBuffer(blob) {
    return new Promise(function(resolve, reject) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      return (reader.onload = () => resolve(reader.result));
    });
  }

  readAsArrayBufferSync(blob) {
    if (typeof FileReaderSync !== 'undefined' && FileReaderSync !== null) {
      const reader = new FileReaderSync();
      return reader.readAsArrayBuffer(blob);
    } else {
      return new ArrayBuffer(0);
    }
  }
}

export default new PixelType();
export {PixelType};
