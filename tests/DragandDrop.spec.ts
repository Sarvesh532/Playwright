import { test, expect } from '@playwright/test';

test('Handle static drag and drop', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Static.html');

  // Locate the draggable element (e.g., Selenium logo)
  const source = page.locator('#angular'); // adjust selector based on actual element ID

  // Locate the drop target (e.g., gray container)
  const target = page.locator('#droparea'); // adjust selector based on actual drop area ID

  await page.pause();

  // Perform drag and drop
  await source.dragTo(target);

  // Optional: Assert that the element is now inside the drop area
  await expect(target.locator('#angular')).toBeVisible();
});


//import { test, expect } from '@playwright/test';

test.only('Handle dynamic drag and drop', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Dynamic.html');

  // Locate draggable elements
  const source1 = page.locator('#angular');   // Angular logo
  const source2 = page.locator('#mongo');     // MongoDB logo
  const source3 = page.locator('#node');      // NodeJS logo

  // Locate the drop target
  const target = page.locator('#droparea');

  await page.pause();

  // Perform drag and drop for each logo
  await source1.dragTo(target);
  await source2.dragTo(target);
  await source3.dragTo(target);

  // Assert that items are now inside the drop area
  await expect(target.locator('#angular')).toBeVisible();
  await expect(target.locator('#mongo')).toBeVisible();
  await expect(target.locator('#node')).toBeVisible();
});
