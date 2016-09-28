import moment from 'moment';

export default function(emitter, stream, type, data) {

  emitter.eventBuffer.push({
    stream,
    type,
    data,
    ocurredTs: +moment.format('x')
  });

};
