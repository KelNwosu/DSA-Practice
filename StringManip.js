// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

var detectCapitalUse = function (word) {
    let capitalCount = 0

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (char === char.toUpperCase()) {
            capitalCount += 1
        }
    }
    return (
        capitalCount === word.length || capitalCount === 0 || (word[0] === word[0].toUpperCase() && capitalCount === 1)
    )

};

// Try this again on July 8, 2022

////////////////////////////////////////


// Leetcode 344

// // Write a function that reverses a string. The input string is given as an array of characters s.

// // You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1 
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

var reverseString = function (s) {
    let start = 0
    let end = s.length - 1

    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]]
        start += 1;
        end -= 1;
    }
    return s
};

// // Try this again on July 8, 2022

