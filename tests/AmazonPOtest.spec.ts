import { test, Page, expect } from '@playwright/test';
import { AmazonLandingPage } from '../pageobject/AmazonLandingpage';
import { AmazonHomePage } from '../pageobject/AmazonHomepage';
import { AmazonProductPage } from '../pageobject/AmazonProductpage';
import { AmazonCartPage } from '../pageobject/AmazonCartpage';

test.only('Amazon shopping', async ({ page }) => {
  const loginPage = new AmazonLandingPage(page);
  const homePage = new AmazonHomePage(page);
  const productPage = new AmazonProductPage(page);
  const cartPage = new AmazonCartPage(page);

const testdata= require('../Utils/placeOrderTest.json');            //import testdata file
const dataset= JSON.parse(JSON.stringify(testdata));

  // Login
  await loginPage.Goto();

  // Search and select product
  await homePage.searchProduct(dataset.productName);
  await homePage.selectFirstProduct();

  // Add to cart
  await productPage.addToCart();

  // Checkout
  await cartPage.gotoCart();
  await cartPage.proceedToCheckout();

  // Verify checkout page
  //await expect(page).toHaveURL(/checkout/);
});