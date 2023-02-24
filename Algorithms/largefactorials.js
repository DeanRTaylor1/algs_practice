#!/usr/bin/env node

function factorial(n) {
  let ans = [2];
  let temp;
  let result;
  for (let i = 3; i <= n; i++) {
    console.log(ans, n);
    temp = ans[0];
    ans[0] = temp * i;
  }
  if (ans[0].toString().includes("e")) {
    result = ans[0].toString().split("e+");
    let num = result[0].replace(".", "");
    let power = +result[1];
    for (let i = 0; i < power; i++) {
      num += "0";
    }
    result = num;
  } else {
    result = ans[0].toString();
  }

  return result;
}

console.log(factorial(50));
