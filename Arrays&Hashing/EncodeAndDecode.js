/*
Encode and Decode Strings (Medium)

Design an algorithm to encode a list of strings into a single string.
The encoded string is sent over a network and decoded back to the original list.

Machine 1 (Sender):
    string encode(vector<string> strs)

Machine 2 (Receiver):
    vector<string> decode(string s)

The decoded result must match the original input exactly.

Example 1:
Input: ["Hello", "World"]
Output: ["Hello", "World"]

Example 2:
Input: [""]
Output: [""]

Constraints:
- 0 <= strs.length < 100
- 0 <= strs[i].length < 200
- Strings may contain any ASCII characters (0–255)

Goal:
Implement encode() and decode() so data is transmitted safely
without losing or corrupting strings.
*/


/*
PREP

P — Parameters
encode(strs: string[])
decode(str: string)

R — Return
encode → string
decode → string[]

E — Example
["Hi","Code"] → "2#Hi4#Code" → ["Hi","Code"]

P — Pseudocode
ENCODE: append length + "#" + string
DECODE: read length, extract substring, repeat
*/

class Solution {

    /**
     * @param {string[]} strs     // Input: array of strings to encode
     * @returns {string}         // Output: single encoded string
     */
    encode(strs) {

        // Holds the final encoded result
        let encodedString = "";

        // Loop through each string in the input array
        for (let s of strs) {

            // Add the length of the string (so we know how many chars to read later)
            // Add "#" as a separator between length and string
            // Add the actual string content
            encodedString += s.length + "#" + s;
        }

        // Return the combined encoded string
        return encodedString;
    }

    /**
     * @param {string} str       // Input: encoded string
     * @returns {string[]}      // Output: original list of strings
     */
    decode(str) {

        // Array to store the decoded strings
        let decodedStrings = [];

        // Pointer to move through encoded string
        let index = 0;

        // Continue until we've read the whole encoded string
        while (index < str.length) {

            // Marks where the number (length) ends
            let separator = index;

            // Move until we find "#"
            while (str[separator] !== "#") {
                separator++;
            }

            // Convert the characters before "#" into a number
            let length = parseInt(str.substring(index, separator));

            // Starting position of actual word
            let wordStart = separator + 1;

            // Ending position using known length
            let wordEnd = wordStart + length;

            // Extract the string using those bounds
            let word = str.substring(wordStart, wordEnd);

            // Add decoded string to result array
            decodedStrings.push(word);

            // Move index to the start of the next encoded segment
            index = wordEnd;
        }

        // Return all decoded strings
        return decodedStrings;
    }
}

