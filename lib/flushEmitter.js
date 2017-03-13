'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (emitter) {
  var reefClient = emitter.reefClient,
      pulseLane = emitter.pulseLane,
      emitterDomain = emitter.emitterDomain,
      eventBuffer = emitter.eventBuffer;


  if (eventBuffer.length == 0) return [];

  var eventSlice = eventBuffer.splice(0, 10);

  reefClient.fireAndForget(PULSE_DOMAIN, pulseLane, DIGEST_COMMAND, {
    emitterDomain: emitterDomain,
    flushTs: new Date().getTime(),
    events: eventSlice
  });

  return eventSlice;
};

var PULSE_DOMAIN = 'cloudpier-pulse-sink';
var DIGEST_COMMAND = 'DIGEST_EVENTS';