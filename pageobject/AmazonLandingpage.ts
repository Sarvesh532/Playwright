import { Locator, Page, Expect } from '@playwright/test';


export class AmazonLandingPage {

page:Page;


  constructor(page: Page) {

   this.page=page;
  
  }


  async Goto(){
      await this.page.goto('https://www.amazon.com/');
  }
}

module.exports={AmazonLandingPage};