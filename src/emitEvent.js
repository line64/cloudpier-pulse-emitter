
export default function(emitter, category, description) {

  emitter.eventBuffer.push({
    category,
    description
  });

};
