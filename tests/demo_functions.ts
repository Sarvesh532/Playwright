import {Page,Locator} from '@playwright/test';


function add1(a:number,b:number):number  //explicitly declared that both parameters must be numbers
{
    return a+b;

}
//add1('abc',40); -- error- Argument of Type string is not assignable to parameter (TypeScript immediately complains because 'abc' is a string, not a number and This is the power of static typing: it prevents runtime bugs by catching type mismatches during compilation)
add1(30,40);  //works perfectly and returns 70 (Without TypeScript, plain JavaScript would happily run add1('abc', 40) and produce "abc40" (string concatenation). TypeScript enforces correctness and avoids these subtle bugs)


let user1:   //defined user1 with a type annotation
{
    name:string,
    age:number,
    location:string   //This ensures that only those three properties exist, with the correct types
}= 
{
    name:"bob",
    age:25,    
    location:"hyderabad"  //Initially, location was "hyderabad"
};

user1.location="Pune"   //the property is updated to "Pune" (TypeScript enforces that location must always be a string, so assigning a number (like user1.location = 123;) would throw a compile-time error)

//console.log(user1);  // Output: { name: "bob", age: 25, location: "Pune" }


class CartPage1{
    page: Page
    constructor(page:Page)
    {
        this.page=page;

    }

}

class CartPage{
    page: Page
    cartProduct: Locator

    constructor(page:Page,locator:Locator)
    {
        this.page=page;
        this.cartProduct=locator;
        page.locator("#id"); 

    }
}