//Two Integer Sum II
//Medium
//Topics
//Company Tags
//Hints
//Given an array of integers numbers that is sorted in non-decreasing order.

//Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

//There will always be exactly one valid solution.


////Example 1:

//Input: numbers = [1,2,3,4], target = 3

//Output: [1,2]
//Explanation:
//The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].

//Constraints:

//2 <= numbers.length <= 1000
//-1000 <= numbers[i] <= 1000
//-1000 <= target <= 1000

class Solution {
   /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
  twoSum(numbers, target) {

    // array is sorted so we can use two pointers instead of hashmap

    let left = 0; // start at smallest number
    let right = numbers.length - 1; // start at biggest number

    // keep looping until they cross
    while (left < right) {

      // add both ends
      const sum = numbers[left] + numbers[right];

      if (sum === target) {
        // found it so return 1 based index bc thats what problem wants
        return [left + 1, right + 1];
      }

      else if (sum < target) {
        // sum too small so move left up (need bigger number)
        left++;
      }

      else {
        // sum too big so move right down (need smaller number)
        right--;
      }
    }

    // problem says there is always a solution but just in case
    return [];
  }
}