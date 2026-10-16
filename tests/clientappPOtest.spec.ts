import {test, expect, Page} from '@playwright/test';
//const {test, expect}= require('@playwright/test');
//const { cpSync } = require('node:fs');

import {LoginPage} from '../pageobject/Loginpage';                 //import classes from other/outside folder
import {DashboardPage} from '../pageobject/Dashboardpage';
import {CheckoutPage} from '../pageobject/Checkoutpage';

const testdata= require('../Utils/placeOrderTestData.json');            //import testdata file
const dataset= JSON.parse(JSON.stringify(testdata));                    //convert testdata[JSON] into java script object [string]


test.only("Login",async({page})=>{

    const loginPage= new LoginPage(page);                               //object creation
    const dashboardPage= new DashboardPage(page);                       
    const checkoutPage= new CheckoutPage(page);

    
    await loginPage.Goto();                                             //call method //hit the url
    await loginPage.validLogin(dataset.username, dataset.password);     //login with username & password
    await page.pause();

    await dashboardPage.searchProductAddCart(dataset.product);          //search for product from testdata & add to cart      
    await dashboardPage.navigateToCart();                               //navigate to the cart
    await page.pause();
    
    await checkoutPage.verifyProductInCart();
    await checkoutPage.proceedToCheckout();
    await checkoutPage.selectCountry();
    await checkoutPage.fillPaymentDetails("sarvesh", "ssm@gmail.com");
    await checkoutPage.verifyThankYouMessage();

  //await checkoutPage.getOrderID();
//await checkoutPage.verifyOrderInTable(orderID);
const orderId = await checkoutPage.getOrderID();   // <-- capture returned value
await checkoutPage.verifyOrderInTable(orderId);    // <-- pass it correctly
});