import { Page } from '@playwright/test';
import { LoginPagePO } from '../pages/loginPage.po';

export class LoginPageHelper{

    private loginPagepo: LoginPagePO;

    constructor(private page: Page){
        this.loginPagepo = new LoginPagePO(page);
    }

    async verifyLoginPage(){
        try{
            await this.loginPagepo.newusersignupheader.isVisible();
            console.log("Landed on login Page");
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

    async enterNameSignUp(){
       try{
            await this.loginPagepo.newusername.isVisible();
            await this.loginPagepo.newusername.fill("Alex");
            console.log("Entered New User Name");
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        } 
    }

    async enterEmailSignUp(){
        try{
            await this.loginPagepo.newuseremail.isVisible();
            await this.loginPagepo.newuseremail.fill("alex01@gmail.com")
            console.log("Entered New User Email");
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

    async clickSignUpButton(){
        try{
            await this.loginPagepo.signupbutton.isEnabled();
            await this.loginPagepo.signupbutton.click();
            console.log("Clicked SignUp button");
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }
}