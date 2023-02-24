#!/usr/bin/env node

var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  console.log(map);

  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i];
    console.log(result);
    if (map[result]) {
      return [map[result], i];
    }
  }
};

let nums = [1, 3, 4, 2],
  target = 6;

console.log(twoSum(nums, target));
