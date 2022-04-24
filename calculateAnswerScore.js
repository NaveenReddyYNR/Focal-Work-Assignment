// The "calendar" word score given in the example is incorrect

function cleanInputArray(wordsArray) {
  return wordsArray;
}

function prepareAnswerScoreMap(clensedAnswerWords) {
  let scoreMap = {};
  for (let i = 0; i < clensedAnswerWords.length; i++) {
    scoreMap[clensedAnswerWords[i]] = calculateScoreOfWord(i);
  }
  return scoreMap;
}

function calculateScoreOfWord(word) {
  if (!isNaN(word)) {
    return 4;
  } else if (word.length > 7) {
    return 3;
  } else if (word.length < 5) {
    return 0;
  } else if (word.length >= 5 && word.length <= 7) {
    return 1;
  }
}

function calculateAnswerScore(answerScoreMap, clensedAnswerWords) {
  let score = 0;
  for (let i = 0; i < clensedAnswerWords.length; i++) {
    score += answerScoreMap[clensedAnswerWords[i]];
  }
  return score;
}

function calculateResponseScore(answerScoreMap, clensedResponseWords) {
  let score = 0;
  for (let i = 0; i < clensedResponseWords.length; i++) {
    let computedScore = answerScoreMap[clensedResponseWords[i]];
    if (computedScore) {
      score += computedScore;
    }
  }
  return score;
}

function calculatePercentageOfResponseScore(answer, response) {
  let answerWords = answer.toLowerCase().split(" ");
  let responseWords = response.toLowerCase().split(" ");

  let clensedAnswerWords = cleanInputArray(answerWords);
  let clensedResponseWords = cleanInputArray(responseWords);

  let answerScoreMap = prepareAnswerScoreMap(clensedAnswerWords);
  let answerScore = calculateAnswerScore(answerScoreMap, clensedAnswerWords);
  let responseScore = calculateResponseScore(
    answerScoreMap,
    clensedResponseWords
  );
  return (responseScore / answerScore) * 100;
}

let answer =
  "There are twenty-four hours in a day, 30 days in a month, and 12 months in the calendar year.";
let response =
  "There are twenty-four hours in a day, 30 days in a month, and 12 months in the calendar year.";
let result = calculatePercentageOfResponseScore(answer, response);
console.log(result);

// The "calendar" word score given in the example is incorrect
