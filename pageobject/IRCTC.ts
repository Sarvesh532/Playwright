import {Page, Locator, Expect} from '@playwright/test';
export class IRCTC{

    page: Page;
    monthYear: Locator;
    calender: Locator;

    constructor(page:Page){

        this.page=page;
        
        this.calender= page.locator('//p-calendar[@id="jDate"]');

    }

async selectDate(mm: string, dd: string, yyyy: string){
    const jorurneyDate = await this.page.locator().textContent();
}    

selectDate ("June","2026","30");
async selectDate(targetMonth: string, targetYear: string, targetDay: string) {

    while (true) {

        const monthYear = await this.page.locator(".react-calendar_navigation_label").textContent();

        if (monthYear?.includes(`${targetMonth} ${targetYear}`)) {
            break;
        }

        await this.page.locator("button[aria-label='Next Month']").click();
    }

    await this.page.locator(`text='${targetDay}'`).click();
}