/*
Valid Palindrome (Easy)

Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward.
It is case-insensitive and ignores all non-alphanumeric characters.

Note:
Alphanumeric characters include letters (A-Z, a-z) and numbers (0-9).

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true

Explanation:
After keeping only alphanumeric characters:
"wasitacaroracatisaw"
which is a palindrome.

Example 2:

Input: s = "tab a cat"

Output: false

Explanation:
"tabacat" is not a palindrome.

Constraints:

1 <= s.length <= 1000  
s is made up of only printable ASCII characters.
*/

/*
PREP

P — Parameters
isPalindrome(s: string)
A string that may include letters, numbers, spaces, and symbols

R — Return
boolean
true if the cleaned string is a palindrome, otherwise false

E — Example
Input:  "Was it a car or a cat I saw?"
Output: true   // "wasitacaroracatisaw"

Input:  "tab a cat"
Output: false  // "tabacat"

P — Pseudocode
use two pointers (left and right)

while left < right:
    skip non-alphanumeric from left
    skip non-alphanumeric from right
    compare lowercase characters
    if mismatch → return false
    move pointers inward

return true
*/


class Solution {

    /**
     * @param {string} s   // input string
     * @return {boolean}  // true if palindrome, false otherwise
     */
    isPalindrome(s) {

        // left pointer starts at beginning
        let l = 0;

        // right pointer starts at end
        let r = s.length - 1;

        // keep going until pointers cross
        while (l < r) {

            // move left until we hit a letter or number
            while (l < r && !this.alphaNum(s[l])) {
                l++;
            }

            // move right until we hit a letter or number
            while (l < r && !this.alphaNum(s[r])) {
                r--;
            }

            // compare characters ignoring case
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            // move both pointers inward
            l++;
            r--;
        }

        // if no mismatches, it's a palindrome
        return true;
    }

    /**
     * @param {char} c
     * @return {boolean}
     */
    alphaNum(c) {

        // check if character is a letter or number
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}