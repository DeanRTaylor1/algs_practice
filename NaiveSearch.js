const naiveSearch = (long, short) => {
  let count = 0;
  for (var i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        if (j === short.length - 1) {
          count++;
        }
      }
    }
  }
};
