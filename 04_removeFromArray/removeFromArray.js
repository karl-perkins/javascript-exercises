const removeFromArray = function(arr, ...args) {

  const newArr = arr;

  for (const arg of args) {
    
    const index = newArr.indexOf(arg);

    if (index === -1) continue;

    newArr.splice(index, 1);

  }

  return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
