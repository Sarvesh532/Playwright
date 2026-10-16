const {test, expect} = require ('@playwright/test');  //importing the function from playwright

const { text } = require('node:stream/consumers');
const { resolveTripleslashReference } = require('typescript');

test('Browser Context Playwrights', async({browser})=>{
   const context= await browser.newContext();  //open the context with browser
   const page= await context.newPage();       ////open the page with context
   await page.goto('https://www.google.com');
})


test('Page Playwrights', async({page})=>{
    await page.goto('https://www.google.com');
    console.log(await page.title());  //print the page title
    await expect(page).toHaveTitle('Google');  //validate the title
})

test('Logins', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('Sarvesh');
    await page.locator('#password').fill('Moundekar');
    await page.locator('[name="signin"]').click();


    const errormessage= page.locator('//div[contains(@style,"block")]');
    console.log(await (errormessage).textContent());
    await expect(errormessage).toContainText('Incorrect');
    
})

test('Automation', async({page})=>{
    await page.goto('https://practicetestautomation.com/practise-test-login/');
    console.log(await page.title());
    const username= page.locator('#username');
    const password= page.locator('#password');
    const signin= page.locator('#submit');
    const home=page.locator("//a[contains (text(), 'Home')]");
    
    
    await username.fill('student');
    await password.fill('password');
    await signin.click();

    console.log(await page.title());
    //await expect(page).toHaveTitle('Logged In Successfully|Practise Test Automation');
    await expect(home).toBeVisible();
    
})


test('Proto', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator('[name="signin"]').click();
    // const signin= page.locator('#submit');
    const cardTitles=page.locator('.card-body a');
    const protocommerce=page.locator("//a[text()='ProtoCommerce']");
    await expect(protocommerce).toBeVisible();
    // console.log(await cardTitles.nth(2).textContent());
    // console.log(await cardTitles.first().textContent());
    // console.log(await cardTitles.last().textContent());
    //const title= await cardTitles.first().textContent();
    await cardTitles.first().waitFor();
    const title= await cardTitles.allTextContents();
    console.log(title);
        
})



test('Dropdown and Radiobutton', async({page})=>{
    const username= page.locator('#username');
    const password= page.locator('#password');
    const signin=page.locator('[name="signin"]');
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await username.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    //await signin.click();
    // await page.waitForLoadState('networkidle');
    // const cardTitles=page.locator('.card-body a');
    // const title= await cardTitles.allTextContents();
    // console.log(title);
    const dropdown=page.locator('select.form-control');
    await dropdown.selectOption('teach');
    await page.pause();
    const radiobtn=page.locator('.radiotextsty').last();
    await radiobtn.click();
    await page.locator('#okayBtn').click();
    await expect(radiobtn).toBeChecked();
    const status= await radiobtn.isChecked();
    console.log(status);
    const checkbox=page.locator('#terms');
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    await expect(await checkbox.isChecked()).toBeFalsy();
    const blink= page.locator("//a[contains(text(),'Free Access to InterviewQues/ResumeAssistance/Material')]");
    //await expect(blink).toHaveAttribute('class','blinkingText123');
    await expect(blink).toHaveAttribute('class','blinkingText');
    await blink.click();
           
})


test('Browser Context Playwright blink', async({browser})=>{
   const context= await browser.newContext();  //open the context with browser
   const page= await context.newPage();       ////open the page with context
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   const blink= page.locator("//a[contains(text(),'Free Access to InterviewQues/ResumeAssistance/Material')]")
   await expect(blink).toHaveAttribute('class','blinkingText');
   await blink.click();
//    const message= page.locator('.im-para red').textContent();
//    await expect(message).toBeVisible();
//   const [newPage]= await Promise.all([context.waitForEvent('page'),blink.click()]);
//    const message= await newPage.locator('.im-para.red').textContent();
   const [newPage] = await Promise.all([context.waitForEvent('page'),blink.click()])//    console.log(message);
   const message= newPage.locator('.im-para.red');
   await expect(message).toBeVisible();
   const text= await message.textContent();
   console.log(text);
   //console.log(message);
   //const msg=await text.split("@");
//    const msg=await text.split("@")[1].split(" ")[0];
//    console.log(msg);
//    await page.pause();
//    const username= page.locator('#username');
//    await username.fill(msg);
// //    const password= page.locator('#password')
// //    await password.fill('sarvesh123');
//    //console.log("inputValue" + await username.textContent());
//    console.log("inputValue" + await username.inputValue());

   const msg=await text.split("@")[1].split(" ")[0];
   console.log("this is the msg value--" +msg);
   await page.pause();
   const username= page.locator('#username');
   await username.fill(msg);
   const value = await username.inputValue();
   console.log("this is the only value--" +value);
   await expect(msg).toBe(value);
})

test('logintest4',async({page})=>{
    await page.pause();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const newPage = await page.context().newPage();
})

test.only('logintest3',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('reshma.kawade@gmail.com');
    await page.pause();
    await page.locator('#userPassword').fill('Reshma@123');
    await page.locator('#login').click();
    const product = page.locator('.card-body');
    const count = await product.count();
    const product_needed='ZARA COAT 3';
    for (let i=0; i<count; i++){

        const product_name = await product.nth(i).locator('b').textContent();
        console.log(product_name);

       if(product_needed==product_name){

        await product.nth(i).locator("//button[contains(text(),'Add To Cart')]").click();
        break;

       }
    }

await page.locator("[routerlink*='cart']").click();

const bool = await page.locator("//h3[text()='ZARA COAT 3']").isVisible();
console.log(bool);
await expect(bool).toBe(true);

await page.locator("//button[text()='Checkout']").click();

await page.locator("//div[starts-with(text(),'Name on Card ')]//following-sibling::input").fill("Reshma");
await page.locator("[placeholder='Select Country']").pressSequentially('IND');

const dropdown = page.locator(".ta-results");
await dropdown.waitFor();
const options = await dropdown.locator("button");
const optionsCount = await (options).count();
console.log(optionsCount);
for (let i=0; i<optionsCount; i++)
{
  const text = await options.nth(i).textContent();
  console.log(text);

if(text.trim()==='India')

    {
        await options.nth(i).click();
        break;
    }
}


const emailid = 'reshma.kawade@gmail.com';
const email = await page.locator("//label[contains(text(),'reshma.kawade@gmail.com')]//following-sibling::input");
await email.fill(emailid);

await expect(page.locator(".user__name [type='text']").first()).toHaveText(emailid);

await page.locator("//a[text()='Place Order ']").click();

await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

const orderID = (await page.locator("//label[@class='ng-star-inserted']").textContent())
?.replace(/\|/g,'')
.trim();
console.log(orderID);

const orderLink = page.locator("//button[contains(text(),' ORDERS')]");
await orderLink.click();

const your_order = await page.locator("//tr[@class='ng-star-inserted']");
const total_orders = await your_order.count();
console.log(total_orders);

for (let i=0; i<total_orders; i++){

    const table_data = await your_order.nth(i).locator('//th').textContent();
    console.log(table_data);

    if(table_data.trim()===orderID){

        console.log(orderID)
        break;

    }
}

})


