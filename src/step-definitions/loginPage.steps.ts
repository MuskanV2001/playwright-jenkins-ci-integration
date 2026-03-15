import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from '../hooks/browserSetup.ts';
import { LoginPageHelper } from '../helpers/loginPage.helper.ts';

const loginPagehelper = new LoginPageHelper(page);

Given("User is navigated to the Login page", async() => {

});

Given("User enters Name under New User SignUp", async() => {

});

Given("User enters Email Address under New User SignUp", async() => {

});

Given("User clicks on SignUp button", async() =>{

});