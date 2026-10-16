import { test, expect } from '@playwright/test';

test('Handle Single Iframe', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');

  // Locate the iframe
  const frame = page.frameLocator("//iframe[@id='singleframe']");

  await page.pause();

  // Interact with the input box inside the iframe
  await frame.locator("//input[@type='text']").fill('Sarvesh');

  // Assert the value inside the iframe input
  await expect(frame.locator("input[type='text']")).toHaveValue('Sarvesh');
});


test.only('Handle nested iframe', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');

  await page.locator("//a[text()='Iframe with in an Iframe'][@data-toggle='tab']").click();

  await page.pause();

  // Locate the outer iframe
  const outerFrame = page.frameLocator('[src="MultipleFrames.html"]');

  // Locate the inner iframe inside the outer iframe
  const innerFrame = outerFrame.frameLocator('[src="SingleFrame.html"]');

  // Interact with the input box inside the inner iframe
  await innerFrame.locator('input[type="text"]').fill('Sarvesh');

  // Assert the value inside the nested iframe input
  await expect(innerFrame.locator('input[type="text"]')).toHaveValue('Sarvesh');
});