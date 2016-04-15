'use strict';
const _ = require('lodash');
const Toss = require('./toss');
const fs = require('fs');

let filterTests = process.env.filterTests;

module.exports = class Tosser
{
  constructor(config, requests, fileName) {
    this.url = config.url;
    this.name = config.project;
    this.config = config;
    this.deferredRequests = {};
    this.savedResponses = {};
    this.tokenSecret = config.tokenSecret;
    this.wireUpDependents(requests);
    this.tosses = [];
    this.loadPlugins();
    this.requests = requests;
    if (filterTests) {
      let testsToRun = filterTests.split(',');
      this.requests = _.filter(requests, (req) => {
        return _.includes(testsToRun, req.id);
      });
    }
    for (let req of this.requests) {
      let toss = new Toss(req, this.savedResponses, config, this.plugins, fileName);
      toss.writeTestCases();
      toss.afterRequests(this.savedResponses);
      this.tosses.push(toss);
    }
  }

  loadPlugins() {
    try {
      let plugins = fs.statSync(`./${this.config.basePath}/plugins.js`);
      if (plugins && plugins.isFile()) {
        this.plugins = require(`${process.cwd()}/${this.config.basePath}/plugins.js`);
      }
    } catch (err) {
      console.error(err);
    }
  }

  tossAll() {
    for (let toss of this.tosses) {
      toss.run();
    }
  }

  wireUpDependents(requests) {
    // nest dependent requests
    let dependentReqs = _.filter(requests, (req) => {
      return parseInt(req.dependsOn, 10) > 0;
    });
    _.each(dependentReqs.reverse(), (depReq) => {
      let dep = _.find(requests, (req) => {
        return req.id === depReq.dependsOn;
      });
      _.remove(requests, (req) => {
        return req.id === depReq.id;
      });
      if (dep) {
        if (!dep.childRequests) {
          dep.childRequests = [];
        }
        dep.childRequests.push(depReq);
      }
    });
  }
};
