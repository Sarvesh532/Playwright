import {Page,Locator} from '@playwright/test'  //importing Playwright types for strong typing

export class LoginPage
{
    page:Page;
    email:Locator;
    password:Locator; //Declares class properties with types
    constructor(page:Page)  //Initializes the page and locators when you create a new instance
    {
        this.page=page;
        this.email=page.locator("#email");  //Finds the email input field
        this.password=page.locator("#password");  //Finds the password input field

    }

}