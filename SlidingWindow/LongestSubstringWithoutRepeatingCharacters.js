// Given a string s, find the length of the longest substring without duplicate characters.

//A substring is a contiguous sequence of characters within a string.

//Example 1:

//Input: s = "zxyzxyz"

//Output: 3
//Explanation: The string "xyz" is the longest without duplicate characters.

//Example 2:

//Input: s = "xxxx"

//Output: 1
//Constraints:

//0 <= s.length <= 1000
//s may consist of printable ASCII characters.

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        // Map stores the last position where each character appeared
        let mp = new Map();

        // left pointer of our window
        let l = 0;

        // longest substring length
        let res = 0;

        // r moves through the string
        for (let r = 0; r < s.length; r++) {

            // if the character already appeared
            if (mp.has(s[r])) {

                // move left pointer to avoid duplicate
                // +1 to move past the previous duplicate
                l = Math.max(mp.get(s[r]) + 1, l);
            }

            // update where we last saw this character
            mp.set(s[r], r);

            // calculate window size
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}