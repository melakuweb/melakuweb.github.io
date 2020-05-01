/*
filename: jsintro.js
author: melaku tegegne
student id: 611082
description: solution for assignment5
date: 24 April 2020

*/



"use strict";
console.log("Hello js");
function max(num1, num2) {
    if(num1>num2){
        return num1;
    }
    return num2;
}
console.log(max(3,14));

function maxOfThree(num1, num2,num3) {
    if((num1>num2) && (num1>num3) ){
        return num1;
    } else if((num2>num1) && (num2>num3)){
        return num2;
    }
    return num3;
}
console.log(maxOfThree(11,7,9));

function isVowel(char) {
    let vowel =["a","e","u","i","o","A","E","U","I","O"];
    for(let v=0; v<vowel.length;v++){
        if(char == vowel[v])   return true;
    }
    return false;
}
console.log(isVowel("i"));
console.log(isVowel("k"));

function sum(nums) {
    let total=0;
    for(let i=0; i<nums.length;i++){
        total=total+nums[i];
    }
    return total;
}
console.log(sum([1,2,3,4]));



function multiply(nums) {
    let product=1;
    for(let i=0; i<nums.length;i++){
        product=product*nums[i];
    }
    return product;   
}
console.log(multiply([1,2,3,4]));

function reverse(instr) {
    if ( instr.length == 1)
       return instr[0];
   return instr[instr.length-1] + reverse(instr.substring(0, instr.length-1));   
}


//function reverse(inputstr) {
//    let rstr='';
//    for(let i=0; i<inputstr.length;i++){
//        rstr=inputstr[i]+rstr;
//    }
//    return rstr;   
//}
console.log(reverse("jag testar"));

/* takes an array of words and an integer i and  returns a new array 
containing only those words that were longer than i characters.
*/
function filterLongWords(i,iwords) {
    let longwords=[];
    for(let j=0; j<iwords.length;j++){
        if(iwords[j].length > i) longwords.push(iwords[j]);
    }
    return longwords;   
}
console.log(filterLongWords(3, ["one","to","three","i"]));

/*

Write a function named, computeSumOfSquares, that takes as input, 
an array of numbers and calculates and returns the sum of the squares of 
each number in the input array. E.g. computeSumOfSquares([1,2,3]) 
should be computed as 12 + 22 +32 = 14. Note: Write your Javascript 
code without using Imperative programming. i.e. Do NOT use any explicit looping construct; 
instead use functional programming style/approach.

*/
function computeSumOfSquares(nums) {  
    return nums.reduce(function(accumulator, currentValue, currentIndex, array) {
        return accumulator + (currentValue*currentValue);
      });
}
console.log(computeSumOfSquares([1,2,3]));

/*
Write a function named, printOddNumbersOnly,
 that takes as input, an array of integral numbers and it finds and 
 prints only the numbers which are odd.
*/

function printOddNumbersOnly(nums) {  
    return nums.filter(function(elem) {
        return elem%2 !== 0;
      });
}
console.log(printOddNumbersOnly([1,2,3]));

/*

Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, 
an array of integral numbers and calculates and returns the sum of the squares
 of only the even numbers in the input array. E.g. 
 computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 2^2 +4^2 = 20.
*/

function computeSumOfSquaresOfEvensOnly(nums) {  
    return nums.filter(function(elem) {
                        return elem%2 == 0;})
                .reduce(function(accumulator, currentValue, currentIndex, array) {                    
                    return accumulator + (currentValue*currentValue);
                },0);
}
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));

/*

Using the Array.reduce(…) function, re-implement your functions, sum(…) and 
multiply(…) (defined in Problem 4 above) without using Imperative programming.
 i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.
*/

// sum using reduce 
function sum(nums) {
    return nums.reduce(function(accumulator, currentValue, currentIndex, array) {                    
        return accumulator + currentValue;
    },0);
}
console.log(sum([1,2,3,4]));


// multiple using reduce 
function multiply(nums) {
    return nums.reduce(function(accumulator, currentValue, currentIndex, array) {                    
        return accumulator * currentValue;
    },1);   
}
console.log(multiply([1,2,3,4]));

/*
Implement Javascript code for a function named, findSecondBiggest, 
which takes as input, an array of numbers and finds and returns the 
second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) 
should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. 
(Note: Do not use sorting!)
*/

function findSecondBiggest(nums) {
    let max=nums[0];
    let secondMax=max;
    for(let i=0; i<nums.length;i++){    
        if((nums[i] > secondMax) && (nums[i] < max) ){ 
            secondMax = nums[i];
        } else if(nums[i] > max){   
            secondMax = max;
            max =  nums[i];  
        }
    }
    return secondMax;
}

console.log(findSecondBiggest([1,19,9,11,0,12]));
console.log(findSecondBiggest([1,2,3,4,5]));

/* 
Write a function named printFibo, that takes as input, a given length, n, and any two starting 
numbers a and b, and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) 
of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", 
as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as
output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), 
prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), 
prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
*/
function printFibo(n,a,b) {
    let result=[];
    for(let i=0;i<n;i++){
        result.push(a);
        let tmp= a+b;
        a=b;
        b=tmp;
    }
    return result;
}
console.log("-----");
console.log(printFibo(1, 0, 1));//0
console.log(printFibo(2, 0, 1));// 0, 1
console.log(printFibo(3, 0, 1));// 0,1,1
console.log(printFibo(6, 0, 1));// 0,1,1,2,3,5
console.log(printFibo(10, 0, 1)); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

/* 
14. Refer to your work on Lab Assignment 4. Add Javascript code to 
work with your 2 HTML forms as follows:
a. Login Form: Add code such that when the Submit button is clicked, 
the values entered in the input fields are printed to the Console.
b. New Product Form: Add code such that when the Submit button is clicked, 
the values entered in the input fields are displayed in a pop-up window.
*/

function printvalues(){
  
    let elements = document.getElementById("Form1").elements;
    console.log("Printing...")
    for (let i = 0; i < elements.length-1; i++) {        
            console.log(elements[i].value);            
    }
}

function printValuesToWindow(){  
    let elements = document.getElementById("Form2").elements;
    console.log("Printing...")
    for (let i = 0; i < elements.length; i++) {        
            window.alert(elements[i].value);            
    }
}
/* 
15. Using JavaScript and HTML and CSS, implement a webpage that displays a working,
 ticking counter Clock, that counts/displays the current Date and time of 
 the browser host, in the format: 2019-11-4 12:16:01
*/

// Update the count down every 1 second
let x = setInterval(function() {

    // Get today's date and time
    let curdatetime = new Date();
  
     //  Find year, month, days, hours, minutes and seconds
     let years = curdatetime.getFullYear();
     let months = curdatetime.getMonth()+1;
     let days   = curdatetime.getDate();
     let hours   = curdatetime.getHours();
     let minutes = curdatetime.getMinutes();
     let seconds = curdatetime.getSeconds();
  
    // Display the result in the element with id="datetimedatetime"
    let datetime = document.getElementById("datetime");
    datetime.innerHTML = years + "-" + months + "-" + days + " " + hours + ":"+ minutes + ":" + seconds ;
    datetime.style.color="green";
    datetime.style.fontWeight="700"; 
  
  }, 1000);