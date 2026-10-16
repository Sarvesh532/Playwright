import { Locator, Page } from '@playwright/test';

export class AmazonCartPage {

    page:Page;
    cart:Locator;
    checkout:Locator;

  constructor(page: Page) {

    this.page=page;
    this.cart=page.locator("(//a[@class='a-button-text'])[3]");
    this.checkout=page.locator("//input[@name='proceedToRetailCheckout']");

  }

  async gotoCart() {
    await this.cart.click();
  }

  async proceedToCheckout() {
    await this.checkout.click();
  }
}

module.exports={AmazonCartPage};