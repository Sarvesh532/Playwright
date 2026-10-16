
import {Page, Locator, expect} from '@playwright/test'
export class DshbrdPge{

    page: Page;
    product : Locator;
    cart : Locator;

    constructor(page){

        this.page=page;
        this.product= page.locator('.card-body');
        this.cart= page.locator("[routerlink*='cart']");

    }

    async searchProductAddCart(product_needed){

        const count = await this.product.count();
        console.log(count);
        //const product_needed= 'ZARA COAT 3';

        for(let i=0; i<count; i++)
        {

            const product_name =await this.product.nth(i).locator('b').textContent();
            //const product_name =await product.nth(i).locator("xpath=.//b").textContent();
            console.log(product_name);

            if(product_name===product_needed)
            {
                await this.product.nth(i).locator("//button[contains(text(), 'Add To Cart')]").click();
                break;

            }
        
        }
    
    }
      async navigateToCart(){
        
         await this.cart.click();
    
      }
    }
