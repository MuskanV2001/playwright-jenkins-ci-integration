import { Page } from 'playwright/test';
import { SignupPagePO } from '../pages/signupPage.po';

export class SignupPageHelper{

    private signUpPagepo: SignupPagePO;

    constructor(private page: Page){
        this.signUpPagepo = new SignupPagePO(page);
    }

    async verifySignUpPage(){
        try{
            await this.signUpPagepo.accountinfoheader.isVisible();
            await this.signUpPagepo.addressinfoheader.isVisible();
            console.log("Landed on SignUp page");
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

    async enterAccountInfoDetails(){
        try{
            await this.signUpPagepo.titleradiobtn.isVisible();
            await this.signUpPagepo.titleradiobtn.check();
            console.log("Clicked title - Mr. Radio button");
            await this.signUpPagepo.password.fill("alex123");
            console.log("Entered password");
            await this.signUpPagepo.dobday.selectOption('12');
            console.log("Selected day");
            await this.signUpPagepo.dobmonth.selectOption('December');
            console.log("Selected month");
            await this.signUpPagepo.dobyear.selectOption('2001');
            console.log("Selected Year");
            await this.signUpPagepo.newsletterradio.check();
            console.log("Checked newsletter");
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

    async enterAddressInfoDetails(){
        try{
            await this.signUpPagepo.firstname.fill("Alex");
            console.log("Entered firstname");
            await this.signUpPagepo.lastname.fill("David");
            console.log("Entered lastname");
            await this.signUpPagepo.company.fill("BlackRock");
            console.log("Entered Company");
            await this.signUpPagepo.address.fill("8345 New Street, Mumbai");
            console.log("Entered address");
            await this.signUpPagepo.country.selectOption('India');
            console.log("Entered country");
            await this.signUpPagepo.state.fill("Maharashtra");
            console.log("Entered State");
            await this.signUpPagepo.city.fill("Mumbai");
            console.log("Entered city");
            await this.signUpPagepo.zipcode.fill("410206");
            console.log("Entered zipcode");
            await this.signUpPagepo.mobileNumber.fill("9844282221");
            console.log("Entered mobile number");
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

    async clickCreateAccountBtn(){
        try{
            await this.signUpPagepo.createAccountbtn.isVisible();
            await this.signUpPagepo.createAccountbtn.click();
            console.log("Clicked Create account button");
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }
}