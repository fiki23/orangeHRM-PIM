const { Given, When, Then, DataTable } = require("@badeball/cypress-cucumber-preprocessor");
import {loginPage } from '../../pageObject/loginObject'

Given("I in the landing page", () => {
    cy.visit('/login');
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickSubmit()
})


