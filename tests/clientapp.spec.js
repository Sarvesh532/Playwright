const {test, expect}= require('@playwright/test');

test('Login page', async({page})=>{
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

const username= page.locator('#username');
 const pwd=page.locator('#password');
const signin=page.locator("[name='signin']");

 await username.fill('rahulshettyacademy');
 await pwd.fill('Learning@830$3mK2');
 await signin.click();

 await page.waitForLoadState('networkidle');


 const cardtitle =page .locator('.card-body a');
 const title= await cardtitle.allTextContents();

 console.log(title);

});

test('Multi Elements handling', async({page})=>
{

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

const username=page.locator('#username');
const password=page.locator('#password');
const singin=page.locator("[name='signin']");

// await username.fill('rahulshettyacademy'); //ID
// await password.fill('Learning@830$3mK2');   //Class
// await singin.click();

//await page.waitForLoadState('networkidle');
// await page.waitForLoadState('networkidle');

// const Card_title=page.locator('.card-body a');
// const titles=await Card_title.allTextContents();
// console.log(titles);

const dropdown=page.locator('select.form-control');

await dropdown.selectOption('consult');

await page.pause(); //debug


const radiobutton=page.locator('.radiotextsty').last();

await radiobutton.click();

//getByRole('button', { name: 'Okay' })

await page.locator('#okayBtn').click();


});


test('Multiple Elements handling', async({page})=>
{

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

const username=page.locator('#username');
const password=page.locator('#password');
const singin=page.locator("[name='signin']");
const checkbox=page.locator("#terms");


// await username.fill('rahulshettyacademy'); //ID
// await password.fill('Learning@830$3mK2');   //Class
// await singin.click();

//await page.waitForLoadState('networkidle');
// await page.waitForLoadState('networkidle');

// const Card_title=page.locator('.card-body a');
// const titles=await Card_title.allTextContents();
// console.log(titles);

const dropdown=page.locator('select.form-control');

await dropdown.selectOption('consult');

//await page.pause(); //debug

const radiobutton=page.locator('.radiotextsty').last();

// await radiobutton.click();
//getByRole('button', { name: 'Okay' })
// await page.locator('#okayBtn').click();
// await expect(radiobutton).toBeChecked();

//const status= await radiobutton.isChecked();
//console.log(status);
await page.pause();
//await checkbox.click();
//await checkbox.check();
// await expect(checkbox).toBeChecked();
// await checkbox.uncheck();
//await expect(await checkbox.isChecked()).toBeFalsy();
await expect(await checkbox.isChecked()).toBe(false);

});



test('Multiple Elements handlingss', async({page})=>
{

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

const username=page.locator('#username');
const password=page.locator('#password');
const singin=page.locator("[name='signin']");
const checkbox=page.locator("#terms");


// await username.fill('rahulshettyacademy'); //ID
// await password.fill('Learning@830$3mK2');   //Class
// await singin.click();

//await page.waitForLoadState('networkidle');
// await page.waitForLoadState('networkidle');

// const Card_title=page.locator('.card-body a');
// const titles=await Card_title.allTextContents();
// console.log(titles);

const dropdown=page.locator('select.form-control');

await dropdown.selectOption('consult');

//await page.pause(); //debug

const radiobutton=page.locator('.radiotextsty').last();
const link=page.locator("//a[contains(text(),'Free Access to InterviewQues/ResumeAssistance/Mate')]");
// await radiobutton.click();
// //getByRole('button', { name: 'Okay' })
// await page.locator('#okayBtn').click();
// await expect(radiobutton).toBeChecked();

//const status= await radiobutton.isChecked();
//console.log(status);
await page.pause();
//await checkbox.click();
await checkbox.check();
await expect(checkbox).toBeChecked();
// await checkbox.uncheck();
//await expect(await checkbox.isChecked()).toBeFalsy();
//await expect(await checkbox.isChecked()).toBe(false);
await expect(link).toHaveAttribute('class','blinkingText');
await link.click();


});



//const { flushCompileCache } = require('node:module');

test('Browser Context Playwright', async ({browser})=>{
const context = await browser.newContext();
const page=await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
await page.pause();

const link = page.locator("//a[contains(text(),'Free Access to InterviewQues/ResumeAssistance/Mate')]");
//context.waitForEvent('page');

await expect(link).toHaveAttribute('class','blinkingText'); // to verify the attribute value
//await link.click(); // to click on the link
const [newPage]= await Promise.all([
    context.waitForEvent('page'),
    link.click()]);


    const message = await newPage.locator('.im-para.red').textContent();
    console.log(message);
    //await expect (message).toBeVisible();
});



test('Dropdown and radiobutton test', async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');
    const dropDown = page.locator('select.form-control');
    await dropDown.selectOption('consult');
    //await page.pause();

    // const radioButton = page.locator('.radiotextsty').last();
    // await radioButton.click();
    // await page.locator('#okayBtn').click();
    // await expect(radioButton).toBeChecked();
    // const status = await radioButton.isChecked();
    // console.log(status);
     await page.pause();

    //const checkBox = page.locator('#terms');
    //await checkBox.click(); //method to check the check box
   // await checkBox.check(); // alternative method to check the checkbox
   // await expect(checkBox).toBeChecked();
   // await checkBox.uncheck();
   // await expect(await checkBox.isChecked()).toBeFalsy(); // asserssion to check if the checkbox is checked or not

    //await expect(await checkBox.isChecked()).toBe(false);// This will pass if the checkbox is unchecked and we always need to use await for boolean condition 
    //await expect(await checkBox.isChecked()).toBe(true); // This will fail if the checkbox is unchecked and we always need to use await for boolean condition 
    

    // Code to verify blinking link
    const link = page.locator("//a[contains(text(),'Free Access to InterviewQues/ResumeAssistance/Mate')]");
    await expect(link).toHaveAttribute('class','blinkingText'); // to verify the attribute value
    await link.click(); // to click on the link

    const message = page.locator('.im-para.red');
    await expect (message).toBeVisible();
});


test('browser context playwright', async({browser})=>{
const context = await browser.newContext();
const page=await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
await page.pause();
const link=page.locator("//a[contains(text(),'Free Access to InterviewQues/ResumeAssistance/Material')]");

await expect(link).toHaveAttribute('class', 'blinkingText');

const [newPage]=await Promise.all
([context.waitForEvent('page'),
link.click()]);
const message=newPage.locator('.im-para.red');
await expect(message).toBeVisible();
const text=await message.textContent();
console.log(text);
//console.log(message);
const domain=await text.split('@')[1].split(" ")[0];
console.log(domain);

const username=page.locator('#username');
await username.fill(domain);

const password=page.locator('#password');
await password.fill('sarvesh123');

});


test.only('browser context playwrightss', async({browser})=>{
const context = await browser.newContext();
const page=await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
await page.pause();
const link=page.locator("//a[contains(text(),'Free Access to InterviewQues/ResumeAssistance/Material')]");

await expect(link).toHaveAttribute('class', 'blinkingText');

const [newPage]=await Promise.all
([context.waitForEvent('page'),
link.click()]);
const message=newPage.locator('.im-para.red');
await expect(message).toBeVisible();
const text=await message.textContent();
console.log(text);
//console.log(message);
const domain=await text.split('@')[0].split(" ")[1];
console.log("this is the domain value-- "+ domain);

const username=page.locator('#username');
await username.fill(domain);
const value=await username.inputValue();
console.log("this is the only value-- "+ value);

await expect(domain).toBe(value);

//const password=page.locator('#password');
//await password.fill('sarvesh123');

});





