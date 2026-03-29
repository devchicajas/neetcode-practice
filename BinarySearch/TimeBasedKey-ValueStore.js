// Time-Based Key-Value Store

// Implement a data structure that supports storing multiple values
// for the same key at different timestamps, and retrieving values
// based on a given timestamp.

// Implement the TimeMap class:

// TimeMap()
// Initializes the object.

// void set(String key, String value, int timestamp)
// Stores the key with the value at the given timestamp.

// String get(String key, int timestamp)
// Returns the most recent value for the key such that:
// prev_timestamp <= timestamp
// If no such value exists, return an empty string ""

// Important:
// - Timestamps for each key are strictly increasing

// Example:

// Input:
// ["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1],
//  "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]

// Output:
// [null, null, "happy", "happy", null, "sad"]

// Explanation:
// TimeMap timeMap = new TimeMap();

// timeMap.set("alice", "happy", 1);
// Store "alice" -> "happy" at timestamp 1

// timeMap.get("alice", 1);
// Returns "happy"

// timeMap.get("alice", 2);
// Returns "happy" (closest timestamp <= 2 is 1)

// timeMap.set("alice", "sad", 3);
// Store "alice" -> "sad" at timestamp 3

// timeMap.get("alice", 3);
// Returns "sad"

// Constraints:
// - 1 <= key.length, value.length <= 100
// - key and value contain lowercase letters and digits only
// - 1 <= timestamp <= 1000
// - Timestamps are strictly increasing per key


class TimeMap {
    constructor() {
        // This map will store:
        // key -> array of [value, timestamp]
        // Example:
        // "alice" -> [["happy", 1], ["sad", 3]]
        this.keyStore = new Map();
    }

    /**
     * Store value with timestamp
     */
    set(key, value, timestamp) {
        // If this key has never been seen before,
        // initialize it with an empty array
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        // Push the new [value, timestamp] pair
        // Important:
        // - We are NOT sorting manually
        // - Problem guarantees timestamps are strictly increasing
        // - So this array is always already sorted by time
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * Get the most recent value at or before given timestamp
     */
    get(key, timestamp) {
        // If key doesn't exist at all, nothing was ever stored
        if (!this.keyStore.has(key)) {
            return "";
        }

        // Get the list of [value, timestamp] pairs
        let values = this.keyStore.get(key);

        // We will use binary search because:
        // - The array is sorted by timestamp
        // - We want O(log n) lookup instead of scanning all values

        let left = 0;
        let right = values.length - 1;

        // This will store the best valid answer found so far
        // (closest timestamp <= target)
        let result = "";

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            let value = values[mid][0];
            let time = values[mid][1];

            if (time === timestamp) {
                // Exact match → best possible answer
                return value;
            }

            if (time < timestamp) {
                // This timestamp is valid (<= target)
                // Save it as a possible answer
                result = value;

                // Move right to try finding a closer timestamp
                // (we want the mosst recent one)
                left = mid + 1;
            } else {
                // This timestamp is too large (> target)
                // So we must search the left side
                right = mid - 1;
            }
        }

        // After binary search:
        // - If we found a valid timestamp → return it
        // - If not → return empty string
        return result;
    }
}