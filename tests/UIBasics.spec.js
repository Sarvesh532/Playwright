const {test, expect}= require('@playwright/test');  //Import Playwright Test
const { sign } = require('node:crypto');


test('Browser Context Playwright', async ({browser})=>{  //test defines individual test cases
const context = await browser.newContext(); //browser.newContext() gives you an isolated environment (like a fresh incognito window).
const page=await context.newPage();
await page.goto('https://www.google.com/');
});



test('Page Playwright test',async ({page})=>{  // Each test gets fixtures like { page } injected automatically, so you don’t need to create a browser instance manually
// const context = await browser.newContext();
// const page=await context.newPage();
await page.goto('https://www.google.com/');
console.log(await page.title()); //console.log(await page.title()); is useful for debugging, but in real tests you’ll rely on assertions (expect) to validate behavior
await expect(page).toHaveTitle('Google');   //toHaveTitle('Google') checks for an exact match & expect provides assertions (like checking titles, text content, element visibility).
});




test('logintest',async({page})=>{ //test-Playwright function;logintest-Test description;async()=>{}-Function to write code
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
 await page.locator('#username').fill('Sarvesh');
 await page.locator('#password').fill('Moundekar');
 await page.locator('[name="signin"]').click();


 const errormessage=page.locator("//div[contains(@style,'block')]");

 console.log(await errormessage.textContent());

 await expect(errormessage).toContainText('Incorrect'); //Use expect to add assertions so your test actually validates something
//await expect(errormessage).toContainText('Correct');
//await expect(errormessage).toHaveText('Incorrect username/password');
//await expect(errormessage).toBeVisible('Incorrect username/password');
});

test('logintest2', async({page})=> {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    console.log(await page.title());
    //await page.pause();

    const username=page.locator('#username');
    const password=page.locator('#password');
    const signin=page.locator('#submit');
    const home=page.locator("//a[contains (text(), 'Home')]");

    await username.fill('student');
    await password.fill('Password123');
    await signin.click();


    console.log(await page.title());

    await expect(home).toBeVisible();

//const errormessage=page.locator("//div[contains(@style, 'block')]");
//console.log(await errormessage.textContent());
//await except(errormessage).toHaveText('');

});

test('logintest3', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator("[name='signin']").click();
    //const errormessage=page.locator("//div[contains(@style,'block')]");
    //console.log(await errormessage.textContent());
    //await page.locator("//a[text()='ProtoCommerce']").toBeVisible();
    const protocommerce=await page.locator("//a[text()='ProtoCommerce']");
    await expect(protocommerce).toBeVisible();
    console.log(await page.locator('.card-body a').nth(2).textContent());
    console.log(await page.locator('.card-body a').first().textContent());
    console.log(await page.locator('.card-body a').last().textContent());


});

test.only('logintest4', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator("[name='signin']").click();
     await page.pause();
    const cardTitles = page.locator('.card-body a');
    //const errormessage=page.locator("//div[contains(@style,'block')]");
    //console.log(await errormessage.textContent());
    //await page.locator("//a[text()='ProtoCommerce']").toBeVisible();
    const protocommerce=await page.locator("//a[text()='ProtoCommerce']");
    //await expect(protocommerce).toBeVisible();
    //console.log(await page.locator('.card-body a').nth(2).textContent());
    //console.log(await page.locator('.card-body a').first().textContent());
    //console.log(await page.locator('.card-body a').last().textContent());
    //await cardTitles.first().waitFor();
    await expect(cardTitles.first()).toBeVisible();
    const title=await cardTitles.allTextContents();
    console.log(title);

});