import { Page } from 'playwright/test';
import { HomePagePO } from '../pages/homePage.po';

export class HomePageHelper{

    private homePagepo: HomePagePO;

    constructor(private page: Page){
        this.page = page;
        this.homePagepo = new HomePagePO(page);
    }

    async gotoHomePage(){
        await this.page.goto("https://automationexercise.com/");
    }

    async verifyHomePage(){
        try{
            await this.homePagepo.homeNavOption.isVisible();
            await this.homePagepo.signUpOption.isVisible();
            console.log("Landed on Home Page")
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

    async clickSignUpLink(){
        try{
            await this.homePagepo.signUpOption.click();
            console.log("Clicked Signup")
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }
    
}