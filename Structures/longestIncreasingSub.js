#!/usr/bin/env node

/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  let LIS = [];
  for (let num of nums) {
    LIS.push(1);
  }
  console.log(LIS);
  LIS[nums.length - 1] = 1;
  console.log(LIS);
  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
      if (nums[i] < nums[j]) {
        LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
      }
    }
  }
  return Math.max(...LIS);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
