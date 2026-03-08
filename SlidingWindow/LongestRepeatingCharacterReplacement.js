//You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

//After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

//Example 1:

//Input: s = "XYYX", k = 2

//Output: 4
//Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

//Example 2:

//Input: s = "AAABABB", k = 1

//Output: 5
//Constraints:

//1 <= s.length <= 1000
//0 <= k <= s.length

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        // store count of each character inside the window
        let count = new Map();

        // longest window found
        let res = 0;

        // left pointer
        let l = 0;

        // max frequency of a single character in the window
        let maxf = 0;

        for (let r = 0; r < s.length; r++) {

            // increase count of current character
            count.set(s[r], (count.get(s[r]) || 0) + 1);

            // track the most frequent character in window
            maxf = Math.max(maxf, count.get(s[r]));

            // if replacements needed > k, shrink window
            while ((r - l + 1) - maxf > k) {

                // remove left character from window
                count.set(s[l], count.get(s[l]) - 1);

                // move left pointer
                l++;
            }

            // update longest valid window
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}