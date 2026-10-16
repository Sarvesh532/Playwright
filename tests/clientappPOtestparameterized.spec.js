const {test, expect}= require('@playwright/test');
const { cpSync } = require('node:fs');
const {LoginPage}= require('../pageobject/Loginpage'); //import classes from other/outside folder
const {DashboardPage}= require('../pageobject/Dashboardpage');
const testdata= require('../Utils/placeOrderTestDataParameterized.json'); //import testdata file

const dataset= JSON.parse(JSON.stringify(testdata)); //convert testdata [json] into javascript object

for(const data of dataset){

test.only(`Login ${data.product}`,async({page})=>{
    //await page.goto('https://rahulshettyacademy.com/client/#/auth/login');  //hit the URL
    const loginPage= new LoginPage(page);            //object creation
    const dashboardPage= new DashboardPage(page);

    
    await loginPage.Goto();                             //call method
    await loginPage.validLogin(data.username, data.password);

    await dashboardPage.searchProductAddCart(data.product);
    await dashboardPage.navigateToCart();

    
  
    const Bool=await page.locator(`//h3[text()='${data.product}']`).isVisible();

//     // expect(Bool).toBe(true);
//    await page.locator("//*[text()='Checkout']").click();
//    await page.locator("[placeholder='Select Country']").pressSequentially('Ne');//to checkdropdown
   
//    const dropdown=page.locator('.ta-results');

// //await page.locator('.ta-results').waitFor();//wait untilsuggestion
// await dropdown.waitFor();
//   const options = dropdown.locator("button");
//   const optionsCount = await options.count();
//   console.log(optionsCount);
//   for (let i=0; i<optionsCount; i++)
// {
//     const text = await options.nth(i).textContent();
//     console.log(text);

//     if(text.trim()==='Nepal')///to remove space
//     {
//         await options.nth(i).click();
//         break;
//     }
// }
// await page.locator("//div[text()='Name on Card ']//following-sibling::input").fill('sarvesh');
// await expect (page.locator(".user__name [type='text']").first()).toHaveText(emailid);

// await page.locator(".action__submit").click();
// await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');


// const order_Id = await page.locator("//label[@class='ng-star-inserted']").textContent(); //store order_Id

// const cleanedOrderId = order_Id?.replace(/\|/g, '').trim(); // to make order_Id without whitespace & pipe
// console.log(cleanedOrderId); //to print order_Id 

// // console.log(order_Id);

// const order = await page.locator("//button[contains(text(),'ORDERS')]")
// await order.click();

// const your_order = await page.locator("//tr[@class='ng-star-inserted']"); //highlighted 1 by 1 row from your_order table
// const total_orders = await your_order.count();
// console.log(total_orders);

// for(let i=0; i<total_orders; i++)
// {
// const table_orderId = await your_order.nth(i).locator("//th[@scope='row']").textContent(); //store order_Id from your_order table 
// //console.log(table_orderId);

// if(table_orderId===cleanedOrderId)
//         {
            
//             console.log(table_orderId)
//             console.log(cleanedOrderId);


//             break;

//         }
//     }

})};