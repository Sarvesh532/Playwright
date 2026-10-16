import { test, expect } from '@playwright/test';

test('Instant file download', async ({ page }) => {
  await page.goto('https://testkru.com/Elements/Files');

  // Wait for download event when clicking "Download Now"
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator("//a[contains(text(),'Download Now')]").click()
  ]);
  await page.pause();

  // Save the file locally
  await download.saveAs('downloads/plant_image.jpg');

  // Print file path for debugging
  console.log(await download.path());
});