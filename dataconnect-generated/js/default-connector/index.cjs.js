const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'nodejs-winnipeg-community-help',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

