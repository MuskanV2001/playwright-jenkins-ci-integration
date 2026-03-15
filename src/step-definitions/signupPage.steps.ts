import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures/appFixtures';

const { Given, When, Then } = createBdd(test);


Given("User is navigated to the SignUp page", async({signUpPagehelper}) => {
    expect(await signUpPagehelper.verifySignUpPage()).toBeTruthy();
});

Given("User enters the Acccount information details", async({signUpPagehelper}) => {
    expect(await signUpPagehelper.enterAccountInfoDetails()).toBeTruthy();
});

Given("User enters Address information details", async({signUpPagehelper}) => {
    expect(await signUpPagehelper.enterAddressInfoDetails()).toBeTruthy();
});

Given("User clicks createAccount button", async({signUpPagehelper}) => {
    expect(await signUpPagehelper.clickCreateAccountBtn()).toBeTruthy();
});
