/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
import {PixelType} from './pixel-type';
import ImageData from '@canvas/image-data';
import resizeImageData from 'resize-image-data';

// Note: API for browsers

// Public
class PixelData extends PixelType {
  fetchImageData(file) {
    const promise = (() => {
      switch (this.getTypeof(file)) {
        case 'path':
          return this.fetchImageDataViaUrl(file);

        case 'url':
          return this.fetchImageDataViaUrl(file);

        case 'datauri':
          return this.fetchImageDataViaDatauri(file);

        case 'binary':
          return this.fetchImageDataViaBinary(file);

        case 'blob':
          return this.fetchImageDataViaBlob(file);

        case 'file':
          return this.fetchImageDataViaBlob(file);

        case 'image':
          return this.fetchImageDataViaUrl(file.src);

        default:
          return this.fetchImageDataViaBuffer(file);
      }
    })();

    return promise;
  }

  fetchImageDataViaUrl(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = 'Anonymous';
      image.src = url;

      image.onerror = error => reject(error.message);
      return (image.onload = () => {
        return resolve(this.getImageData(image));
      });
    });
  }

  fetchImageDataViaDatauri(datauri) {
    const binary = atob(datauri.slice(datauri.indexOf(',') + 1));

    return this.fetchImageDataViaBinary(binary);
  }

  fetchImageDataViaBinary(binary) {
    return this.fetchImageDataViaBuffer(this.getBufferBinary(binary));
  }

  fetchImageDataViaBuffer(buffer) {
    const { type } = this.getImageType(buffer);

    return this.fetchImageDataViaBlob(new Blob([buffer], { type }));
  }

  fetchImageDataViaBlob(blob) {
    const url = typeof URL !== 'undefined' && URL !== null ? URL : webkitURL;

    return this.fetchImageDataViaUrl(url.createObjectURL(blob));
  }

  fetchObjectUrl(blob) {
    return new Promise(function(resolve, reject) {
      return resolve(blob);
    });
  }

  getImageData(image) {
    const context = document.createElement('canvas').getContext('2d');
    context.canvas.width = image.width;
    context.canvas.height = image.height;
    context.drawImage(image, 0, 0);

    return context.getImageData(0, 0, image.width, image.height);
  }

  createImageData(width, height) {
    return new ImageData(width, height);
  }

  set(to, from) {
    const dataType = Object.prototype.toString.call(to.data);

    if (to.data.set == null) {
      if (to.data.length !== from.data.length) {
        throw new RangeError(
          `Source is invalid(${to.data.length} == ${from.data.length})`
        );
      }

      let i = 0;
      return (() => {
        const result = [];
        while (from.data[i] != null) {
          to.data[i] = from.data[i];

          result.push(i++);
        }
        return result;
      })();
    } else {
      return to.data.set(from.data);
    }
  }

  resizeImageDatas(images, width, height, algorithm) {
    return images.map((imageData) => {
      const newImageData = resizeImageData(
        imageData,
        width,
        height,
        algorithm,
      );
      for (var key in imageData) {
        if (key === 'width' || key === 'height' || key === 'data' || key === 'colorSpace') {
          continue;
        }
        newImageData[key] = imageData[key];
      }

      return newImageData;
    });
  }
}

export default new PixelData();
export {PixelData};
