module.exports = function check(str, bracketsConfig) {
  let array = [];
  let open = bracketsConfig.map(pair => pair[0]);
  let close = bracketsConfig.map(pair => pair[1]);

  for (let symbol of str) {
    if (open.includes(symbol)) {
      if (close.includes(symbol) && array[array.length - 1] === symbol) {
        array.pop();
      } else
        array.push(symbol);
    } else {
      let currentOpenBr = open[close.indexOf(symbol)];
      if (array.length === 0 || array.pop() !== currentOpenBr) {
        return false;
      }
    }
  }
  return array.length === 0;
}