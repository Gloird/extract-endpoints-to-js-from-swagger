"use strict";

const definitionHelper = require("./definition-helper");

function extractEndpoints(doc, endpoints) {
  const paths = {};
  for (const key in doc.paths) {
    if (Object.hasOwnProperty.call(doc.paths, key)) {
      const path = doc.paths[key];
      for (const method in path) {
        if (Object.hasOwnProperty.call(path, method)) {
          const methodDescription = path[method];
          paths[methodDescription.operationId] = {
            //ReplaceAll n'existe pas encore
            path: key
              .split("}")
              .join("")
              .split("{")
              .join(":"),
            method: method,
            summary: methodDescription.summary,
            description: methodDescription.description,
          };
        }
      }
    }
  }
  return paths;
}

module.exports = extractEndpoints;
