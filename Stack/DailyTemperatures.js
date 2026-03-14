//You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

//Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

//Example 1:

//Input: temperatures = [30,38,30,36,35,40,28]

//Output: [1,4,1,2,1,0,0]
//Example 2:

//Input: temperatures = [22,21,20]

//Output: [0,0,0]
//Constraints:

//1 <= temperatures.length <= 1000.
//1 <= temperatures[i] <= 100


class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        // result array filled with 0s
        // if we never find a warmer day, it will stay 0
        const result = new Array(temperatures.length).fill(0);

        // stack will store indices of days
        // these are days we still haven't found a warmer temperature for
        const stack = [];

        // loop through each day
        for (let i = 0; i < temperatures.length; i++) {

            // while stack is not empty AND
            // today's temperature is warmer than the day on top of stack
            while (
                stack.length > 0 &&
                temperatures[i] > temperatures[stack[stack.length - 1]]
            ) {

                // remove the previous day index
                const prevDay = stack.pop();

                // calculate how many days we waited
                result[prevDay] = i - prevDay;
            }

            // add current day to stack
            // meaning we haven't found a warmer temperature yet
            stack.push(i);
        }

        return result;
    }
}