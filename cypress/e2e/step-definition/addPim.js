const { Given, When, Then, DataTable } = require("@badeball/cypress-cucumber-preprocessor");
import { pimPage } from '../../pageObject/pimObject'

When("I add new Employee", () => {
    pimPage.addNewEmployee();
})

Then("Employee should appear in list", () => {
    pimPage.validateNewEmployee();
})
