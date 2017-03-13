'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var reefClient = options.reefClient,
      pulseLane = options.pulseLane,
      emitterDomain = options.emitterDomain;


  var emitter = {
    reefClient: reefClient,
    pulseLane: pulseLane || 'shared',
    emitterDomain: emitterDomain,
    eventBuffer: []
  };

  emitter.emit = function (stream, type, data) {
    return (0, _emitEvent2.default)(emitter, stream, type, data);
  };

  return emitter;
};

var _emitEvent = require('./emitEvent');

var _emitEvent2 = _interopRequireDefault(_emitEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }