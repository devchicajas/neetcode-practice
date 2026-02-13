//Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

//An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

//Example 1:

//Input: strs = ["act","pots","tops","cat","stop","hat"]

//Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]



class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // create a lookup table where we group words 
        // by their sorted character pattern
        const map = new Map();

        for (let word of strs) {

            // sort characters in the word
            // "act" -> "act"
            // "cat" -> "act"
            const sortedWord = word.split('').sort().join('');

            // if the pattern hasn't been seen, create empty list
            if (!map.has(sortedWord)) {
                map.set(sortedWord, []);
            }

            // add the original word to its anagram group
            map.get(sortedWord).push(word);
        }

        // return all grouped anagrams
        return Array.from(map.values());
    }
}
