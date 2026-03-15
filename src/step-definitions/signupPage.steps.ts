import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../hooks/browserSetup.ts';
import { SignupPageHelper } from '../helpers/signupPage.helper.ts';

const signUpPagehelper = new SignupPageHelper(page);

Given("User is navigated to the SignUp page", async() => {
    expect(await signUpPagehelper.verifySignUpPage()).toBeTruthy();
});

Given("User enters the Acccount information details", async() => {
    expect(await signUpPagehelper.enterAccountInfoDetails()).toBeTruthy();
});

Given("User enters Address information details", async() => {
    expect(await signUpPagehelper.enterAddressInfoDetails()).toBeTruthy();
});

Given("User clicks createAccount button", async() => {
    expect(await signUpPagehelper.clickCreateAccountBtn()).toBeTruthy();
});
