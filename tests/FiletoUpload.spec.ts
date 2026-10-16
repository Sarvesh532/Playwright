import { test, expect } from '@playwright/test';

test('File upload demo', async ({ page }) => {
  // Navigate to the file upload test page
  await page.goto('https://automationtesting.co.uk/fileupload.html');

  // Locate the file input and upload a sample file
  const fileInput = page.locator("//input[@id='fileToUpload']");
  await page.pause();
  await fileInput.setInputFiles('tests/data/Gmail - Invitation for HCLTech Nagpur Walk-In Drive __ 8 August 2026.pdf');

  // Click the Submit button
  await page.locator("//input[@name='submit']").click();

  // Assert that the file name appears in the input field
  await expect(fileInput).toHaveValue(/Gmail - Invitation for HCLTech Nagpur Walk-In Drive __ 8 August 2026.pdf/);
});