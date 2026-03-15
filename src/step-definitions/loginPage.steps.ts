import { createBdd } from 'playwright-bdd';
import { expect } from "@playwright/test";
import { test } from '../fixtures/appFixtures';


const { Given, When, Then } = createBdd(test);

Given("User is navigated to the Login page", async({loginPagehelper}) => {
    expect(await loginPagehelper.verifyLoginPage()).toBeTruthy();
});

Given("User enters Name under New User SignUp", async({loginPagehelper}) => {
    expect(await loginPagehelper.enterNameSignUp()).toBeTruthy();
});

Given("User enters Email Address under New User SignUp", async({loginPagehelper}) => {
    expect(await loginPagehelper.enterEmailSignUp()).toBeTruthy();
});

Given("User clicks on SignUp button", async({loginPagehelper}) =>{
    expect(await loginPagehelper.clickSignUpButton()).toBeTruthy();
});