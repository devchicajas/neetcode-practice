//There are n cars traveling to the same destination on a one-lane highway.

//You are given two arrays of integers position and speed, both of length n.

//position[i] is the position of the ith car (in miles)
//speed[i] is the speed of the ith car (in miles per hour)
//The destination is at position target miles.

//A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

//A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

//If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.
//Return the number of different car fleets that will arrive at the destination.

//Example 1:

//Input: target = 10, position = [1,4], speed = [3,2]

//Output: 1
//Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.

//Example 2:

//Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]

//Output: 3
//Explanation: The cars starting at 4 and 7 become a fleet at position 10. The cars starting at 1 and 0 never catch up to the car ahead of them. Thus, there are 3 car fleets that will arrive at the destination.

//Constraints:

//n == position.length == speed.length.
//1 <= n <= 1000
//0 < target <= 1000
//0 < speed[i] <= 100
//0 <= position[i] < target
//All the values of position are unique.



class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        // combine position and speed into one array
        // so each car keeps its speed and position together
        const cars = [];

        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }

        // sort cars by position from closest to target → farthest
        // this lets us process cars in the order they appear on the road
        cars.sort((a, b) => b[0] - a[0]);

        // stack will store the time each fleet takes to reach the target
        const stack = [];

        // go through each car
        for (let [pos, spd] of cars) {

            // calculate how long this car takes to reach the target
            const time = (target - pos) / spd;

            // push the time into the stack
            stack.push(time);

            // if this car arrives earlier or at the same time as the fleet ahead
            // then it catches that fleet and becomes part of it
            if (
                stack.length >= 2 &&
                stack[stack.length - 1] <= stack[stack.length - 2]
            ) {

                // remove the new time because it merges with the fleet ahead
                stack.pop();
            }
        }

        // number of fleets = number of times remaining in the stack
        return stack.length;
    }
}