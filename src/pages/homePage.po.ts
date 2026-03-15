import { Locator, Page } from '@playwright/test';

export class HomePagePO{

    readonly homeNavOption: Locator;
    readonly signUpOption: Locator;

    constructor(private page: Page){
        this.homeNavOption = page.locator("//a[contains(text(),' Home')]");
        this.signUpOption = page.locator("//a[@href='/login']");
    }    
   
}