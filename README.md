# react-native-pixel-util

[![npm version](http://img.shields.io/npm/v/react-native-pixel-util.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-util "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/react-native-pixel-util.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-util "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-native-pixel-util.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-util "View this project on npm")
[![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android%20%7C%20web-989898.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-util "View this project on npm")

## Installation

```bash
$ npm install react-native-pixel-util
```
For RN >= 0.65, run `npm install react-native-blob-util`.

For RN < 0.65, run `npm install react-native-blob-util@0.16.3`, and patch manually to [fix: with react-native-web product build will export 'URIUtil' (reexported as 'URIUtil') was not found](https://github.com/RonRadtke/react-native-blob-util/pull/201/files).
```js
var pixelUtil= require('react-native-pixel-util');
console.log(pixelUtil); //object
```

# API

## `.createBuffer`(file) -> Promise.then(`buffer`)

Create buffer of an argument.

```js
// var path = '/storage/emulated/0/Pictures/gifs/ani (1).gif' // Android
var path = 'file:///private/var/mobile/Containers/.../foo.png'; // iOS
pixelUtil.createBuffer(path).then(function(buffer){
  console.log(buffer);// <Buffer 47 49 46 38 39 ...
});

var url= 'http://example.com/foo.png';
pixelUtil.createBuffer(url).then(function(buffer){
  console.log(buffer);// <Buffer 47 49 46 38 39 ...
});

var datauri= 'data:image/png;base64,iVBORw0KGgoAAA...'; // e.g. comes from [data-uri.macro](https://github.com/Andarist/data-uri.macro)
pixelUtil.createBuffer(datauri).then(function(buffer){
  console.log(buffer);// <Buffer 47 49 46 38 39 ...
});

var binary= 'PNG\n\nIHDR``¶j\n        0PLT';
pixelUtil.createBuffer(binary).then(function(buffer){
  console.log(buffer);// <Buffer 47 49 46 38 39 ...
});

var buffer = fs.readFileSync('foo.png'); // actually readFile by react-native-blob-util or react-native-fs
pixelUtil.createBuffer(buffer).then(function(buffer){
  console.log(buffer);// <Buffer 47 49 46 38 39 ...
});

var arraybuffer= new ArrayBuffer(buffer.length);
new Uint8Array(arraybuffer).set(buffer);
pixelUtil.createBuffer(arraybuffer).then(function(buffer){
  console.log(buffer);// <Buffer 47 49 46 38 39 ...
});

var uint8array= new Buffer(buffer);
pixelUtil.createBuffer(uint8array).then(function(buffer){
  console.log(buffer);// <Buffer 47 49 46 38 39 ...
});

var uint8clampedarray= new Uint8ClampedArray(buffer);
pixelUtil.createBuffer(uint8clampedarray).then(function(buffer){
  console.log(buffer);// <Buffer 47 49 46 38 39 ...
});

var blob= new Blob([buffer],{type:'image/png'});
pixelUtil.createBuffer(blob).then(function(buffer){
  console.log(buffer);// <Buffer 47 49 46 38 39 ...
});

var file= new File([buffer],{type:'image/png'});
pixelUtil.createBuffer(file).then(function(buffer){
  console.log(buffer);// <Buffer 47 49 46 38 39 ...
});

var image= new Image;
image.src= 'http://example.com/foo.png';
pixelUtil.createBuffer(image).then(function(buffer){
  console.log(buffer);// <Buffer 47 49 46 38 39 ...
});
```

## `.detect`(file) -> Promise.then(`{ext,mime,type}`)

> Asynchronous detection the image type and object type of an argument.

```js
// var path = '/storage/emulated/0/Pictures/gifs/ani (1).gif' // Android
var path = 'file:///private/var/mobile/Containers/.../foo.png'; // iOS
pixelUtil.detect(path).then(function(types){
  console.log(types);
});
//-> {ext: 'png', mime: 'image/png', type: 'path'}

var url= 'http://example.com/foo.png';
pixelUtil.detect(url).then(function(types){
  console.log(types);
});
//-> {ext: 'png', mime: 'image/png', type: 'url'}

var datauri= 'data:image/png;base64,iVBORw0KGgoAAA...'; // e.g. comes from [data-uri.macro](https://github.com/Andarist/data-uri.macro)
pixelUtil.detect(datauri).then(function(types){
  console.log(types);
});
//-> {ext: 'png', mime: 'image/png', type: 'datauri'}

var binary= 'PNG\n\nIHDR``¶j\n        0PLT';
pixelUtil.detect(binary).then(function(types){
  console.log(types);
});
//-> {ext: 'png', mime: 'image/png', type: 'binary'}

var buffer = fs.readFileSync('foo.png'); // actually readFile by react-native-blob-util or react-native-fs
pixelUtil.detect(buffer).then(function(types){
  console.log(types);
});
//-> {ext: 'png', mime: 'image/png', type: 'buffer'}

var arraybuffer= new ArrayBuffer(buffer.length);
new Uint8Array(arraybuffer).set(buffer);
pixelUtil.detect(arraybuffer).then(function(types){
  console.log(types);
});
//-> {ext: 'png', mime: 'image/png', type: 'arraybuffer'}

var uint8array= new Uint8Array(buffer);
pixelUtil.detect(uint8array).then(function(types){
  console.log(types);
});
//-> {ext: 'png', mime: 'image/png', type: 'uint8array'}

var uint8clampedarray= new Uint8ClampedArray(buffer);
pixelUtil.detect(uint8clampedarray).then(function(types){
  console.log(types);
});
//-> {ext: 'png', mime: 'image/png', type: 'uint8clampedarray'}

var blob= new Blob([buffer],{type:'image/png'});
pixelUtil.detect(blob).then(function(types){
  console.log(types);
});
//-> {ext: 'png', mime: 'image/png', type: 'blob'}

var file= new File([buffer],{type:'image/png'});
pixelUtil.detect(file).then(function(types){
  console.log(types);
});
//-> {ext: 'png', mime: 'image/png', type: 'file'}

var image= new Image;
image.src= 'http://example.com/foo.png';
pixelUtil.detect(image).then(function(types){
  console.log(types);
});
//-> {ext: 'png', mime: 'image/png', type: 'image'}
```

## `.get`(file) -> `{ext,mime,type}`

> Synchronous detection the image type and object type of an argument.

> __Blob/File is deprecate__. Because analyze using [FileReaderSync](https://w3c.github.io/FileAPI/#FileReaderSync). But has not been implemented in the current browsers...

```js
// var path = '/storage/emulated/0/Pictures/gifs/ani (1).gif' // Android
var path = 'file:///private/var/mobile/Containers/.../foo.png'; // iOS
pixelUtil.get(path);
//-> {ext: 'png', mime: 'image/png', type: 'path'}

var url= 'http://example.com/foo.png';
pixelUtil.get(url);
//-> {ext: 'png', mime: 'image/png', type: 'url'}

var datauri= 'data:image/png;base64,iVBORw0KGgoAAA...'; // e.g. comes from [data-uri.macro](https://github.com/Andarist/data-uri.macro)
pixelUtil.get(datauri);
//-> {ext: 'png', mime: 'image/png', type: 'datauri'}

var binary= 'PNG\n\nIHDR``¶j\n        0PLT';
pixelUtil.get(binary);
//-> {ext: 'png', mime: 'image/png', type: 'binary'}

var buffer = fs.readFileSync('foo.png'); // actually readFile by react-native-blob-util or react-native-fs
pixelUtil.get(buffer);
//-> {ext: 'png', mime: 'image/png', type: 'buffer'}

var arraybuffer= new ArrayBuffer(buffer.length);
new Uint8Array(arraybuffer).set(buffer);
pixelUtil.get(arraybuffer);
//-> {ext: 'png', mime: 'image/png', type: 'arraybuffer'}

var uint8array= new Uint8Array(buffer);
pixelUtil.get(uint8array);
//-> {ext: 'png', mime: 'image/png', type: 'uint8array'}

var uint8clampedarray= new Uint8ClampedArray(buffer);
pixelUtil.get(uint8clampedarray);
//-> {ext: 'png', mime: 'image/png', type: 'uint8clampedarray'}

var blob= new Blob([buffer],{type:'image/png'});
pixelUtil.get(blob);
//-> {ext: 'png', mime: 'image/png', type: 'blob'}

var file= new File([buffer],{type:'image/png'});
pixelUtil.get(file);
//-> {ext: 'png', mime: 'image/png', type: 'file'}

var image= new Image;
image.src= 'http://example.com/foo.png';
pixelUtil.get(image);
//-> {ext: 'png', mime: 'image/png', type: 'image'}
```

## `.getTypeof`(file) -> `type`

Detect the object type of an argument.

```js
// var path = '/storage/emulated/0/Pictures/gifs/ani (1).gif' // Android
var path = 'file:///private/var/mobile/Containers/.../foo.png'; // iOS
pixelUtil.getTypeof(path);
//-> path

var url= 'http://example.com/foo.png';
pixelUtil.getTypeof(url);
//-> url

var datauri= 'data:image/png;base64,iVBORw0KGgoAAA...'; // e.g. comes from [data-uri.macro](https://github.com/Andarist/data-uri.macro)
pixelUtil.getTypeof(datauri);
//-> datauri

var binary= 'PNG\n\nIHDR``¶j\n        0PLT';
pixelUtil.getTypeof(binary);
//-> binary

var buffer = fs.readFileSync('foo.png'); // actually readFile by react-native-blob-util or react-native-fs
pixelUtil.getTypeof(buffer);
//-> buffer

var arraybuffer= new ArrayBuffer(buffer.length);
pixelUtil.getTypeof(arraybuffer);
//-> arraybuffer

var uint8array= new Uint8Array(buffer);
pixelUtil.getTypeof(uint8array);
//-> uint8array

var uint8clampedarray= new Uint8ClampedArray(buffer);
pixelUtil.getTypeof(uint8clampedarray);
//-> uint8clampedarray

var blob= new Blob([buffer],{type:'image/png'});
pixelUtil.getTypeof(blob);
//-> blob

var file= new File([buffer],{type:'image/png'});
pixelUtil.getTypeof(file);
//-> file

var image= new Image;
image.src= 'http://example.com/foo.png';
pixelUtil.getTypeof(image);
//-> image
```

## `.createImageData`(width,height) -> imageData
Return imageData has `width` and `height`.

```js
pixelUtil.createImageData(59, 798);
//-> <ImageData {width: 59, height: 798, data: <Uint8ClampedArray ...>}>
```

# API for browser

## `.fetchImageData`(file) -> Promise.then(`imageData`)
Create ImageData of an argument.

```js
// var path = '/storage/emulated/0/Pictures/gifs/ani (1).gif' // Android
var path = 'file:///private/var/mobile/Containers/.../foo.png'; // iOS
pixelUtil.fetchImageData(path).then(function(imageData){
  console.log(imageData instanceof ImageData);// true
  console.log(imageData.width);// 73
  console.log(imageData.height);// 73
});

var url= 'http://example.com/foo.png';
pixelUtil.fetchImageData(url).then(function(imageData){
  console.log(imageData instanceof ImageData);// true
  console.log(imageData.width);// 73
  console.log(imageData.height);// 73
});

var datauri= 'data:image/png;base64,iVBORw0KGgoAAA...'; // e.g. comes from [data-uri.macro](https://github.com/Andarist/data-uri.macro)
pixelUtil.fetchImageData(datauri).then(function(imageData){
  console.log(imageData instanceof ImageData);// true
  console.log(imageData.width);// 73
  console.log(imageData.height);// 73
});

var binary= 'PNG\n\nIHDR``¶j\n        0PLT';
pixelUtil.fetchImageData(binary).then(function(imageData){
  console.log(imageData instanceof ImageData);// true
  console.log(imageData.width);// 73
  console.log(imageData.height);// 73
});

var buffer = fs.readFileSync('foo.png'); // actually readFile by react-native-blob-util or react-native-fs
pixelUtil.fetchImageData(buffer).then(function(imageData){
  console.log(imageData instanceof ImageData);// true
  console.log(imageData.width);// 73
  console.log(imageData.height);// 73
});

var arraybuffer= new ArrayBuffer(buffer.length);
new Uint8Array(arraybuffer).set(buffer);
pixelUtil.fetchImageData(arraybuffer).then(function(imageData){
  console.log(imageData instanceof ImageData);// true
  console.log(imageData.width);// 73
  console.log(imageData.height);// 73
});

var uint8array= new Uint8Array(buffer);
pixelUtil.fetchImageData(uint8array).then(function(imageData){
  console.log(imageData instanceof ImageData);// true
  console.log(imageData.width);// 73
  console.log(imageData.height);// 73
});

var uint8clampedarray= new Uint8ClampedArray(buffer);
pixelUtil.fetchImageData(uint8clampedarray).then(function(imageData){
  console.log(imageData instanceof ImageData);// true
  console.log(imageData.width);// 73
  console.log(imageData.height);// 73
});

var blob= new Blob([buffer],{type:'image/png'});
pixelUtil.fetchImageData(blob).then(function(imageData){
  console.log(imageData instanceof ImageData);// true
  console.log(imageData.width);// 73
  console.log(imageData.height);// 73
});

var file= new File([buffer],{type:'image/png'});
pixelUtil.fetchImageData(file).then(function(imageData){
  console.log(imageData instanceof ImageData);// true
  console.log(imageData.width);// 73
  console.log(imageData.height);// 73
});

var image= new Image;
image.src= 'http://example.com/foo.png';
pixelUtil.fetchImageData(image).then(function(imageData){
  console.log(imageData instanceof ImageData);// true
  console.log(imageData.width);// 73
  console.log(imageData.height);// 73
});
```

## `.set`(imageData,source) polyfill under IE11

Instance of imageData.data is `CanvasPixelArray` if __IE10 or less__.
That hasn't a `.set` method of `Uint8Array`, Change the `imageData.data` using `pixelUtil.set` with `source.data`.

```js
var image= new Image;
image.src= 'http://example.com/foo.png';
pixelUtil.fetchImageData(image).then(function(imageData){
  var source= {data:new Array(imageData.data.length)};
  for(var i= 0; i< imageData.data.length; i++){
    source.data[i]= 0;
  }
  source.data[0]= 255;

  pixelUtl.set(imageData,source); // undefined

  console.log(imageData[0]); // 255
  console.log(imageData[imageData.data.length-1]); // 0
});
```

## `.resizeImageDatas`(imageDatas, width, height, algorithm) -> newImageDatas

return `newImageDatas` is Array contains one or more `ImageData` has `width` and `height` and also keep other property of `imageDatas` e.g. `delay` comes from [react-native-pixel-gif](https://github.com/flyskywhy/react-native-pixel-gif).
> `algorithms` ref to [resize-image-data](https://github.com/LinusU/resize-image-data).

```js
import pixel from 'react-native-pixel-image';
import pixelUtil from 'react-native-pixel-util';

const file = 'https://59naga.github.io/fixtures/animated.GIF';
const imageDatas = await pixel(file);
console.log(imageDatas);
//-> <ImageData {width: 73, height: 73, data: <Uint8ClampedArray ...>, delay: 1000, disposal: 0, ...}>
//-> <ImageData {width: 73, height: 73, data: <Uint8ClampedArray ...>, delay: 900, disposal: 0, ...}>
//-> <ImageData {width: 73, height: 73, data: <Uint8ClampedArray ...>, delay: 800, disposal: 0, ...}>
// ...
const newImageDatas = pixelUtil.resizeImageDatas(
  imageDatas,
  20,
  20,
  'nearest-neighbor',
);
console.log(newImageDatas);
//-> <ImageData {width: 20, height: 20, data: <Uint8ClampedArray ...>, delay: 1000, disposal: 0, ...}>
//-> <ImageData {width: 20, height: 20, data: <Uint8ClampedArray ...>, delay: 900, disposal: 0, ...}>
//-> <ImageData {width: 20, height: 20, data: <Uint8ClampedArray ...>, delay: 800, disposal: 0, ...}>
// ...
```

# Related projects
* [react-native-pixel-image](https://github.com/flyskywhy/react-native-pixel-image)
* __react-native-pixel-util__
* [react-native-pixel-gif](https://github.com/flyskywhy/react-native-pixel-gif)
* [react-native-pixel-png](https://github.com/flyskywhy/react-native-pixel-png)
* [react-native-pixel-jpg](https://github.com/flyskywhy/react-native-pixel-jpg)
* [react-native-pixel-bmp](https://github.com/flyskywhy/react-native-pixel-bmp)
* [react-native-pixel-webp](https://github.com/flyskywhy/react-native-pixel-webp)
* [pixel-to-ansi](https://github.com/59naga/pixel-to-ansi)
* [pixel-to-svg](https://github.com/59naga/pixel-to-svg)

License
---
[MIT][License]

[License]: http://59naga.mit-license.org/
