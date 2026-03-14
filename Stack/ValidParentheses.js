//You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

//The input string s is valid if and only if:

//Every open bracket is closed by the same type of close bracket.
//Open brackets are closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.
//Return true if s is a valid string, and false otherwise.

//Example 1:

//Input: s = "[]"

//Output: true
//Example 2:

//Input: s = "([{}])"

//Output: true
//Example 3:

//Input: s = "[(])"

//Output: false
//Explanation: The brackets are not closed in the correct order.

//Constraints:

//1 <= s.length <= 1000


class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        // Create a stack (an array) that will help us keep track of brackets
        // we are expecting to close later.
        // Think of this like a small "memory list".
        const stack = [];

        // Loop through every character in the string one by one
        // For example if s = "([{}])", we will look at:
        // "(", "[", "{", "}", "]", ")"
        for (let char of s) {

            // If we see an opening parenthesis "("
            // that means at some point later we MUST see a ")"
            // So instead of storing "(", we store the closing bracket we expect.
            if (char === '(') {
                stack.push(')');
            }

            // If we see "{", we know it must close with "}"
            // So we push "}" to the stack because that is what we expect later.
            else if (char === '{') {
                stack.push('}');
            }

            // If we see "[", it must close with "]"
            // So we push "]" into the stack as something we expect later.
            else if (char === '[') {
                stack.push(']');
            }

            // If the character is NOT an opening bracket,
            // then it must be a closing bracket like ) } ]
            else {

                // We remove (pop) the last bracket we expected to see
                // because stacks work Last-In-First-Out (LIFO).
                // That means the most recent opening bracket
                // must be the first one to close.
                const expectedBracket = stack.pop();

                // Now we compare the bracket we expected
                // with the current character we are looking at.
                // If they are not the same, that means the brackets
                // are closing in the wrong order.
                if (expectedBracket !== char) {

                    // Since they don't match, the string is invalid
                    return false;
                }
            }
        }

        // After checking the entire string,
        // if the stack is empty it means every opening bracket
        // had a correct closing bracket.
        // If something is still in the stack, that means
        // some brackets were never closed.
        return stack.length === 0;
    }
}
