//You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

//Return the integer that represents the evaluation of the expression.

//The operands may be integers or the results of other operations.
//The operators include '+', '-', '*', and '/'.
//Assume that division between integers always truncates toward zero.
//Example 1:

//Input: tokens = ["1","2","+","3","*","4","-"]

//Output: 5

//Explanation: ((1 + 2) * 3) - 4 = 5
//Constraints:

//1 <= tokens.length <= 1000.
//tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100].


class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        // stack to store numbers while we process the expression
        const stack = [];

        // go through every token in the array
        for (let token of tokens) {

            // if the token is one of the operators
            if (token === "+" || token === "-" || token === "*" || token === "/") {

                // pop the last number (right operand)
                const b = stack.pop();

                // pop the number before that (left operand)
                const a = stack.pop();

                let result;

                // perform the correct operation
                if (token === "+") {
                    result = a + b;
                }
                else if (token === "-") {
                    result = a - b;
                }
                else if (token === "*") {
                    result = a * b;
                }
                else if (token === "/") {

                    // division must truncate toward zero
                    result = Math.trunc(a / b);
                }

                // push the result back into the stack
                stack.push(result);

            } else {

                // if it's not an operator, it's a number
                // convert it from string to number and push it
                stack.push(Number(token));
            }
        }

        // the final result will be the only number left in the stack
        return stack.pop();
    }
}