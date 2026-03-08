//You are given two strings s1 and s2.

//Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

//Both strings only contain lowercase letters.

//Example 1:

//Input: s1 = "abc", s2 = "lecabee"

//Output: true
//Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

//Example 2:

//Input: s1 = "abc", s2 = "lecaabee"

//Output: false
//Constraints:

//1 <= s1.length, s2.length <= 1000


class Solution {
    /**
     * Goal: check if any substring of s2 is a permutation of s1
     * Idea: use sliding window + character frequency
     */

    checkInclusion(s1, s2) {

        // If s1 is longer, it's impossible to fit inside s2
        if (s1.length > s2.length) return false;

        // Store frequency of each letter (a-z)
        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);

        // Build counts for s1 and the first window in s2
        for (let i = 0; i < s1.length; i++) {

            // convert letter → index (a=0, b=1, etc)
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        // matches = how many letters currently match in both arrays
        let matches = 0;

        // if counts match for a letter, increase matches
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) matches++;
        }

        // left pointer of sliding window
        let l = 0;

        // move right pointer across s2
        for (let r = s1.length; r < s2.length; r++) {

            // if all 26 characters match to permutation found
            if (matches === 26) return true;

            // add new character entering the window
            let index = s2.charCodeAt(r) - 97;
            s2Count[index]++;

            // update matches depending on new frequency
            if (s2Count[index] === s1Count[index]) matches++;
            else if (s2Count[index] === s1Count[index] + 1) matches--;

            // remove character leaving the window
            index = s2.charCodeAt(l) - 97;
            s2Count[index]--;

            // update matches after removal
            if (s2Count[index] === s1Count[index]) matches++;
            else if (s2Count[index] === s1Count[index] - 1) matches--;

            // move left pointer forward
            l++;
        }

        // check final window
        return matches === 26;
    }
}