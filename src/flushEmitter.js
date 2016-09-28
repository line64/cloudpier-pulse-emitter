import moment from 'moment';

const PULSE_DOMAIN = 'reef-pulse';
const DIGEST_COMMAND = 'DIGEST_EVENTS'

export default function (emitter) {

  let { reefClient, pulseLane, emitterDomain, eventBuffer } = emitter;

  if (eventBuffer.length == 0) return [];

  let eventSlice = eventBuffer.splice(0, 10);

  reefClient.fireAndForget(PULSE_DOMAIN, pulseLane, DIGEST_COMMAND, {
    emitterDomain: emitterDomain,
    flushTs: +moment.format('x'),
    events: eventSlice
  });

  return eventSlice;

}
