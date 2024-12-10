const { Given, When, Then, DataTable } = require("@badeball/cypress-cucumber-preprocessor");
import { pimPage } from '../../pageObject/pimObject'

When("I delete the new Employee", () => {
    pimPage.deleteEmployee();
})

Then("deleted Employee will not appear in list", () => {
    pimPage.validateDeletedEmployee();
})
