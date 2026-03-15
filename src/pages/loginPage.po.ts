import { Locator, Page } from '@playwright/test';

export class LoginPagePO{

    readonly newusersignupheader: Locator;
    readonly newusername: Locator;
    readonly newuseremail: Locator;
    readonly signupbutton: Locator;

    constructor(private page: Page){
        this.newusersignupheader = page.locator("//h2[contains(text(),'New User Signup')]");
        this.newusername = page.locator("//input[@placeholder='Name']");
        this.newuseremail = page.locator("//input[@data-qa='signup-email']");
        this.signupbutton = page.locator("//button[@data-qa='signup-button']")
    }
}