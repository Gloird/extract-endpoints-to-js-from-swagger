'use strict';

const extractEndpoints = require('../lib/extract-endpoints');

function listEndpoints(sourceDoc) {
  return Object.keys(sourceDoc.paths);
}

function extractSwagger(sourceDoc, endpoints) {
  const paths = extractEndpoints(
    sourceDoc,
    endpoints
  );
  return paths;
}

module.exports = { extractSwagger, listEndpoints };
