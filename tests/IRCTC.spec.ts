import { test, expect } from '@playwright/test';

test('IRCTC ticket booking form automation', async ({ page }) => {
  await page.goto('https://www.irctc.co.in/nget/train-search');

  await page.locator("//button[text()='English']").click();

  // Fill "From" station
  await page.locator('//input[@aria-label="Enter From station. Input is Mandatory."]').pressSequentially('Nagp');
  //await page.keyboard.press('Enter');
  await page.locator("//span[contains(text(),' NAGPUR - NGP ')]").click();


  // Fill "To" station
  await page.locator('//input[@aria-label="Enter To station. Input is Mandatory."]').pressSequentially('p');
//   await page.keyboard.press('Enter');
  await page.locator("//span[contains(text(),' PUNE JN - PUNE ')]").click();

  // Select Date
  const datepicker = await page.locator("//input[@class='ng-tns-c69-9 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted']");
  await datepicker.fill('17-09-2026')
  await datepicker.click();

  // Select Class (e.g., AC 3 Tier (3A))
//   await page.locator("select[formcontrolname='classCode']").selectOption({ label: 'Sleeper (SL)' });
  await page.locator("//div[@class='ng-tns-c76-10 ui-dropdown ui-widget ui-state-default ui-corner-all']").click();
  await expect(page.locator("//span[contains(text(),'AC 3 Tier (3A)')]")).toBeVisible();
  await page.locator("//span[contains(text(),'AC 3 Tier (3A)')]").click();

  // Select Quota (e.g., General)
//   await page.locator("select[formcontrolname='quotaCode']").selectOption({ label: 'GENERAL' });
  await page.locator('//div[@class="ng-tns-c76-11 ui-dropdown ui-widget ui-state-default ui-corner-all"]').click();
  await expect(page.locator("//ul//child::span[text()='GENERAL']")).toBeVisible();
  await page.locator("//ul//child::span[text()='GENERAL']").click();


   // Optional checkboxes
  //await page.locator("label:has-text('Flexible With Date')").click();
   await page.locator("//label[contains(text(),'Flexible With Date')]").click();
//   await page.locator("label:has-text('Person With Disability Concession')").click();

  // Click Search Trains
//   await page.locator("button:has-text('Search Trains')").click();
  await page.locator("//button[contains(text(),' Search Trains ')]").click();

  // Wait for train results to load
//   await page.waitForLoadState('networkidle');
  await expect(page).toHaveTitle('IRCTC – Official Indian Railway Catering & Tourism Corporation Portal');
  await expect(page.locator('//button[@class="active btnDefault"]')).toBeVisible();

  // Validate that train list is visible
//   await expect(page.locator("div.train_avl_enq_box")).toBeVisible();
  await expect(page.locator("//div[@class='col-xs-12 trains-div reduced-width']")).toBeVisible();
});

