import flushEmitter from './flushEmitter';

export default function (emitter, interval) {

  return setInterval(() => flushEmitter(emitter), interval);

}
