//Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

//An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

//Example 1:

//Input: s = "racecar", t = "carrace"

//Output: true
//Example 2:

//Input: s = "jar", t = "jam"

//Output: false

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Anagrams use the same characters but in a different order
        // If the lengths are different,they cannot be anagrams 
        if(s.length != t.length){
            return false;
        }
        // convert eah string (s,t)into an array of characters 
        // split('') turns cat into ["c","a","t"]
        // sort() arranges characters alphabetically > ["a","b","c"]
        // join() converts the array back into a string > "a,c"
        let sSort =s.split('').sort().join();
        let tSort=t.split('').sort().join();
        // if the sorted versions are same 
        // both words contain the same letters
        return sSort == tSort; 
    }
}
