import { Page } from '@playwright/test';
import { LoginPagePO } from '../pages/loginPage.po';

export class LoginPageHelper{

    private loginPagepo: LoginPagePO;

    constructor(private page: Page){
        this.loginPagepo = new LoginPagePO(page);
    }

    async verifyLoginPage(){
        try{
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

    async enterNameSignUp(){
       try{
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        } 
    }

    async enterEmailSignUp(){
        try{
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

    async clickSignUpButton(){
        try{
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }
}