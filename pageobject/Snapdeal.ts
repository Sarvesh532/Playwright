import { Page, expect, Locator } from "@playwright/test";

export class Snapdeal{
    page: Page;
    mensfashionmenu: Locator;
    shirtsLink: Locator;
    product: Locator;

constructor(page: Page){
    this.page= page;
    this.mensfashionmenu= page.locator("//div[@id='tab-category-0']");
    this.shirtsLink= page.getByText('Shirts', { exact: true });
    this.product= page.locator("div.product-tuple-description");
}

async goto(){
    await this.page.goto('https://www.snapdeal.com/');
}

async HoverMensFashion(){
  await this.mensfashionmenu.hover();
  await this.page.waitForTimeout(3000);
}

async clickShirts(){
    await this.shirtsLink.click();

    await expect(this.page).toHaveURL('https://www.snapdeal.com/products/men-apparel-shirts');

    await expect(this.page.locator("//h1[contains(text(),'Shirts For Men')]")).toBeVisible();
} 

async selectProduct(prod_needed: string){
    const prod = this.product;
  const count = await prod.count();
  

  for (let i=0; i<count; i++){
     
    const prod_n = await prod.nth(i).locator('p.product-title').textContent();
    console.log(prod_n);

    
     if(prod_needed==prod_n){
     
        await prod.nth(i).locator("p.product-title").click();
        break;

    }


  }
}
}