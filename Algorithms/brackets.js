function validBraces(braces) {
  let res = [];

  for (let i = 0; i < braces.length; i++) {
    switch (braces[i]) {
      case "(":
        res.push("(");
        break;
      case ")":
        if (res.length > 0) {
          let prev = res.pop();
          if (prev !== "(") {
            return false;
          }
          break;
        }
        return false;
      case "{":
        res.push("{");
        break;
      case "}":
        if (res.length > 0) {
          let prev = res.pop();
          if (prev !== "{") {
            return false;
          }
          break;
        }
        return false;
      case "[":
        res.push("[");
        break;
      case "]":
        if (res.length > 0) {
          let prev = res.pop();
          if (prev !== "[") {
            return false;
          }
          break;
        }
        return false;
    }
  }
  if (res.length !== 0) {
    return false;
  }
  return true;
}
