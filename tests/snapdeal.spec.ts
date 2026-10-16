import { test, expect } from '@playwright/test';

test('Hover and click Shirts', async ({ page }) => {
  await page.goto('https://www.snapdeal.com/');
  await page.pause();

  // Hover over "Men's Fashion"
  await page.locator("//div[@id='tab-category-0']").hover();
  await page.waitForTimeout(3000);

  // Click on "Shirts"
  await page.getByText('Shirts', { exact: true }).click();
//   await expect(page.locator("//div[text()='Shirts']")).toBeVisible();
//   await (page.locator("//div[text()='Shirts']")).click();
//   await page.pause();

  // Assert navigation
  //await expect(page).toHaveURL(/shirts/i);
  await expect(page).toHaveURL('https://www.snapdeal.com/products/men-apparel-shirts');

  await expect(page.locator("//h1[contains(text(),'Shirts For Men')]")).toBeVisible();

  const prod = page.locator("div.product-tuple-description");
  const count = await prod.count();
  const prod_needed = "TOUGHTEES Cotton Blend Regular Fit Striped Half Sleeves Men's Casual Shirt - Beige ( Pack of 1 )";

  for (let i=0; i<count; i++){
     
    const prod_n = await prod.nth(i).locator('p.product-title').textContent();
    console.log(prod_n);

    // if(prod_needed==prod_n?.trim()){
     if(prod_needed==prod_n){
     
        await prod.nth(i).locator("p.product-title").click();
        break;

    }


  }
});


// import { test, expect } from '@playwright/test';

// test('Hover and click Shirts under Men\'s Fashion', async ({ page }) => {
//   await page.goto('https://www.snapdeal.com/', { waitUntil: 'domcontentloaded' });

//   // 1. Hover over "Men's Fashion" using standard Playwright text matching
//   const mensFashionCategory = page.locator('span.catText', { hasText: "Men's Fashion" });
//   await mensFashionCategory.hover();

//   // 2. Click the specific "Shirts" link inside the category flyout menu
//   const shirtsLink = page.locator('div.catTopNav').getByRole('link', { name: 'Shirts', exact: true }).first();
  
//   await expect(shirtsLink).toBeVisible();
//   await shirtsLink.click();

//   // 3. Assert navigation to the correct URL
//   await expect(page).toHaveURL(/shirts/i);
// });