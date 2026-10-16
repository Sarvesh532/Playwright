import { Locator, Page } from '@playwright/test';

export class AmazonProductPage {

page:Page;
Addtocartbutton:Locator;

  constructor(page: Page) {

    this.page=page;
    this.Addtocartbutton=page.locator("//input[@id='add-to-cart-button']");


  }

  async addToCart() {
    await this.Addtocartbutton.click();
  }
}

module.exports={AmazonProductPage};