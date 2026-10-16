import { test, expect } from '@playwright/test';

test('Handle new tabbed window', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://demo.automationtesting.in/Windows.html');

  // Wait for new tab when clicking the button
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),              // wait for new tab
    page.locator("//a[@target='_blank']//button[contains(text(),'click')]").click() // action that opens new tab
  ]);

  await page.pause();

  // Interact with the new tab
  await newPage.waitForLoadState();
  console.log('New tab title:', await newPage.title());

  // Assert something on the new tab
  await expect(newPage).toHaveTitle("Selenium");

  // Switch back to original tab
  await expect(page).toHaveTitle("Frames & windows");
  console.log('page title:', await page.title());
});


test.only('Handle new separate window', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://demo.automationtesting.in/Windows.html');

  await page.locator("//a[contains(text(),'Open New Seperate Windows')]").click();

  // Wait for new window when clicking the button
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),              // wait for new window
    page.locator("button[onclick='newwindow()']").click() // action that opens new window
  ]);

  await page.pause();

  // Interact with the new window
  //await newPage.waitForLoadState();
  console.log('New window title:', await newPage.title());

  // Assert something on the new window
  await expect(newPage).toHaveTitle("Selenium");

  // Switch back to original window
  await expect(page).toHaveTitle("Frames & windows");
  console.log('previous window title:', await page.title());
});