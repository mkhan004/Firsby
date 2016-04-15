'use strict';
const _ = require('lodash');

module.exports.printResponse = (body) => {
  console.log(body);
};

module.exports.parsedAnswers = (body, percentCorrect) => {
  let correctAnswers = [];
  body.data.xmlDocuments.forEach(doc => {
    let answers = doc.question['answer-choice-set']['answer-choice'];
    let contentItem = doc.question.interactionState.contentItem;
    let correctAnswer = _.findIndex(answers, ans => {
      return ans['@correct'] === 'yes';
    });
    correctAnswers.push({
      type: 'SingleAnswerMultipleChoice',
      position: contentItem['@position'],
      subItem: contentItem['@subitem'],
      mSecUsed: 123,
      selectedIndex: correctAnswer + 1
    });
  });
  let numWrong = correctAnswers.length * (percentCorrect / 100);
  numWrong = correctAnswers.length - Math.floor(numWrong);
  for (let ind = 0; ind < numWrong; ind++) {
    correctAnswers[ind].selectedIndex--;
  }
  return {
    verify: {
      percentCorrect: percentCorrect
    },
    data: {
      responses: correctAnswers
    }
  };
};
