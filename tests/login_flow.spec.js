const { test, expect } = require('@playwright/test');

test('Login and verify iPhone product', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('#password').fill('Learning@830$3mK2');

  await page.locator('#terms').check();
  await page.locator("[name='signin']").click();

  await page.waitForURL(/.*dashboard.*/i);
  await expect(page.locator('.card-body')).toContainText('iPhone');
});
