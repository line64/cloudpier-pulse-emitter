"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (emitter, stream, type, data) {

  emitter.eventBuffer.push({
    stream: stream,
    type: type,
    data: data,
    ocurredTs: new Date().getTime()
  });
};

;