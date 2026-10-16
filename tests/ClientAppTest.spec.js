import { test, expect } from '@playwright/test';

test('logintest1', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('Sarvesh');
    await page.locator('#password').fill('Moundekar');
    await page.locator('[name="signin"]').click();
    await page.pause();

    const products= page.locator("//div[@class='card-body']");
    const count= await products.count();
    const productNeeded= 'ZARA COAT 3';

    for(let i=0; i<count; i++)
    {
       const productName= products.nth(i).locator("//div[@class='card-body']//child::b").textContent(); //locator chaining
       if(productName===productNeeded)
       {
        await products.nth(i).locator("//button[contains(text(),' Add To Cart')]").click();
       }
    }

});




test('Login1',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    const email= page.locator('//input[@id="userEmail"]');
    const password=page.locator('//input[@id="userPassword"]');
    const login=page.locator('//input[@id="login"]');

    await email.fill('ssm@gmail.com');
    await password.fill('WelcomeBack@23');
    await login.click();
    await page.locator('.card-body b').first().waitFor();
    await page.pause();

    const product= page.locator('.card-body');
    const count = await product.count();
    console.log(count);
    const product_needed= 'ZARA COAT 3';

    for(let i=0; i<count; i++)
    {

        const product_name =await product.nth(i).locator('b').textContent();
        //const product_name =await product.nth(i).locator("xpath=.//b").textContent();
       console.log(product_name);

        if(product_name===product_needed)
        {
            await product.nth(i).locator("//button[contains(text(), 'Add To Cart')]").click();
            break;
        }
        await page.pause();
    }
    await page.locator("[routerlink*='cart']").click();
    //const Bool=await page.locator("//h3[text()='ZARA COAT 3']").isVisible();
    const Bool=await page.locator(`//h3[text()='${product_needed}']`).isVisible();

    expect(Bool).toBe(true);



});


test('Login2',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    const email= page.locator('//input[@id="userEmail"]');
    const password=page.locator('//input[@id="userPassword"]');
    const login=page.locator('//input[@id="login"]');

    await email.fill('ssm@gmail.com');
    await password.fill('WelcomeBack@23');
    await login.click();
    await page.locator('.card-body b').first().waitFor();
    await page.pause();

    const product= page.locator("//div[@class='card-body']");
    const count = await product.count();
    const product_needed= 'ZARA COAT 3';

    for(let i=0; i<count; i++)
    {

        const product_name =await product.nth(i).locator('b').textContent();
        //const product_name =await product.nth(i).locator("xpath=.//b").textContent();
       console.log(product_name);

        if(product_name===product_needed)
        {
            await product.nth(i).locator("//button[contains(text(), 'Add To Cart')]").click();
            break;
        }
        await page.pause();
    }
    await page.locator("[routerlink*='cart']").click();
    //const Bool=await page.locator("//h3[text()='ZARA COAT 3']").isVisible();
    const Bool=await page.locator(`//h3[text()='${product_needed}']`).isVisible();

    expect(Bool).toBe(true);
   await page.locator("//*[text()='Checkout']").click();
   await page.locator("[placeholder='Select Country']").pressSequentially('India');//to checkdropdown
   await page.locator("//div[text()='Name on Card ']//following-sibling::input").fill('sarvesh');
await page.locator('.ta-results').waitFor();//wait untilsuggestion
 

});

test.only('Login',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const emailid= 'ssm@gmail.com';
    const email= page.locator('//input[@id="userEmail"]');
    const password=page.locator('//input[@id="userPassword"]');
    const login=page.locator('//input[@id="login"]');

    await email.fill(emailid);
    await password.fill('WelcomeBack@23');
    await login.click();
    await page.locator('.card-body b').first().waitFor();
    await page.pause();
    

    const product= page.locator("//div[@class='card-body']");
    const count = await product.count();
    const product_needed= 'ZARA COAT 3';

    for(let i=0; i<count; i++)
    {

        const product_name =await product.nth(i).locator('b').textContent();
        //const product_name =await product.nth(i).locator("xpath=.//b").textContent();
       console.log(product_name);

        if(product_name===product_needed)
        {
            await product.nth(i).locator("//button[contains(text(), 'Add To Cart')]").click();
            break;
        }
        
    }
    await page.locator("[routerlink*='cart']").click();
    //const Bool=await page.locator("//h3[text()='ZARA COAT 3']").isVisible();
    const Bool=await page.locator(`//h3[text()='${product_needed}']`).isVisible();

    expect(Bool).toBe(true);
   await page.locator("//*[text()='Checkout']").click();
   await page.locator("[placeholder='Select Country']").pressSequentially('Ne');//to checkdropdown
   
   const dropdown=page.locator('.ta-results');

//await page.locator('.ta-results').waitFor();//wait untilsuggestion
await dropdown.waitFor();
  const options = dropdown.locator("button");
  const optionsCount = await options.count();
  console.log(optionsCount);
  for (let i=0; i<optionsCount; i++)
{
    const text = await options.nth(i).textContent();
    console.log(text);

    if(text.trim()==='Nepal')///to remove space
    {
        await options.nth(i).click();
        break;
    }
}
await page.locator("//div[text()='Name on Card ']//following-sibling::input").fill('sarvesh');
await expect (page.locator(".user__name [type='text']").first()).toHaveText(emailid);

await page.locator(".action__submit").click();
await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');


const order_Id = await page.locator("//label[@class='ng-star-inserted']").textContent(); //store order_Id

const cleanedOrderId = order_Id?.replace(/\|/g, '').trim(); // to make order_Id without whitespace & pipe
console.log(cleanedOrderId); //to print order_Id 

// console.log(order_Id);

const order = await page.locator("//button[contains(text(),'ORDERS')]")
await order.click();

const your_order = await page.locator("//tr[@class='ng-star-inserted']"); //highlighted 1 by 1 row from your_order table
const total_orders = await your_order.count();
console.log(total_orders);

for(let i=0; i<total_orders; i++)
{
const table_orderId = await your_order.nth(i).locator("//th[@scope='row']").textContent(); //store order_Id from your_order table 
//console.log(table_orderId);

if(table_orderId===cleanedOrderId)
        {
            
            console.log(table_orderId)
            console.log(cleanedOrderId);


            break;

        }
    }

});