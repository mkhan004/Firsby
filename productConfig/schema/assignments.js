'use strict';

module.exports = (toss) => {
  toss.expectJSONTypes({
    'assignments': Array
  });
};
