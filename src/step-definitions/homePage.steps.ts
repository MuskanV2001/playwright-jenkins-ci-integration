import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../hooks/browserSetup.ts';
import { HomePageHelper } from '../helpers/homePage.helper.ts';

const homePagehelper = new HomePageHelper(page);

Given("User is on the Home page", async() => {
    expect(await homePagehelper.verifyHomePage()).toBeTruthy();
});

When("User clicks on the Signup link in the top navigation bar", async() => {
    expect(await homePagehelper.clickSignUpLink()).toBeTruthy();
});
