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
        await use(new HomePageHelper(page));
    },

    loginPagehelper: async ({ page }, use) => {
        await use(new LoginPageHelper(page));
    },

    signUpPagehelper: async ({ page }, use) => {
        await use(new SignupPageHelper(page));
    }
});