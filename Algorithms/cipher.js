#!/usr/bin/env node

// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var key = "password";

var alphabet =
  "アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー";
var key = "カタカナ";
var str = "ナタコタ";
var res = "タモタワ";

// for (let i = 0; i < alphabet.length; i++) {
//   console.log(alphabet.charCodeAt(i) - 96);
// }

function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    console.log(str, key, abc);
    let newString = "";
    str.charCodeAt(0) - 96 < 27;
    let tempKey = key;
    let keyLength = abc.length / key.length;
    for (let i = 0; i < keyLength; i++) {
      tempKey += key;
    }

    for (let i = 0; i < str.length; i++) {
      console.log(
        abc.indexOf(str[i]) + abc.indexOf(tempKey[i]),
        str[i],
        tempKey[i],
        abc[abc.indexOf(str[i]) + abc.indexOf(tempKey[i]) - abc.length]
      );
      if (abc.indexOf(str[i]) < 0) {
        newString += str[i];
      } else if (abc.indexOf(str[i]) + abc.indexOf(tempKey[i]) >= abc.length) {
        newString +=
          abc[abc.indexOf(str[i]) + abc.indexOf(tempKey[i]) - abc.length];
      } else {
        newString += abc[abc.indexOf(str[i]) + abc.indexOf(tempKey[i])];
      }
    }
    return newString;
  };
  this.decode = function (str) {
    let newString = "";
    let tempKey = key;
    let keyLength = abc.length / key.length;
    for (let i = 0; i < keyLength; i++) {
      tempKey += key;
    }
    for (let i = 0; i < str.length; i++) {
      if (abc.indexOf(str[i]) < 0) {
        newString += str[i];
      } else if (abc.indexOf(str[i]) - abc.indexOf(tempKey[i]) < 0) {
        newString +=
          abc[abc.indexOf(str[i]) - abc.indexOf(tempKey[i]) + abc.length];
      } else {
        newString += abc[abc.indexOf(str[i]) - abc.indexOf(tempKey[i])];
      }
    }
    return newString;
  };
}

let cipher = new VigenèreCipher(key, alphabet);
console.log(cipher.encode("codewars"));
console.log(cipher.encode("カタカナ"));
// console.log(cipher.encode("waffles"));
// console.log(cipher.encode("it's a shift cipher!"));
// // console.log(cipher.decode("rovwsoiv"));
// // console.log(cipher.decode("laxxhsj"));
// // console.log(cipher.decode("CODEWARS"));
