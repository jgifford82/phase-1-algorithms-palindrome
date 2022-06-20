function isPalindrome(word) {
  // Write your algorithm here
  if(word.split('').reverse().join('') === word) {
    return true
  } else {
    return false
  }
}

// problem in my words:
// The function accepts 1 argument that's a string. 
// It checks if it's a palindrome
// It'll return true if it is a palindrome
// Otherwise, it'll return false

// My Test Cases:
// console.log("Expecting: true")
// console.log("=>", isPalindrome("wow"))
// console.log("Expecting: false")
// console.log("=>", isPalindrome("hi"))

/* 
  Add your pseudocode here
*/
// We need to reverse the string.
  // to reverse it, we need to use split() to return a new array.
  // with the new array, we can use the reverse() method.
  // then we'll need to use join() to put the reversed array back into a string
// If the reversed string deeply equals the argument, it should return true.
// If the reversed string does not deeply equal the argument, it should return false.

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // console.log("Expecting: true");
  // console.log("=>", isPalindrome("racecar"));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", isPalindrome("robot"));


console.log("Expecting: true");
console.log("=>", isPalindrome("wow"));
console.log("Expecting: false");
console.log("=>", isPalindrome("hi"));
}

module.exports = isPalindrome;
