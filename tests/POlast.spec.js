// import { test, expect } from '@playwright/test';
// const {LoginPage}= require('../pageobject/Loginpage'); //import classes from other/outside folder
// const {DashboardPage}= require('../pageobject/Dashboardpage');

// test('Login',async({page})=>{
//     await page.goto('https://rahulshettyacademy.com/client/#/auth/login');  //launch the URL
//     const loginPage=new LoginPage(page);    //object creation
//     const dashboardPage= new DashboardPage(page);
//     const emailid= 'ssm@gmail.com';         //save emailid by hardcoding
//     const password= 'WelcomeBack@23';
//     const product_needed= 'ZARA COAT 3';
//     await loginPage.Goto();                           //call method
//     await loginPage.validLogin(emailid, password);    //call method

//     await dashboardPage.searchProductAddCart(product_needed);
//     await dashboardPage.navigateToCart();



//     // const email= page.locator('//input[@id="userEmail"]');       //email-locator
//     // const password=page.locator('//input[@id="userPassword"]');   //password locator
//     // const login=page.locator('//input[@id="login"]');             //login locator

//     // await email.fill(emailid);                                   //enter email(emailid)
//     // await password.fill('WelcomeBack@23');                       //enter password
//     // await login.click();                                         //click to "login"
//     // await page.locator('.card-body b').first().waitFor();
//     await page.pause();
    

//     // const product= page.locator("//div[@class='card-body']");
//     // const count = await product.count();
//     // console.log(count);

//     // for(let i=0; i<count; i++)
//     // {

//     //     const product_name =await product.nth(i).locator('b').textContent();
//     //     //const product_name =await product.nth(i).locator("xpath=.//b").textContent();
//     //    console.log(product_name);

//     //     if(product_name===product_needed)
//     //     {
//     //         await product.nth(i).locator("//button[contains(text(), 'Add To Cart')]").click();
//     //         break;
//     //     }
        
//     // }
//     // await page.locator("[routerlink*='cart']").click();
//     //const Bool=await page.locator("//h3[text()='ZARA COAT 3']").isVisible();
//     const Bool=await page.locator(`//h3[text()='${product_needed}']`).isVisible();

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

// });



import {test, expect, Page} from '@playwright/test';
const { cpSync } = require('node:fs');
const {LognPge}= require('../pageobject/Lognpge'); //import classes from other/outside folder
const {DshbordPge}= require('../pageobject/Dshbordpge');
const {ChckotPge}= require('../pageobject/Chckotpge');
const testdata= require('../Utils/placePOlast.json'); //import testdata file

const dataset= JSON.parse(JSON.stringify(testdata)); //convert testdata [json] into javascript object



test.only("Login5",async({page})=>{
    // for(const data of dataset){
    // test.only(`Login5 ${data.product_needed}`, async({page})=>{
    //await page.goto('https://rahulshettyacademy.com/client/#/auth/login');  //hit the URL
    const lognPge= new LognPge(page);            //object creation
    const dshbordPge= new DshbordPge(page);
    const chckotPge= new ChckotPge(page);

    // const email='ssm@gmail.com';
    // const password='WelcomeBack@23';
    // const product_needed='ZARA COAT 3';

    await lognPge.Goto();                             //call method
    // await lognPge.validLogin(email, password);
    await lognPge.validLogin(dataset.email, dataset.password);
   

    //await dshbordPge.searchProductAddCart(product_needed);
    await dshbordPge.searchProductAddCart(dataset.product_needed);
    await dshbordPge.navigateToCart();

  const Bool=await page.locator(`//h3[text()='${dataset.product_needed}']`).isVisible();

        await dshbordPge.navigateToCart();                               //navigate to the cart
    //await page.pause();
    
   await chckotPge.verifyProductInCart();
    await chckotPge.proceedToCheckout();
    await chckotPge.selectCountry();
    await chckotPge.fillPaymentDetails("sarvesh", "ssm@gmail.com");
    await chckotPge.verifyThankYouMessage();

  await chckotPge.getOrderID();
//await chckotPge.verifyOrderInTable(orderID);
const orderId = await chckotPge.getOrderID();   // <-- capture returned value
await chckotPge.verifyOrderInTable(orderId);    // <-- pass it correctly

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
    
});