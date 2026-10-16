// import {test, expect} from '@playwright/test';

// test('Goibibo flights', async ({page})=>{
//     await page.goto("https://www.goibibo.com/flights/?utm_source=google&utm_medium=cpc&utm_campaign=DF-Brand-EM&utm_adgroup=Goibibo-Flight&utm_term=!SEM!DF!G!Brand!RSA&cmp=SEM|D|DF|G|Google-CPC-Brand|DF-Brand-EM|Goibibo-Flight|RSA%3e&gad_source=1&gad_campaignid=108599293&gbraid=0AAAAADrlxCe4ODrM3JWTvv88eVX-4AC62&gclid=CjwKCAjwyuDTBhB-EiwANCQhLMs4t9mMf2up_79g6z0tQe-I0xPEiMgFlFjA2uFRM0KCiHOk4t-IlRoCOcIQAvD_BwE");
//     await page.locator("//span[@class='logSprite icClose']").click();

//     await page.locator("//label[@for='fromCity']").click();
//     //await page.locator("//label[@for='fromCity']").fill("Pune");
//     await page.locator("//label[@for='fromCity']").pressSequentially('Pun');
//     await page.locator("//p[contains(text(),'Pune Airport')]").click();
// await page.pause();
//     await page.locator("//label[@for='toCity']").click();
//     //await page.locator("//label[@for='toCity']").fill("Mumbai");
//     await page.locator("//label[@for='toCity']").pressSequentially("Mum");
//     await page.locator("//span[contains(text(),'Mumbai, India')]").click();

//     // const dept=await page.locator("//label[@for='departure']");
//     // await dept.click();
//     // //await dept.waitFor();
//     // await expect(dept).toBeVisible();
//     // const nextmonth=await page.locator("//span[contains(@class,'DayPicker-NavButton--next')]")
//     // await nextmonth.click();
//     // //const datepick=await page.locator("//div[@class='DayPicker-Months']");
//     // //await datepick.waitFor();
//     // await expect(nextmonth).toBeVisible();
//     // const month= await nextmonth.locator("//div[text()='Sep 2026']");
//     // await expect(month).toBeVisible();
//     // //await page.locator("//div[text()='Sep 2026']").scrollIntoViewIfNeeded();
//     // await page.locator("//div[@aria-label='Wed Sep 02 2026']").click();

//   // await page.locator("//label[@for='departure']").click();
//   // await expect(page.locator("//div[@class='DayPicker-Months']")).toBeVisible();

//   const targetDay = "Wed";
//   const targetMonth = "Sep";
//   const targetYear = "2026";
//   const targetDate = "2";

//   // Loop until the correct month/year is visible
//   while (true) {
//     const monthYear = page.locator(
//   `(//div[contains(@class,'DayPicker-Month')])[2]//*[text()='${targetDate}']`
// );
// await monthYear.click();
//     //if (monthYear?.includes(`${targetMonth} ${targetYear}`)) {
//       break;
//     }

//     //await page.locator("//span[contains(@class,'DayPicker-NavButton--next')]").click();
//   }

//   // Click the target day once month/year is visible
//  //await page.locator(`//div[contains(@aria-label,'${targetDay} ${targetMonth} ${targetYear} ${targetDate}')]`).click();

// // await page.locator("//label[@for='departure']").click();
// // await expect(page.locator("//div[@class='DayPicker-Months']")).toBeVisible();

// // const targetDay = "Wed";
// // const targetMonth = "Sep";
// // const targetYear = "2026";
// // const targetMon = "September";
// // const targetDate = "2";

// // let attempts = 0;
// // const maxAttempts = 12; // prevent infinite loop

// // while (attempts < maxAttempts) {
// //   const monthYear = await page.locator("//div[contains(@class,'DayPicker-Caption')]").textContent();

// //   if (monthYear?.includes(`${targetMon} ${targetYear}`)) {
// //     break;
// //   }

// //   await page.locator("//span[contains(@class,'DayPicker-NavButton--next')]").click();
// //   attempts++;
// // }

// // if (attempts === maxAttempts) {
// //   throw new Error(`Target month/year ${targetMonth} ${targetYear} not found`);
// // }

// // // Click the target date
// // await page.locator(`//div[contains(@aria-label,'${targetDay} ${targetMonth} ${targetDate} ${targetYear}')]`).click();
    
// //     // const trcl=await page.locator("//label[@for='travellers']");
// //     // const tr=await trcl.click();
// //     // //await trcl.waitFor();
// //     // await expect(trcl).toBeVisible();
// //     // await page.locator("//li[@data-cy='adults-3'][text()='3']").click();

// //     // await page.locator("//button[text()='APPLY']").click();
    
// //     // await page.locator("//a[text()='Search']").click();
//     })
// )


import { test, expect } from '@playwright/test';

test('Goibibo flights', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(
        "https://www.goibibo.com/flights/?utm_source=google&utm_medium=cpc&utm_campaign=DF-Brand-EM&utm_adgroup=Goibibo-Flight&utm_term=!SEM!DF!G!Brand!RSA"
    );

    await page.pause();

    // Close popup if it is displayed
    // await page.locator('.logSprite').click();

    const closeButton = page.locator("//span[@class='logSprite icClose']");

    if (await closeButton.isVisible()) {
        await closeButton.click();
    }

    

    // From city
    await page.locator("//label[@for='fromCity']").click();
    await page.locator("//label[@for='fromCity']").pressSequentially("Pun");
    await page.locator("//p[contains(text(),'Pune Airport')]").click();
    

    // To city
    await page.locator("//label[@for='toCity']").click();
    await page.locator("//label[@for='toCity']").pressSequentially("Mum");
    await page.locator("//span[contains(text(),'Mumbai, India')]").click();

    // Open departure calendar
    const departure = page.locator("//label[@for='departure']");
    await departure.click();

    await expect(
        page.locator("//div[contains(@class,'DayPicker-Months')]")
    ).toBeVisible();

    // Target date
    // const targetDay = "Wed";
    // const targetMonth = "Sep";
    // const targetYear = "2026";
    // const targetDate = "02";
    // await page.pause();

    await page.locator("//span[@class='DayPicker-NavButton DayPicker-NavButton--next']").click();
    
    // Target date
    const targetDay = "Wed";
    const targetMonth = "Oct";
    const targetYear = "2026";
    const targetDate = "21";
    await page.pause();

    // Click 2 September 2026
    const targetDateLocator = page.locator(
        `//div[@aria-label='${targetDay} ${targetMonth} ${targetDate} ${targetYear}']`
    );

    await expect(targetDateLocator).toBeVisible();
    await targetDateLocator.click();

    const offer = page.locator("//div[contains(text(),'Offers For You')]");
    await expect(offer).toBeVisible();
    const off=await offer.textContent();
    const ofr=await off.split("For ")[1];
    console.log(ofr);

    // open travveller & class dropdown
    const trcl=await page.locator("//label[@for='travellers']");
    const tr=await trcl.click();
    //await trcl.waitFor();
    await expect(
      page.locator("//div[contains(@class,'fltTravellers gbTravellers')]")
    ).toBeVisible();
    await page.locator("//li[@data-cy='adults-3'][text()='3']").click();

    await page.locator("//button[text()='APPLY']").click();
    await page.locator("//a[text()='Search']").click();

    await page.waitForTimeout(5000);

    await page.waitForLoadState('networkidle');

    await expect(page.locator("//li//child::span[contains(text(),'Flights')]")
  ).toBeVisible();

//       const chkbx= await page.locator("//p[contains(text(),' Non Stop   ')]");
//       await chkbx.check();
//       await expect(chkbx).toBeChecked();

//       await expect(page.locator("//p[contains(text(),'SpiceJet')]//following-sibling::p[text()='SG 9731']")
// ).toBeVisible();

// await expect(page.locator("//div[@class='blackText fontSize18 blackFont white-space-no-wrap clusterViewPrice']//span[contains(text(),'₹ 5,034')]")
// ).toBeVisible();




});