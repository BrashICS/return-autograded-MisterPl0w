/**
 *  Unit 2 Lesson 2: Understanding Return Statements
 *
 *  Author's Name:  Sample Student
 */

'use strict'

/********* THIS FUNCTION SHOULD FAIL A TEST (on purpose) *********/
function is_it_the_weekend(day) {
    return (day == 7);
}

// Is it an even number divisible by 9
function even_nine(value) {
    return (value % 2 == 0 && value % 9 == 0);
}

// Return the area of the circle
function area_circle(r) {
    return Math.PI*(r**2);
}

// Return the area of the "label" of the cylinder
function area_label(r, h) {
    return Math.PI*2*r*h;
}

// Return the surface area of the cylinder
function area_cylinder(r, h) {
    // Probably should have asked students to round their answers here...
    return area_circle(r)*2 + area_label(r, h);
}

// Return whether or not the ghosts are both laughing or angry
function ghost_watch(polter, wolter) {
    // Does it need to be done with an if-statement?
    if ((polter == "laughing" || polter == "angry") && polter == wolter) {
        return true;
    } else {
        return false;
    }
}

// Leave this here - don't change it
module.exports = { is_it_the_weekend, even_nine, area_cylinder }






