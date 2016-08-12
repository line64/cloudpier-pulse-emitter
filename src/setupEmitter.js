import emitEvent from './emitEvent';

export default function(options) {

  let { reefClient, pulseLane, emitterDomain } = options;

  let emitter = {
    reefClient,
    pulseLane,
    emitterDomain,
    eventBuffer: []
  };

  emitter.emit = (category, description) => emitEvent(emitter, category, description);

  return emitter;

}
