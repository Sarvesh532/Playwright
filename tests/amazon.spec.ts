import { test, expect } from '@playwright/test';

test('Amazon shopping', async ({ page }) => {
  // Navigate to Amazon
  await page.goto('https://www.amazon.com/');
  await page.pause();

  // Search for product
  await page.locator('#twotabsearchtextbox').fill('Samsung Laptop');
  await page.locator('#nav-search-submit-button').click();

  // Select first product (example locator, adjust as needed)
//   await page.locator("(//h2[contains(@class,'a-size-mini')])[1]").click();
  await page.getByRole('link', { name: 'Galaxy Book4 2024 Business' }).click();

  // Add to List
  await page.locator("//a[text()=' Add to List ']").click();


});
