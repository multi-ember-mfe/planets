'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    autoRun: false,
    storeConfigInMeta: false,
    fingerprint: {
      customHash: null
    },
  });


  return app.toTree();
};
