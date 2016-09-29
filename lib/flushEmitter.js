'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (emitter) {
  var reefClient = emitter.reefClient;
  var pulseLane = emitter.pulseLane;
  var emitterDomain = emitter.emitterDomain;
  var eventBuffer = emitter.eventBuffer;


  if (eventBuffer.length == 0) return [];

  var eventSlice = eventBuffer.splice(0, 10);

  reefClient.fireAndForget(PULSE_DOMAIN, pulseLane, DIGEST_COMMAND, {
    emitterDomain: emitterDomain,
    flushTs: +_moment2.default.format('x'),
    events: eventSlice
  });

  return eventSlice;
};

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PULSE_DOMAIN = 'reef-pulse';
var DIGEST_COMMAND = 'DIGEST_EVENTS';