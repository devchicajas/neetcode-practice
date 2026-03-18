//You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.

//You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

//Return the minimum integer k such that you can eat all the bananas within h hours.

//Example 1:

//Input: piles = [1,4,3,2], h = 9

//Output: 2
//Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.

//Example 2:

//Input: piles = [25,10,23,4], h = 4

//Output: 25
//Constraints:

//1 <= piles.length <= 1,000
//piles.length <= h <= 1,000,000
//1 <= piles[i] <= 1,000,000,000

class Solution {

    minEatingSpeed(piles, h) {

        // The slowest possible speed
        let left = 1;

        // The fastest possible speed (largest pile)
        let right = Math.max(...piles);

        // This will store the best valid speed
        let answer = right;

        // Binary search between possible speeds
        while (left <= right) {

            // Try a middle speed
            let mid = Math.floor((left + right) / 2);

            // Calculate total hours needed if speed = mid
            let hours = 0;

            for (let pile of piles) {

                // Math.ceil because if bananas remain
                // we still need another hour
                hours += Math.ceil(pile / mid);
            }

            // If we can finish within h hours
            if (hours <= h) {

                // This speed works, try smaller speed
                answer = mid;
                right = mid - 1;
            }

            // If it takes too long
            else {

                // We need to eat faster
                left = mid + 1;
            }
        }

        // Return the minimum valid speed
        return answer;
    }
}