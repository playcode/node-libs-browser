exports.assert = require.resolve('assert/')
exports.buffer = require.resolve('buffer/')
exports.child_process = null
exports.cluster = null
exports.console = require.resolve('console-browserify')
exports.constants = require.resolve('constants-browserify')
exports.crypto = require.resolve('crypto-browserify')
exports.dgram = null
exports.dns = null
exports.domain = require.resolve('domain-browser')
exports.events = require.resolve('events/')
exports.fs = null
exports.http = require.resolve('stream-http')
exports.https = require.resolve('https-browserify')
exports.module = null
exports.net = null
exports.os = require.resolve('os-browserify/browser.js')
exports.path = require.resolve('path-browserify')
exports.punycode = require.resolve('punycode/')
exports.process = require.resolve('process/browser.js')
exports.querystring = require.resolve('querystring-es3/')
exports.readline = null
exports.repl = null
exports.stream = require.resolve('stream-browserify')
exports['stream/web'] = require.resolve('web-streams-polyfill/dist/ponyfill.es2018.js')
exports['node-fetch'] = require.resolve('cross-fetch')
exports._stream_duplex = require.resolve('readable-stream/lib/_stream_duplex.js')
exports._stream_passthrough = require.resolve('readable-stream/lib/_stream_passthrough.js')
exports._stream_readable = require.resolve('readable-stream/lib/_stream_readable.js')
exports._stream_transform = require.resolve('readable-stream/lib/_stream_transform.js')
exports._stream_writable = require.resolve('readable-stream/lib/_stream_writable.js')
exports.string_decoder = require.resolve('string_decoder/')
exports.sys = require.resolve('util/util.js')
exports.timers = require.resolve('timers-browserify')
exports.tls = null
exports.tty = require.resolve('tty-browserify')
exports.url = require.resolve('url/')
exports.util = require.resolve('util/util.js')
exports.vm = require.resolve('vm-browserify')
exports.zlib = require.resolve('browserify-zlib')
