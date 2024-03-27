/**
 *  Unit 2 Lesson 2: Understanding Return Statements
 *
 *  Author's Name:
 */

'use strict'

// Here's an example of a return statement being used
function current_time() {
    // Get the current time
    const now = new Date().toLocaleTimeString();
    return now;
}

// We'll only see the return if we print it.
let time = current_time();
console.log(time);



