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
let n=0;
for(let i=1; i<=100; i++){      //Loops i from 1 to 100.
   
    if(i%2==0 && i%5==0){      //Checks if i is divisible by both 2 and 5 → i.e., divisible by 10.
        n++;                    //Each time it finds such a number, it increments n and logs it
         console.log("for loop"+i);
         if(n==5){   //It will print the first 5 numbers divisible by 10 between 1 and 100: Then it stops because n == 5.
            break;     //When n reaches 5, the loop breaks
         }
    }
}


// Arrays-collection which have mutiples
// var a=1;
// var a=2
// var a=3
// let marks=new Array(6);
let marks= [10,20,30,50,60,70];
console.log(marks.includes(120));  
//checks whether the value 120 exists in the array marks.
//Since the array only contains [10, 20, 30, 50, 60, 70], the value 120 is not present.
//Therefore, it returns false.

// let sum=0;
// for(let i=0; i<marks.length; i++){
//     // console.log(marks[i]);
//     sum=sum+marks[i];
// }
// console.log("sum using for loop with array"+sum);

let total=marks.reduce((sum, marks)=>sum+marks,0);  //adds all elements together.
// console.log(total);  //240

let scrores=[16,13,12,14,12];
console.log("sorting numbers "+scrores.sort());
//sort() without a comparator sorts values as strings, not numbers.
//So "12" comes before "13", but "16" might not sort as expected.
//sorting numbers 12,12,13,14,16


scrores.sort((a,b)=>a-b).reverse();  //Here you sort numerically (a - b) and then reverse for descending orde
console.log("sort using aaray"+scrores);  //sort using array 16,14,13,12,12

let evemscore=scrores.filter(score=>score%2==0);  //filter keeps only even numbers.
// console.log(evemscore);  //[16,14,12,12]

let mappedArray=scrores.map(score=>score*3);  //map multiplies each score by 3.
// console.log(mappedArray);  //[48,42,39,36,36]

let totalAray=scrores.filter(score1=>score1%2==0).map(score1=>score1*3).reduce((sum,value)=>sum+value,0);
console.log(totalAray);
// This chains filter → map → reduce:
// Filter evens [16,14,12,12]
// Map to [48,42,36,36]
// Reduce sum = 162
// 162


let fruits=["banana","mango","apple"];
console.log(fruits.sort());
// sort() alphabetically sorts strings.
// [ 'apple', 'banana', 'mango' ]


// function scope- parameter and varibale used in function and used in function only, not outside the function
// block scope -paramter can be used anywhere within the class
function add(a,b){
    return a+b;
}
let result=add(42,56);
// console.log(result);

let sumOfNumbers=function(c,d){
    return c+d;
}
console.log(sumOfNumbers(54,33));

let sum=(a,b)=>a+b;
console.log(sum(34,54));

var name1="Rahul";
var name1="Sanket";
console.log(name1);


let city="Pune";
city="Mumbai";
console.log(city);

let greeting="Morning";
if(true){
    let greeting="Afternoon";
    console.log(greeting);  //Afternoon
}
console.log(greeting);  //Morning

let day=" Tuesday ";
console.log(day.length);
console.log("Sunstring: "+day.slice(2,7));
console.log(day.trim());

console.log("Character access: "+day[2]);

let texts="Tuesday is Fun day";
let spliText=texts.split(" ");
console.log(spliText);

let num="25";
let converted=parseInt(num);
console.log(converted+10);

let number=100;
console.log(number.toString()+23);

let first="Hello";
let second="Sanket";
console.log(first+" "+second);


// indexof function works  charatcter based count including space if present
let text="Tuesday is Fun day";
console.log(text.lastIndexOf("day"));
//split-It wil decide string into pieces
let splitText=text.split(" ");
console.log(text.split(" "));
// This Indexof functions works for string not character
console.log(splitText.indexOf("Fun"));


// Count of Day Word using index of Function
let text1="Day Day Fun Day";
let count=0;

let index1=text1.indexOf("Day");


while(index1 !==-1){
    count++;
    // text1.indexOf("Day",index1+1);
    index1=text1.indexOf("Day",index1+1);
    
}

console.log("count: "+count);



let person={
    firstName:"Tim",
    lastname:"Joseph",

}
// Dot notation
// console.log(person.firstName);
// Array Notation
console.log(person["firstName"]);
// Property Update
person.firstName="John";
console.log(person.firstName);
// New property added 
person.gender="Male";
console.log(person);
// deleting property
delete person.gender;
// Checking property exist
console.log("gender" in person);
for(let key in person){
    console.log(person[key]);
}


let person={

    firstname:"Tim",
    lastname:"Joseph",
// this keyword referes to the current object
// Combing first and last name by using fullname function
    fullName: function(){
        return this.firstname+" "+this.lastname;
    }


}
console.log(person.fullName());



class Person{
  age=25;
//   getter Method
  get location(){
    return "Canada";
  }
}
// Property access creating object(new Person();) of class
let person=new Person();
console.log(person.age+" "+person.location);



class Person{
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    
    fullName(){
        return this.firstName+" "+this.lastName;
    }
}

let peerson=new Person("Tim", "Joseph");
console.log(peerson.fullName());





class Person{
   constructor(firstname, Lastname){
        this.firstname=firstname;
        this.Lastname=Lastname;
    }
    fullName(){
        return this.firstname+" "+this.Lastname;
    }
}


class Pet extends Person{
    get Location(){
       return "India";
    }
}

let pet=new Pet("Sam","Tom");
console.log(pet.fullName());
console.log(pet.Location);