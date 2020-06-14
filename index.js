module.exports = function toPlaintext(delta) {
  return delta.reduce(function (text, op) {
    if (!op.insert) {
        throw new TypeError('only `insert` operations can be transformed!');
    }
    if (typeof op.insert === 'object' && op.insert.formula) {
        return text + op.insert.formula;
    }
    if (typeof op.insert !== 'string') {
        return text + ' ';
    }
    return text + op.insert;
  }, '');
};
