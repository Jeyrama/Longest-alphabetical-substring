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

// or

function longest(str, max = '') {
  const current = [...str].reduce((acc, char) => (
    char >= acc.slice(-1) ? 
      acc + char : (max = acc.length > max.length ? 
        acc : max, char)
  ), '');
  return current.length > max.length ? current : max;
}

// or

function isAlphabetical(char, nextChar) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return alphabet.indexOf(char) <= alphabet.indexOf(nextChar);
}

function longest(str) {
  let longestStreak = '';
  let currentStreak = '';
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let nextChar = str[i + 1];
    
    if (isAlphabetical(char, nextChar)) {
      currentStreak += char;
    } else {
      currentStreak += char;
      if (currentStreak.length > longestStreak.length) {
        longestStreak = currentStreak;
      }
      currentStreak = '';
    }
  }
  
  return longestStreak;
}