import { Page } from 'playwright/test';
import { SignupPagePO } from '../pages/signupPage.po';

export class SignupPageHelper{

    private signUpPagepo: SignupPagePO;

    constructor(private page: Page){
        this.signUpPagepo = new SignupPagePO(page);
    }

    async verifySignUpPage(){
        try{
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

    async enterAccountInfoDetails(){
        try{
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

    async enterAddressInfoDetails(){
        try{
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

    async clickCreateAccountBtn(){
        try{
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }
}