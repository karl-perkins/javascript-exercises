const fibonacci = function(memberIndex) {
  if (memberIndex < 0) return 'OOPS';
  
  const seq = [];
  // Fibonacci sequence: F0 = 0, F1 = 1, and Fn = Fn-1 + Fn-2 for n > 1
  for (let index = 0; index <= memberIndex; index++) {
    seq.push(index < 2 ? index : seq[index-1] + seq[index-2]);
  }
  return seq[memberIndex];
};

// Do not edit below this line
module.exports = fibonacci;
