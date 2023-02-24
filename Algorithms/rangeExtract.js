function solution(list) {
  if (list.length === 0) {
    return 0;
  }
  let result = "";
  let start = 0;
  let checker = 1;
  let count = 1;
  while (checker <= list.length) {
    console.log(start, checker, count);
    console.log(list[start], list[checker]);
    if (list[checker] - count === list[start]) {
      checker++;
      count++;
      continue;
    }
    if (list[checker] - count !== list[start]) {
      if (count > 2) {
        result +=
          checker === list.length
            ? `${list[start]}-${list[checker - 1]}`
            : `${list[start]}-${list[checker - 1]},`;
        start = checker;
        checker++;
        count = 1;
        continue;
      }
      if (count === 2) {
        result +=
          checker === list.length
            ? `${list[start]},${list[start + 1]}`
            : `${list[start]},${list[start + 1]},`;
        start += 2;
        checker++;
        count = 1;
        continue;
      }
    }
    result += checker === list.length ? `${list[start]}` : `${list[start]},`;
    start++;
    checker++;
    count = 1;
    continue;
  }
  return result;
}

console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
