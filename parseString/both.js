const changeTypes = require('./smallFunctions/types.js');
const changeConsole = require('./smallFunctions/console.js');
const changeTripleEqual = require('./smallFunctions/tripleEqual.js');
const handleQuotes = require('./smallFunctions/hadlequotes.js');
const toString = require('./stringFunctions/toString.js');
const getRidOfMath = require('./math/removeMath.js');
const fixMathRandom = require('./math/random.js');

function getAll(string) {
  let res = toString(string);
  res = changeTypes(res);
  res = changeConsole(res);
  res = changeTripleEqual(res);
  res = handleQuotes(res);
  res = fixMathRandom(res);
  res = getRidOfMath(res);
  return res;
}

module.exports = getAll;
