class LognPge{

    constructor(page){
        this.page=page;
        this.emailid=page.locator('//input[@id="userEmail"]');
        this.pass=page.locator('//input[@id="userPassword"]');
        this.login=page.locator('//input[@id="login"]');
    }

    async validLogin(email, password){

        await this.emailid.fill(email);
        await this.pass.fill(password); 
        await this.login.click();                                         //click to "login"
        await this.page.locator('.card-body b').first().waitFor();

    }   

    async Goto(){

        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }

}

module.exports={LognPge};