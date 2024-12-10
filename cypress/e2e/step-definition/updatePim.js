const { Given, When, Then, DataTable } = require("@badeball/cypress-cucumber-preprocessor");
import { pimPage } from '../../pageObject/pimObject'

When("I update Employee information", () => {
    pimPage.editEmployee();
})

Then("Employee information updated", () => {
    pimPage.validateEditedEmployee();
})
