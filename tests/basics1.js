console.log("Hello World");   // Prints: Hello World

// const {test,expect}= require('@playwright/test');
/*

*/
// int a=4;
// String name="Sanket";
// In Javascript, integer and float both are represented as number data type
// Types of data types in JavaScript
let a=4.6;
console.log(a);               // Prints: 4.6
console.log(typeof a);        // Prints: number
let name1="Sanket";
console.log(name1);            // Prints: Sanket
console.log(typeof name1);     // Prints: string
// var, let, const
// let, const -mostly used

// 
let required=true;             
console.log(required);            // Prints: true
console.log(typeof required);     // Prints: boolean

let x=null;
console.log(x);                // Prints: null
console.log(typeof x);

let y;
console.log(y);                // Prints: undefined
console.log(typeof y);         // Prints: undefined

// Arithmetic Operators
let a1=4;
let b=5;
let c=a1+b;
console.log("a1+b=" + c);          // Prints: a1+b=9

// let d=a1*b;
// let d=a1-b;
// Negation operator
let required1=true;
console.log(!required1);          // Prints: false


// Redecalration and Reassignment
let c1=10;
// let c1=20; // redeclaration
// It will give error as we cannot redeclare a variable with let keyword

var c2=10;
var c2=20; // redeclaration
// It will not give error as we can redeclare a variable with var keyword

let c3=10;
c3=20; // reassignment
console.log(c3);
// It will not give error as we can reassign a variable with let keyword

const c4=10;
// c4=20; // reassignment
console.log(c4);
// reassignment will give error as we cannot reassign a variable with const keyword



// const country="India";
let markss=90;
markss=95;
console.log(markss);    // Prints: 95 (because 'let' allows reassignment)


const flag=true;
if(flag){
    console.log("This condition is true");
}
else if(!flag){
    console.log("This condition is false");
}
else{
    console.log("This condition is neither true nor false");
}


const flag1=true;
console.log(flag1);        // Prints: true
console.log(!flag1);       // Prints: false

while(flag1){
    console.log("This condition is true");
    break;                    // Prevents infinite loop
}
let i1=0;
while(i1<5){
    console.log(i1);           // Prints 0,1,2,3,4
    i1++;
}


let i2=2;
do{
i2++;
console.log("do condition"+i2);  //The do block runs first, increments i2, and prints "do condition".
}
while(i2<20){   //The loop continues until i2 reaches 20.
console.log("while condition"+i2);  //After the loop exits, the final console.log("while condition " + i2) runs once.
} 
//OP:
//do condition 3
//do condition 4
//...
//do condition 20
//while condition 20



// let visible=false;
// let attempst=0;
// do{
//     visible=page.locator('#passwo4e').fill("sdhjdsj")
//     visible.clicked();
// }
// while(!visible && attempst<3){
//     console.log("element found");
// }

// for(initilation; condition; increment){
// // code
// }
let n=0;   //n counts how many times this happens.
for(let i=1; i<=100; i++){     //i goes from 1 → 100.
   
    if(i%2==0 && i%5==0){     //Condition i % 2 == 0 && i % 5 == 0 means i % 10 == 0 So it logs numbers divisible by 10.
        n++;
         console.log("for loop"+i);
         if(n==5){  //It will print the first 5 numbers divisible by 10 between 1 and 100: Then it stops because n == 5.
            break;            //When n == 5, the loop breaks.
         }
    }
}


// Arrays-collection which have mutiples
// var a=1;
// var a=2
// var a=3
// let marks=new Array(6);
let marks = [10,20,30,50,60,70];

marks[3]=14;    // Replace the 4th element (index 3) with 14
console.log(marks);     // [10, 20, 30, 14, 60, 70]
// console.log(marks.length);
// push - To add value in end 
console.log(marks.push(100,200));  // Add 100 and 200 at the end & returns new length: 8

console.log(marks);  // [10, 20, 30, 14, 60, 70, 100, 200]
// pop-delete the last element
console.log(marks.pop())   // Remove the last element so returns 200
console.log(marks);   // [10, 20, 30, 14, 60, 70, 100]
// splice(index,count) -to delete the element index wise

// console.log(marks.splice(2,3));
console.log(marks.unshift(3));  // Add 3 at the beginning & returns new length: 8
console.log(marks);  // [3, 10, 20, 30, 14, 60, 70, 100]


