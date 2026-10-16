import { Locator, Page } from '@playwright/test';

export class AmazonHomePage {

page:Page;
searchtextbox:Locator;
searchbutton:Locator;
selectproduct:Locator;

  constructor(page: Page) {

    this.page=page;
    this.searchtextbox=page.locator("//input[@id='twotabsearchtextbox']");
    this.searchbutton=page.locator("//input[@id='nav-search-submit-button']");
    this.selectproduct=page.locator("(//h2[@aria-label='Sponsored Ad - Samsung 15.6” Galaxy Book5 360 Copilot AI Laptop PC Computer, FHD AMOLED Touchscreen, 16GB / 512GB, Dolby Atmos Quad Speakers, All-Day Battery Life, NP750QHA-KA1US'])[1]");

  }

  async searchProduct(productName: string) {
    await this.searchtextbox.fill(productName);
    await this.searchbutton.click();
  }

  async selectFirstProduct() {
    await this.selectproduct.click();
  }
}

module.exports={AmazonHomePage};