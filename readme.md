# fatoora-ksa

> Get KSA fatoora as hex or as base64 ora s base64 image

## Install

```
$ npm install fatoora-ksa
```

This module targets Node.js 6 or later and not in the browser. Do ping me if you need to do it in the browser.

## Usage

```js
const fatooraKsa = require('fatoora-ksa');

// Create an object with the details below
const obj = {
        seller : 'Valuetens Records',
        vatRegNumber : '310122393500003',
        timeStamp : '2021-11-29T10:55:00Z',
        totalAmount : '100',
        vatAmount : '15'
}

const hexString = fatooraKsa.toHex(obj);
console.log(hexString);
//=> 010c426f6273205265636f726473020f3331303132323339333530303030330314323032312d31312d32395431303a35353a30305a0404313030300503313530

const base64String = fatooraKsa.toBase64(obj);
console.log(base64String);
//=> AQxCb2JzIFJlY29yZHMCDzMxMDEyMjM5MzUwMDAwMwMUMjAyMS0xMS0yOVQxMDo1NTowMFoEBDEwMDAFAzE1MA==


const base64String = fatooraKsa.toBase64(obj);
// Will return a base64 image
![qrcode](./qrcode.png)


```