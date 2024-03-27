/**
 *  Unit 2 Lesson 2: Understanding Return Statements
 *
 *  Read through the README.md file carefully.
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

// Return whether or not it's the weekend
function is_it_the_weekend(day) {
    
}

// Is it an even number divisible by 9
function evNineIble(value) {
    
}

// Return the area of the circle
function area_circle(r) {

}

// Return the area of the "label" of the cylinder
function area_label(r, h) {

}

// Return the surface area of the cylinder
function area_cylinder(r, h) {
    
}

// Return whether or not the ghosts are both laughing or angry
function ghost_watch(polter, wolter) {

}

// Leave this here - don't change it
module.exports = { is_it_the_weekend, evNineIble, area_cylinder }
