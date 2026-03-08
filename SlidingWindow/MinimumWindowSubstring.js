//Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".

//You may assume that the correct output is always unique.

//Example 1:

//Input: s = "OUZODYXAZV", t = "XYZ"

//Output: "YXAZ"
//Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

//Example 2:

//Input: s = "xyz", t = "xyz"

//Output: "xyz"
//Example 3:

//Input: s = "x", t = "xy"

//Output: ""
//Constraints:

//1 <= s.length <= 1000
//1 <= t.length <= 1000
//s and t consist of uppercase and lowercase English letters.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        // count how many of each character we need from t
        let countT = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        // this will track characters inside our current window
        let window = {};

        // how many characters currently satisfy the requirement
        let have = 0;

        // how many unique characters we need to satisfy
        let need = Object.keys(countT).length;

        // result window indices
        let res = [-1, -1];

        // length of the best window found so far
        let resLen = Infinity;

        // left pointer for sliding window
        let l = 0;

        // move right pointer across s
        for (let r = 0; r < s.length; r++) {

            let c = s[r];

            // add character to window
            window[c] = (window[c] || 0) + 1;

            // if this character now matches the required count
            if (countT[c] && window[c] === countT[c]) {
                have++;
            }

            // when we have all required characters
            while (have === need) {

                // check if this window is smaller than previous best
                if ((r - l + 1) < resLen) {
                    res = [l, r];
                    resLen = r - l + 1;
                }

                // remove left character to try shrinking the window
                window[s[l]]--;

                // if removing it breaks the requirement
                if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
                    have--;
                }

                // move left pointer forward
                l++;
            }
        }

        // if no valid window found return ""
        let [start, end] = res;
        return resLen === Infinity ? "" : s.slice(start, end + 1);
    }
}
