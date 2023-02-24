function parseInt(string) {
  let map = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 2,
    thirty: 3,
    forty: 4,
    fifty: 5,
    sixty: 6,
    seventy: 7,
    eighty: 8,
    ninety: 9,
    hundred: "00",
    thousand: "000",
    million: "000000",
  };
  let stringArr = string.split(" ");
  if (stringArr.length === 1) {
    if (string.split("-").length > 1) {
      let result = "";
      for (let val of string.split("-")) {
        result += map[val];
      }
      return +result;
    } else if (string.includes("ty")) {
      return +`${map[string]}0`;
    } else {
      return map[string];
      {
      }
    }
  } else {
    let result = "";
    for (let digit of stringArr) {
      if (
        digit === "hundred" &&
        stringArr.indexOf("hundred") !== stringArr.length - 1
      ) {
        if (!string.includes("ty")) {
          result += "0";
          continue;
        } else {
          continue;
        }
      }
      if (
        digit === "thousand" &&
        stringArr.indexOf("thousand") !== stringArr.length - 1
      ) {
        if (!string.includes("ty") && !string.includes("hundred")) {
          result += "00";
          continue;
        } else if (!string.includes("ty") && !string.includes("hundred")) {
          result += "0";
        } else {
          continue;
        }
      }
      if (digit === "and") {
        continue;
      }
      if (digit.split("-").length > 1) {
        for (let val of digit.split("-")) {
          result += map[val];
        }
      } else {
        result += map[digit];
      }
    }
    return +result;
  }
}
console.log(parseInt("one hundred"));
console.log(parseInt("two thousand"));
