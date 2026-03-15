import { Page } from 'playwright/test';
import { HomePagePO } from '../pages/homePage.po';

export class HomePageHelper{

    private homePagepo: HomePagePO;

    constructor(private page: Page){
        this.homePagepo = new HomePagePO(page);
    }

     async verifyHomePage(){
        try{
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

    async clickSignUpLink(){
        try{
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }
    
}