# Frisby Testing Framework

Fun with JS + testing!

This is a working initial version of the framework using frisbyjs

### Features:
* Ability to run custom JS hooks after a request
  * i.e. jasper tests have a hook to create responses with a certain percentCorrect
* [handlebars](http://handlebarsjs.com/) templating
  * pass parameters like this {{4.sequenceId}}
  * handlebars templates can be used everywhere, headers, body, querystring, validations
* CSV files take either JSON or a filepath
  * it will automatically figure it out which
* outputs responses, body, errors
* supports JWTs
* uses frisbyjs which uses jasmine as a test runner so you get all the jasmine reporters/etc
  * might want to switch to something else later cause frisby is a bit wonky sometimes

### To run
```
npm install -g jasmine-node
npm install
jasmine-node . --config folder activity
jasmine-node . --config folder channel
jasmine-node . --config folder jasper
```

### TODO

* testing that response does *NOT* contain something
* use a module for config/plugins etc instead of needing to pass it down the chain
