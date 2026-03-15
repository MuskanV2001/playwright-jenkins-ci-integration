import {test as basetest} from 'playwright-bdd';

import { HomePageHelper } from '../helpers/homePage.helper';
import { LoginPageHelper } from '../helpers/loginPage.helper';
import { SignupPageHelper } from '../helpers/signupPage.helper';

type AppFixtures = {
    homePagehelper: HomePageHelper;
    loginPagehelper: LoginPageHelper;
    signUpPagehelper: SignupPageHelper;
}

export const test = basetest.extend<AppFixtures>({
    
    homePagehelper: async ({ page }, use) => {
        console.log("Launching the application..");
        const homePagehlp = new HomePageHelper(page);
        await use(homePagehlp);
        await homePagehlp.gotoHomePage();
    },

    loginPagehelper: async ({ page }, use) => {
        await use(new LoginPageHelper(page));
    },

    signUpPagehelper: async ({ page }, use) => {
        await use(new SignupPageHelper(page));
    }
});