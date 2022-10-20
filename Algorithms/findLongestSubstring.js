"use strict";
// Write a function called findLongestSubstring,
// which accepts a string and returns the length of the longest substring with all distinct characters.
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)
const findLongestSubstring = (str) => {
    if (!str) {
        return 0;
    }
    let i = 0;
    let j = 1;
    let count = 0;
    while (j <= str.length - 1) {
        if (str[i] !== str[j]) {
            count = Math.max(count, j - i);
            j++;
        }
        else {
            i = j;
            j++;
        }
    }
    return count;
};
