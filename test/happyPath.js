var pulse = require('../lib');
var reef = require('reef-client');

require('dotenv').load();

var brokerFacade = new reef.SqsBrokerFacade({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  clientDomain: 'cloudpier-pulse-tester',
  clientLane: 'instance001'
});

var reefClient = new reef.ReefClient(brokerFacade);

var pulseEmitter = pulse.setupEmitter({
  reefClient: reefClient,
  pulseLane: 'test',
  emitterDomain: 'cloudpier-pulse-tester'
});

console.log(pulseEmitter);

reefClient
  .setup()
  .then(function () {

    console.log('reef client setup complete');

    var flushInterval = pulse.startEmitter(pulseEmitter, 5*1000);

    console.log('emitter started');

    var emitInterval = setInterval(function () {

      console.log('emitting test event');

      pulseEmitter.emit("test", "HEARTBEAT", "sending heartbeat from test");

    }, 1*1000);

  })
  .catch(function (err) {
    console.log(err);
  });
