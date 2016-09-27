# get-ip-address

[![npm version][npm-badge]][npm-url]

> Get ip address (v4 only) for an interface


This is a very basic plugin to get the address for a given interface (defaults to eth0).

You'll probably want to just copy and paste the code instead of depending on this module, I just find it easier for myself to have it here

## Install

```
npm install get-ip-address --save
```

## Usage

```js
var findIp = require('get-ip-address')

console.log(findIp('eth0'))
```

## License

MIT

## Acknowledgements

Maintainer - [Paolo Chiodi](https://github.com/paolochiodi)

This project was kindly sponsored by [nearForm](http://nearform.com).

[npm-badge]: https://badge.fury.io/js/get-ip-address.svg
[npm-url]: https://badge.fury.io/js/get-ip-address