const { onRequest } = require('firebase-functions/v2/https');
  const server = import('firebase-frameworks');
  exports.ssrpersonalwebsite6807d = onRequest({"region":"us-east1"}, (req, res) => server.then(it => it.handle(req, res)));
  