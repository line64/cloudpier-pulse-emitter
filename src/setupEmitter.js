import emitEvent from './emitEvent';

export default function(options) {

  let { reefClient, pulseLane, emitterDomain } = options;

  let emitter = {
    reefClient,
    pulseLane: pulseLane || 'shared',
    emitterDomain,
    eventBuffer: []
  };

  emitter.emit = (stream, type, data) => emitEvent(emitter, stream, type, data);

  return emitter;

}
