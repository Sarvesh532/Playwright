import { test, expect } from '@playwright/test';

test('Handle JavaScript alert', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');

  // Listen for the alert dialog
  page.once('dialog', async dialog => {
    console.log('Alert message:', dialog.message()); // prints "I am an alert box!"
    await dialog.accept(); // clicks OK
  });

  // Trigger the alert
  await page.locator("button[onclick='alertbox()']").click();

  await page.pause(); 

  // Optional: Assert something after alert is handled
  await expect(page).toHaveTitle(/Alerts/i);
});


test('Handle Confirm Alert', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');

  // Listen for the confirm dialog
  page.once('dialog', async dialog => {
    console.log('Confirm message:', dialog.message()); // prints "Press a Button!"
    await dialog.dismiss(); // clicks Cancel (use accept() for OK)
  });

  await page.locator("//a[contains(text(),'Alert with OK & Cancel')]").click();

  await page.pause(); 

  // Trigger the confirm alert
  await page.locator("button[onclick='confirmbox()']").click();

  // Assert the result text after pressing Cancel
  await expect(page.locator('#demo')).toHaveText('You Pressed Cancel');
});


test.only('Handle Prompt Alert', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');

  // Listen for the prompt dialog
  page.once('dialog', async dialog => {
    console.log('Prompt message:', dialog.message()); // prints "Please enter your name"
    await dialog.accept('Sarvesh'); // types "Sarvesh" and clicks OK
  });

  await page.locator("//a[contains(text(),'Alert with Textbox')]").click();

  await page.pause(); 

  // Trigger the prompt alert
  await page.locator("button[onclick='promptbox()']").click();

  // Assert the result text after entering name
  await expect(page.locator('#demo1')).toHaveText('Hello Sarvesh How are you today');
});