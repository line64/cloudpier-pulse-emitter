'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (emitter, interval) {

  return setInterval(function () {
    return (0, _flushEmitter2.default)(emitter);
  }, interval);
};

var _flushEmitter = require('./flushEmitter');

var _flushEmitter2 = _interopRequireDefault(_flushEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }