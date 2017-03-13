Cloudpier Pulse Emitter
=====================================

##Installation

Install with npm: `npm install --save cloudpier-pulse-emitter`.

Or, install with yarn: `yarn add cloudpier-pulse-emitter`.

##Usage

###setupEmitter
```
let emitter = setupEmitter({ reefClient, pulseLane, emmiterDomain })
```

###startEmitter
```
startEmitter(emitter, interval)
```

###emit
```
emitter.emit(stream, type, data)
```

##Example
```
import { setupEmitter, startEmitter } from 'reef-pulse-emitter';
import { SqsBrokerFacade, ReefClient } from 'reef-client';
require('dotenv').load();

let brokerFacade = new SqsBrokerFacade({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  clientDomain: 'cloudpier-pulse-tester',
  clientLane: 'instance001'
});

let reefClient = new ReefClient(brokerFacade);

let pulseEmitter = setupEmitter({
  reefClient,
  pulseLane: 'test',
  emitterDomain: 'cloudpier-pulse-tester'
});

reefClient
.setup()
.then(() => {

  console.log('reef client setup complete');

  let flushInterval = startEmitter(pulseEmitter, 5*1000);

  console.log('emitter started');

  let emitInterval = setInterval(() => {

    console.log('emitting test event');

    pulseEmitter.emit("test", "HEARTBEAT", "sending heartbeat from test");

  }, 1*1000);

})
.catch((err) => {
  console.log(err);
});
```