import { createBdd } from "playwright-bdd";
import { expect } from '@playwright/test';
import { test } from "../fixtures/appFixtures";

const { Given, When, Then } = createBdd(test);

Given("User is on the Home page", async({homePagehelper}) => {
    expect(await homePagehelper.verifyHomePage()).toBeTruthy();
});

When("User clicks on the Signup link in the top navigation bar", async({homePagehelper}) => {
    expect(await homePagehelper.clickSignUpLink()).toBeTruthy();
});
