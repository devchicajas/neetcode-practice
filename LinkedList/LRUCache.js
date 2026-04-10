/*
implement an LRU (least recently used) cache

we need a class LRUCache with:

LRUCache(capacity)
- initialize cache with max size = capacity

get(key)
- return value if key exists
- otherwise return -1
- mark key as recently used

put(key, value)
- if key exists -> update value + mark as recently used
- if key does not exist -> add key/value
- if adding exceeds capacity -> remove least recently used key

important:
- a key is "used" whenever get or put is called on it

goal:
- both get and put must run in O(1) time

example:
capacity = 2

put(1,10) -> {1=10}
get(1)    -> 10

put(2,20) -> {1=10, 2=20}
put(3,30) -> {2=20, 3=30}  // 1 removed (least recently used)

get(2) -> 20
get(1) -> -1

constraints:
- capacity between 1 and 100
- keys and values between 0 and 1000
*/

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map(); // key -> value (ordered)
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {

        // if key not found
        if (!this.cache.has(key)) return -1;

        // get value
        const value = this.cache.get(key);

        // move key to most recent
        // delete + reinsert puts it at the end of Map
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {

        // if key already exists
        if (this.cache.has(key)) {

            // remove it so we can re-add as most recent
            this.cache.delete(key);

        } 
        // if at capacity and key is new
        else if (this.cache.size === this.capacity) {

            // get least recently used (first key in Map)
            const firstKey = this.cache.keys().next().value;

            // remove it
            this.cache.delete(firstKey);
        }

        // insert as most recent (goes to end)
        this.cache.set(key, value);
    }
}