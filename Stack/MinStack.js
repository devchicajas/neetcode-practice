//Min Stack
//Medium
//Topics
//Company Tags
//Hints
//Design a stack class that supports the push, pop, top, and getMin operations.

//MinStack() initializes the stack object.
//void push(int val) pushes the element val onto the stack.
//void pop() removes the element on the top of the stack.
//int top() gets the top element of the stack.
//int getMin() retrieves the minimum element in the stack.
//Each function should run in 
//O(()O(1) time.

//Example 1:

//Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

//Output: [null,null,null,null,0,null,2,1]

//Explanation:
//MinStack minStack = new MinStack();
//minStack.push(1);
//minStack.push(2);
//minStack.push(0);
//minStack.getMin(); // return 0
//minStack.pop();
//minStack.top();    // return 2
//minStack.getMin(); // return 1
//Constraints:

//-2^31 <= val <= 2^31 - 1.
//pop, top and getMin will always be called on non-empty stacks.

class MinStack {

    constructor() {

        // main stack where we store all values normally
        this.stack = [];

        // second stack that keeps track of the minimum values
        // the top of this stack will always be the current minimum
        this.minStack = [];
    }

    /**
     * push a value onto the stack
     */
    push(val) {

        // push the value into the main stack
        this.stack.push(val);

        // if minStack is empty OR the value is smaller than the current min
        // then we push this value as the new minimum
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * remove the top value
     */
    pop() {

        // remove the top value from the main stack
        const removed = this.stack.pop();

        // if the value we removed is also the current minimum
        // we must remove it from the minStack too
        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    /**
     * return the top element without removing it
     */
    top() {

        // return the last element in the stack
        return this.stack[this.stack.length - 1];
    }

    /**
     * return the minimum element
     */
    getMin() {

        // the top of minStack is always the smallest number
        return this.minStack[this.minStack.length - 1];
    }
}