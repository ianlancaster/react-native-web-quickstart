// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch')

if (typeof global !== 'undefined') {
  var self = global.self
}

module.exports = self.fetch.bind(self)
