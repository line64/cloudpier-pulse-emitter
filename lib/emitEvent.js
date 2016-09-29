'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (emitter, stream, type, data) {

  emitter.eventBuffer.push({
    stream: stream,
    type: type,
    data: data,
    ocurredTs: +_moment2.default.format('x')
  });
};

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;