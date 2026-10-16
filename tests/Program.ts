// Swap 2 Numbers
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b);  // Output: 10 5

let c: number =12, d: any = "AS";
[c, d] = [d, c];
console.log(c, d);


// Add Operation Function
let add = function(a: number, b: number): number{
    return a+b;
}
console.log(add(3, 4))  // Output: 7

let div4 = function(a: number, b: number): number{
    return a/b;
}
console.log(div4(15,5));


let add1 = (a: number, b: number): number=> a+b;
console.log(add1(10,6));  // Output: 16

function add3(a, b) {
     return a+b;
}
let result = add(2, 3)
console.log(result);  // Output: 5


let sum = (a, b) => a+b;
console.log(sum(2, 3));  // Output: 5


// Reverse a String function
function reverseString(str: string): string {
  return str.split('').reverse().join('');  // split the string into characters, reverse them, and join back.
}
console.log(reverseString("Playwright"));   // Output: thgirwyalP


function rev(a: string): string{
    return a.split('').reverse().join('');
}
console.log(rev("234"));


// filter even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // Output: [2, 4, 6]



// to find duplicate characters in a string
const getDuplicates = (str: string): string[] => 
  [...new Set(str.split("").filter((char, index, arr) => arr.indexOf(char) !== index))];

console.log(getDuplicates("hello world")); // Output: [ 'l', 'o' ]



// remove duplicate numbers from an array
function removeDuplicates(arr: number[]): number[] {
    return [...new Set(arr)];  // used set because it stores only unique values
}
console.log(removeDuplicates([1, 2, 3, 4, 4]))  // Output: [ 1, 2, 3, 4 ]


// Check if string is a palindrome
function isPalindrome (str: string) : boolean {
    const reversed = str.split('').reverse().join('');
    return str === reversed;  // it reads the same forward & backward
}
console.log(isPalindrome("madam")) // Output: true



// factorial number
function factorial(n: number): number {
    if (n === 0) return 1;
    return n * factorial(n-1);
}
console.log(factorial(5));  // Output: 120

function fact(n: number): number {
    if (n===0 || n===1){
        return 1;
    } else {
        return n* fact(n-1);
    }
}
console.log(fact(7));  // Output: 120


// find prime number
function isPrime(num: number): boolean {
    if(num<=1) return false;
    for (let i=2; i<num; i++) {
        if(num%i === 0) return false;
    }
    return true;   // prime number is divisible only by 1 & itself
}
console.log(isPrime(7));  // Output: true


// generate the first N fibonacci series
function fibonacci(n: number): number[] {
    const series = [0, 1];
    for (let i = 2; i<n; i++) {
        series.push(series[i-1] + series[i-2]);
    }
    return series;  // Each number is the sum of the two numbers before it, starting with 0 & 1.
}
console.log(fibonacci(6));  // Output: [ 0, 1, 1, 2, 3, 5 ]

function getfibonacci(n: number): number[] {
    let sequence =[0,1];
    for (let i=2; i<n; i++){
        sequence[i] = sequence[i-1] + sequence[i-2];
    }
   return sequence;
}
console.log(fibonacci(8));   // // Output: [ 0, 1, 1, 2, 3, 5, 8, 13 ]



// Sort an array
function sortArray(arr: number[]): number[] {
    return arr.sort((a, b) => a-b);   // arrange numbers in ascending order
}
console.log(sortArray([5, 3, 8, 1]));  // Output: [ 1, 3, 5, 8 ]

function sortArr(arr: number[]): number[]{
    return arr.sort();
}
console.log(sortArray([4,67,48,9]));


// find the largest number in an array
function findMax(arr: number[]): number {
    return Math.max(...arr);     // used Math.max with spread operator to get the largest number
}
console.log(findMax([10, 25, 7]));  // Output: 25



// find the 2nd largest number in an array
function findSecondLargest(arr: number[]): number {
const sorted = [...new Set(arr)].sort((a, b) => b - a);
return sorted[1];
}
console.log(findSecondLargest([10, 25, 7]));  // Output: 10




// count characters in string
function countCharacters(str: string): number {
    return str.length;     // used the length property to count characters
}
console.log(countCharacters("Playwright"));  // Output: 10



// Check if number is Armstrong
function isArmstrong1(num: number): boolean {

    const digits = num.toString().split('');

    let sum = 0;

    for (const digit of digits) {
        sum += Number(digit) ** digits.length;
    }

    return sum === num;
}

console.log(isArmstrong1(153));  // true (1^3 + 5^3 + 3^3 = 153)



const isArmstrong = (num: number): boolean => {
    const digits = [...num.toString()];

    const sum = digits.reduce(
        (total, digit) =>
            total + Number(digit) ** digits.length,
        0
    );

    return sum === num;
};
console.log(isArmstrong(153)); // true (1^3 + 5^3 + 3^3 = 153)




// Interview asked question
const arr: number[] = [1, 2, 3, 4];
const L: number = 5;
const result2: number[] = [L, ...arr];
console.log(result2);
