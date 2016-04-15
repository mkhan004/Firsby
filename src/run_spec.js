'use strict';

const utils = require('./utils');
const Tosser = require('./tosser');
const fs = require('fs');

let folder = process.env.folder || '.';
let configFile = process.env.file || 'config.yaml';

let config = utils.loadYAMLOrParse(folder, configFile);
config.basePath = folder || '.';

let docFolders = config.requestFolders || ['doc'];
utils.writeReadmeFile(config);

for (let docFolder of docFolders) {
  let path = `${folder}/${docFolder}`;
  let docs = fs.readdirSync(path);
  for (let doc of docs) {
    console.log(doc);
    let content = utils.loadYAMLOrParse(path, 'setup.yaml');
    //utils.writeReadmeFile(content);
  }
}

let requestFolders = config.requestFolders || ['requests'];

for (let reqFolder of requestFolders) {
  let path = `${folder}/${reqFolder}`;
  let files = fs.readdirSync(path);
  for (let fileName of files) {
    let requests = utils.loadYAMLOrParse(path, fileName);
    let tosser = new Tosser(config, requests, path + '/' + fileName);
    tosser.tossAll();
  }
}
// Display uncaught Exception.
process.on('uncaughtException', (err) => {
  console.error((new Date()).toUTCString() + ' uncaughtException:', err.message);
  console.error(err.stack);
  process.exit(1);
});
