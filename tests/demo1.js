function add(a,b) // defines a function named add that takes two parameters.
{
    return a+b; //adds the two parameters and returns the result.

}

add(10,20); //calls the function with 10 and 20, so it returns 30.

//console.log(add(10, 20)); // Output: 30



let user=   //reassigned the value of the name property in your user object
{
    name:"bob", //Initially, user.name was "bob".
    age:25    
};

user.name="hyderabad"  //After user.name = "hyderabad";, the property is updated.

// console.log(user); // Output: { name: "hyderabad", age: 25 }


//user.city = "Hyderabad"; //If you want to add a new property instead of changing an existing one
//console.log(user); // Output: { name: "bob", age: 25, city: "Hyderabad" }



class CartPage{  //Defines a class named CartPage
    constructor(page) //The constructor runs when you create a new instance of the class. It takes a page argument
    {
        this.page=page;  //Stores the page object inside the class instance.
        this.cartProduct=page.locator("#id");  //Creates a locator for an element with id="id" on the page

    }

}