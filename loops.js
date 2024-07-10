//Loops means repeat the same block of code until the condition is true
//For loop syntax for(var i= 0;i<5;a++){ block of code} , While Loop Syntax var i=1; while(i<5){block of code i++}
for (var i=1; i<=100 ;i++){
    console.log(i);
}
var j=2;
while(j!=10){
    console.log("Hurrah");
    j+=2;
}
/*
Task 1
Write a "for" loop that will perform exactly the same repetitive code as this
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')

*/
for(var i=1; i<=5 ;i++){
    console.log(i);
}
console.log("Counting Completed");
/*
Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
*/
for(var i=5; i>=1 ;i--){
    console.log(i);
}
console.log("Counting Finished");
/*
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')

 */
var i=1;
while(i<=5){
    console.log(i);
    i++;
}
console.log("Counting Completed");

/*

Write a "while" loop that will perform exactly the same repetitive code as this:

console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')

*/
var i =5;
while(i>=1){
    console.log(i);
    i--;
}
console.log("Countdown finished!");
/*
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)

*/
var year =2018;
while(year <=2022){
    console.log(year);
    year++;
}
//Nested Loops -loops inside another loop is known as nested loop
for(var i=1; i<=2;i++){
    for(var j=1; j<=7;j++){
        console.log("Week:",i,'Day:',j);
    }
    console.log(" ");
}
/*
The output of the above code will be:

0
1
*/
for(var i=0;i<=1;i++){
    console.log(i);
}
/*
This time, the output is:

0
1
2
3
4
5
6
7
8
9
*/
for(var i=0;i<=9;i++){
    console.log(i);
}
/*
Now that I'm nesting the second for loop inside the first one, and that I'm console logging the values of both counter variables as the loops are progressing, the output looks like this:

0, 0
0, 1
0, 2
0, 3
0, 4
0, 5
0, 6
0, 7
0, 8
0, 9
1, 0
1, 1
1, 2
1, 3
1, 4
1, 5
1, 6
1, 7
1, 8
1, 9
*/
for(var i=0;i<=1;i++){
    for(var j=0;j<=9;j++){
        console.log(i,",",j);
    }
    console.log(" ");
}
/*
The output now is:

0 times 0 equals 0
0 times 1 equals 0
0 times 2 equals 0
0 times 3 equals 0
0 times 4 equals 0
0 times 5 equals 0
0 times 6 equals 0
0 times 7 equals 0
0 times 8 equals 0
0 times 9 equals 0
1 times 0 equals 0
1 times 1 equals 1
1 times 2 equals 2
1 times 3 equals 3
1 times 4 equals 4
1 times 5 equals 5
1 times 6 equals 6
1 times 7 equals 7
1 times 8 equals 8
1 times 9 equals 9
*/
for(var i=0;i<=1;i++){
    for(var j=0;j<=9;j++){
        console.log(i,"times",j,"equals",j);
    }
    console.log(" ");

}
/*
100 divided by 10 equals 10
100 divided by 5 equals 20
90 divided by 10 equals 9
90 divided by 5 equals 18
80 divided by 10 equals 8
80 divided by 5 equals 16
70 divided by 10 equals 7
70 divided by 5 equals 14
60 divided by 10 equals 6
60 divided by 5 equals 12
50 divided by 10 equals 5
50 divided by 5 equals 10
40 divided by 10 equals 4
40 divided by 5 equals 8
30 divided by 10 equals 3
30 divided by 5 equals 6
20 divided by 10 equals 2
20 divided by 5 equals 4
*/
for(var i=100;i>=20;i-=10){
    for(var j=10; j>=5;j-=5){
        console.log(`${i} divided by ${j} equals ${i/j}`);
    }
}/*
In JavaScript, loops are essential for repeating tasks and iterating over data. Here's a concise explanation of their importance:

Repetition of Tasks: Loops allow developers to execute a block of code repeatedly without having to write it out multiple times. This saves time and reduces redundancy in code.

Iterating Over Data: Loops are used to traverse through collections of data such as arrays or strings. This enables access to each element or character individually for processing.

Dynamic Handling of Data Length: Using the length property of arrays or strings (array.length or string.length), loops can adapt automatically if the size of the data changes. This flexibility is crucial in dynamic applications.

Displaying Data: In user interfaces, loops are used to render repetitive elements like items in a shopping cart, posts in a social media feed, or days in a calendar. This makes the interface dynamic and responsive to data changes.

Code Efficiency: By using loops, developers can write concise code that handles repetitive tasks efficiently. This improves readability and maintainability of the codebase.

Versatility Across Applications: Whether building e-commerce sites, email clients, or calendars, loops are used universally to manage and present structured data in a user-friendly manner.

Core Skill for Software Development: Mastering loops is fundamental for developing software applications that require data manipulation, display, and interaction.
*/
/*
Exercise: Working with conditionals and loops
Exercise 1

In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

To make the counter increment by 1 on each loop, you will use i++.

The exit condition for the for loop should match the output given below. 

Inside the loop, write an if-else statement, which will check the following conditions:

First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

For all the remaining values of i, your code will console log just the value of i.

Note: The expected console log of the entire code should be as follows.
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10


*/
for(var i=1; i<=10 ;i++){
    if(i==1){
        console.log("Gold medal");
    }
    else if(i==2){
        console.log("Silver medal");
    }
    else if(i==3){
        console.log("Bronze medal");
    }
    else{
        console.log(i);
    }
   
}

/*
Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.
When you code the solution, the output in the console should remain exactly the same as in the previous question.

Note: You'll need three separate cases for the three medals, and a default case for all other values of the i variable
.
*/for(var i=1; i<=10;i++){
    switch(i){
        case 1:console.log("Gold medal");
        break;
        case 2:console.log("Silver medal");
        break;
        case 3:console.log("Bronze medal");
        break;
        default:console.log(i);
    }
}

  /*
   * Comment 4
   */
