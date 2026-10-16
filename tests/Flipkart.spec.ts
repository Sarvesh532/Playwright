import { test, expect } from '@playwright/test';

test('Flipkart Apple 256GB filter results', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');

    // Close login popup if it appears
 await page.locator("//span[@class='b3wTlE']").click();

  await page.locator("(//input[@name='q'])[1]").fill('mobile 5g');

   await page.pause();

    // Press Enter to search
  await page.keyboard.press('Enter');
//   await page.locator('//button[@title="Search for Products, Brands and More"][@type="submit"]');

  // Apply brand filter: Apple
  await page.locator("//div[text()='Apple']").click();

  await page.locator("//div[text()='Internal Storage']").click();
  await expect(page.locator("//div[text()='256 GB & Above']")).toBeVisible();

  // Apply internal storage filter: 256 GB & Above
  await page.locator("//div[text()='256 GB & Above']").click();

  // Wait for results to load
  await page.waitForLoadState('networkidle');

  // Validate that results page shows "mobiles"
  await expect(page).toHaveURL("https://www.flipkart.com/search?q=mobile+5g&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.brand%255B%255D%3DApple&p%5B%5D=facets.internal_storage%255B%255D%3D256%2BGB%2B%2526%2BAbove");

  // Assert that product titles are visible
  const products = page.locator("div.RG5Slk"); // Flipkart product title selector
  await expect(products.first()).toBeVisible();

  const count = await products.count();
  console.log(`Found ${count} products`);

  for (let i = 0; i < count; i++) {
    const title = await products.nth(i).textContent();
    console.log(title);

    // Assert brand contains Apple
    expect(title).toContain('Apple');

    // Assert storage contains 256 GB or higher
    expect(title).toMatch(/256 GB|512 GB|1 TB/);
  }
});