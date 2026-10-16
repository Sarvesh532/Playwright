import {Page, Locator, Expect} from '@playwright/test';

 export class LoginPage{

    page:Page;
    email:Locator;
    password:Locator;
    login: Locator;

    constructor(page:Page){

        this.page= page;
        this.email= page.locator('//input[@id="userEmail"]');      //this keyword is used to access current class-object email-locator
        this.password=page.locator('//input[@id="userPassword"]');      //passowrd-locator
        this.login=page.locator('//input[@id="login"]');             //login locator


    }

    async validLogin(emailid:string, pass:string){

        await this.email.fill(emailid);                                     //enter email(emailid)
        await this.password.fill(pass);                                  //enter password
        await this.login.click();                                            //click to "login"
        await this.page.locator('.card-body b').first().waitFor();
        
    }

    async Goto(){
     await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login'); 
    }

 }

 
//module.exports={LoginPage}; --to make class public