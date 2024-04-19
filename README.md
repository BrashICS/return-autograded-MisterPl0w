# Lesson 2: Return Statements

###### [Jump to the task](#your-task)

A function can be used to return values. So far, you are used to using <b>console.log</b> to recieve information. While using <b>console.log</b> visually gives you data, you can't do anything with that data. Instead, you can use a <b>return</b> statement to "return" data. Using <b>return</b> allows you to get data back from a function, so you can use it.

When a function reaches a <b>return</b> statement, the function ends. Only one value can be returned, although you can return anything. Commonly, a function can return boolean data (<b>true</b> or <b>false</b>), a <b>number</b>, a <b>string</b>, or any other data type.

In the following case, only the first bunch of code will run. The second bunch will never be executed, because the function reaches a return statement first. Since the function is ended at that point, it doesn't go any further than that line.


```JS
function myFunction() {
  // a bunch of code
  return;
  // a bunch of other code
}
``` 

When we call the below function, <b>`isNumberFour()`</b>, it checks to see if the value we gave it is the number 4. If it is, the function returns <b>true</b> and ends. It returns false if the value isn't the number 4.


```JS
function isNumberFour(num) {
  if (num == 4) {
    return true;
  } else {
    return false;
  }
}
```
```Output
> console.log(isNumberFour(4))
true

> console.log(isNumberFour(23))
false
```

You can use a return statement to return the value of variables. Returning variables is useful if you want your function to do something that won't have a consistent output, like doing math for you based on values you give it. 

```JS
function addition(num1, num2) {
  return num1 + num2;
}
```

You can also have multiple return statements in your function. For example, if you have multiple possible outcomes. This function below returns <b>true</b> if the number is even, and returns <b>false</b> if it is anything else.

```JS
function isOdd(num) {
  if (num % 2 == 1) {
    return false;
  } else {
    return true;
  }
}
```

### Important notes:

- The `return` statement _will not print to the console_. If you want to **see** what the return value is, you will need to print it for yourself.
- The `return` statement **stops** the function. No code in the function will run if `return` is hit.


# Your Task 

### Is It The Weekend
- Create a function called `is_it_the_weekend(day)`, which returns **`true`** if it is Saturday or Sunday, and <b>false</b> for a weekday.
  - `day` is a number from 1 to 7 where 1 is Sunday, 2 is Monday, etc...

### Even number divisible by nine
- Create a function called `even_nine(value)` that returns <b>**`true`**</b> if the `value` is divisble by 9 **_and_** even. Otherwise it returns <b>`false`</b>.  

### Surface Area of a Cylinder (Medium)
- Create a function `area_circle(r)` which _returns_ the area of a circle given the radius, `r`.
- Create a function `area_label(r, h)` which _returns_ the area of the cylinder's label (vertical surface) given height `h` and radius `r`.
- Create a function `area_cylinder(r, h)` which _returns_ the surface area of a cylinder. _Use the two functions you created above to complete the calculation_.

### Creepy Ghosts

- Two Ghosts, Polter and Wolter, are complete opposites. The two ghosts are quite dangerous if they both get excited at the same time (observable by laughter or anger), but they will remain neutral most of the time. They are under watch by guards in a **Super Secure Containment Facility**. The guards have orders to lock down the facility if both ghosts are laughing, or both are very mad. Although the threat that the two ghosts pose is enormous, the two guards are always slacking off so they request your help to turn on lockdown mode if the conditions are met. 
- Create the function `ghost_watch(polter, wolter)`. This function will check if the ghosts are either both laughing or both angry, and return <b>`true`</b> if either condition is met.
- Hint: There are three moods the ghosts can have: "angry", "laughing", and "neutral". Try and think of a way you can pass the moods to the function <i>without</i> using strings.

#### Note:
You will see a file in the repository called `package.json`. Do **not** delete or change that file.

<br><br><br>
