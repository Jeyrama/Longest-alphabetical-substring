/*
Find the longest substring in alphabetical order.
The input will only consist of lowercase characters and will be at least one letter long.

Example: 
  the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".
*/


// Solution

function longest(str) {
  let max = 0;
  let cur = 0;
  let pos = 0;
  for (let i = 1; i < str.length; ++i) {
    if (str[i-1] <= str[i]) {
      ++cur;
      if (cur > max) {
        max = cur;
        pos = i - max;
      }
    } else {
      cur = 0;
    }
  }
  return str.slice(pos, max+1+pos);
}