# no-cache loader for webpack

## Installation

`npm install --save no-cache-loader`

## Usage

``` javascript
assert(require("no-cache!./module.js") !== require("no-cache!./module.js"))
// => different objects
```

This is mostly useful for loading things like JSON fixtures that may be mutated unintentionally.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
