import { Page, Locator, expect } from '@playwright/test';
class ChckotPge {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator("text=Checkout");
        this.countryInput = page.locator("[placeholder='Select Country']");
        this.dropdown = page.locator(".ta-results");
        this.nameOnCard = page.locator("//div[text()='Name on Card ']//following-sibling::input");
        this.submitButton = page.locator(".action__submit");
        this.thankYouMessage = page.locator(".hero-primary");
        this.orderIdLabel = page.locator("//label[@class='ng-star-inserted']");
      //this.ordersButton = page.locator("button:has-text('ORDERS')");
      this.ordersButton = page.locator("//button[contains(text(),' ORDERS')]");
        this.ordersTable = page.locator("//tr[@class='ng-star-inserted']");
      }
    
    
      async verifyProductInCart() {
      // const productLocator = this.page.locator(`.cartSection:has-text("${product}")`);
      // await expect(productLocator).toBeVisible();
    const Bool = await this.page.locator("//h3[text()='ZARA COAT 3']").isVisible();
      console.log(Bool);
      await expect(Bool).toBe(true);
      }
    
      async proceedToCheckout(){
        await this.checkoutButton.click();
      }
    
    
      async selectCountry(country){
        // await this.countryInput.pressSequentially(country.substring(0, 2));
        // await this.dropdown.waitFor();
    
        // const options = this.dropdown.locator("button");
        // const count = await options.count();
    
        // for (let i = 0; i < count; i++) {
        //   const text = await options.nth(i).textContent();
        //   if (text?.trim() === country) {
        //     await options.nth(i).click();
        //     break;
        //   }
        // }
        await this.page.locator("[placeholder='Select Country']").pressSequentially('Ne');//to checkdropdown
       const dropdown=this.page.locator('.ta-results');
    await this.dropdown.waitFor();
      const options = this.dropdown.locator("button");
      const optionsCount = await options.count();
      console.log(optionsCount);
      for (let i=0; i<optionsCount; i++)
    {
        const text = await options.nth(i).textContent();
        console.log(text);
    
        if(text.trim()==='Nepal')///to remove space
        {
            await options.nth(i).click();
            break;
        }
    }
      }
    
      async fillPaymentDetails(name, emailid) {
        await this.nameOnCard.fill(name);
        await expect(this.page.locator(".user__name [type='text']").first()).toHaveText(emailid);
        await this.submitButton.click();

      }
    
      async verifyThankYouMessage() {
        await expect(this.thankYouMessage).toHaveText(" Thankyou for the order. ");
      }
    
      async getOrderID(){
        const orderID=( await this.orderIdLabel.textContent())
         ?.replace(/\|/g,'')
        .trim();
        console.log(orderID);
      //const orderId = await this.orderIdLabel.textContent();
      //return orderId?.replace(/\|/g, "").trim() || "";
      
      }
    
      async verifyOrderInTable(){
        await this.ordersButton.click();
        // const totalOrders = await this.ordersTable.count();
    
        // for (let i = 0; i < totalOrders; i++) {
        //   const tableOrderId = await this.ordersTable.nth(i).locator("//th[@scope='row']").textContent();
        //   if (tableOrderId?.trim() === orderId) {
        //     console.log("Order verified:", tableOrderId);
        //     break;
        //   }
        // }
        
const total_orders = await this.ordersTable.count();
console.log(total_orders);

for (let i=0; i<total_orders; i++){

  const table_data = await this.ordersTable.nth(i).locator('//th').textContent();
    console.log(table_data);

    if(table_data.trim()===orderID){

        console.log(orderID)
        break;

    }
}
      }
    }
    module.exports={ChckotPge};