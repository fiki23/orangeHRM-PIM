
class pimClass {

    elements = {

        //add employee
        pimModul: () => cy.get("a[href='/web/index.php/pim/viewPimModule']"),
        addEmpButton: () => cy.get('button[type="button"].oxd-button.oxd-button--secondary'),
        empImage: () => cy.get('input[type="file"]'),
        firstName: () => cy.get('input[name="firstName"]', { force: true }),
        lastName: () => cy.get('input[name="lastName"]'),
        empId: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input'),
        createLoginDetails: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[2]/div/label/span'),
        createUsername: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div[1]/div/div[2]/input'),
        createPassword: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[1]/div/div[2]/input'),
        rePassword: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[2]/div/div[2]/input'),
        accountStatus: () => cy.get('input[type="radio"][value="1"]'),
        saveBtn: () => cy.get('button[type="submit"]'),
        //PIM Menu
        empList: () => cy.get('a', 'Employee List'),
        recordslist: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/span'),
        searchEmpName: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input'),
        searchEmpId: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/input'),
        searchBtn: () => cy.get('button[type="submit"]'),
        resultId: () => cy.get('.oxd-table-body .oxd-table-row')
            .first()
            .find('.oxd-table-cell.oxd-padding-cell')
            .eq(1),
        resultName: () => cy.get('.oxd-table-body .oxd-table-row')
            .first()
            .find('.oxd-table-cell.oxd-padding-cell')
            .eq(2),
        editBtn: () => cy.get('.oxd-table-body .oxd-table-row')
            .first()
            .find('button.oxd-icon-button.oxd-table-cell-action-space')
            .first(),
        dltBtn: () => cy.get('.oxd-table-body .oxd-table-row')
            .first()
            .find('button.oxd-icon-button.oxd-table-cell-action-space')
            .last(),
        dltWarning: () => cy.xpath('//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]'),
        //Personal details
        editFirstName: () => cy.get('input[name="firstName"]'),
        editLastName: () => cy.get('input[name="lastName"]'),
        editEmpId: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[1]/div/div[2]/input'),
        //Contact details
        contactDetails: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[1]/div[2]/div[2]/a'),
        mobile: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div/div[2]/div/div[2]'),
        save: () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/button')
    }



    addNewEmployee() {
        cy.fixture('userData.json').then((user) => {
            this.elements.pimModul().click()
            this.elements.addEmpButton().click()
            // cy.wait(5000)
            // this.elements.empImage().click().selectFile('cypress/fixtures/images/renature.jpg');
            // cy.wait(5000)
            this.elements.firstName().type(user.firstname)
            this.elements.lastName().type(user.lastname)
            this.elements.empId().clear().type(user.EmployeeID)
            this.elements.createLoginDetails().click()
            this.elements.createUsername().type(user.usernameNew)
            this.elements.createPassword().type(user.passwordNew)
            this.elements.rePassword().type(user.passwordNew)
            this.elements.accountStatus().should('be.checked')
            this.elements.saveBtn().click()
            cy.wait(5000)
        })
    }


    validateNewEmployee() {
        cy.fixture('userData.json').then((user) => {
            this.elements.pimModul().click()
            this.elements.searchEmpId().type(user.EmployeeID)
            cy.wait(5000)
            this.elements.searchBtn().click()
            this.elements.resultId()
                .invoke('text')
                .then((actualId) => {
                    expect(actualId.trim()).to.eq(user.EmployeeID)
                })
            this.elements.resultName()
                .invoke('text')
                .then((actualName) => {
                    expect(actualName.trim()).to.eq(user.firstname);

                })

        })
    }

    editEmployee() {
        cy.fixture('userData.json').then((user) => {
            this.validateNewEmployee()
            this.elements.editBtn().click()
            this.elements.editFirstName().clear().type(user.firstnamenew)
            this.elements.editEmpId().clear().type(user.EmployeeIDnew)
            this.elements.save().click()
            cy.wait(5000)
            this.elements.contactDetails().click()
            this.elements.mobile().type(user.mobilephone)
            this.elements.save().click()
            cy.wait(5000)

        })
    }
    validateEditedEmployee() {
        cy.fixture('userData.json').then((user) => {
            this.elements.pimModul().click()
            this.elements.searchEmpId().type(user.EmployeeIDnew)
            cy.wait(5000)
            this.elements.searchBtn().click()
            this.elements.resultId()
                .invoke('text')
                .then((actualId) => {
                    expect(actualId.trim()).to.eq(user.EmployeeIDnew)
                })
            this.elements.resultName()
                .invoke('text')
                .then((actualName) => {
                    expect(actualName.trim()).to.eq(user.firstnamenew);

                })
        })
    }


    deleteEmployee() {
        this.validateEditedEmployee()
        this.elements.dltBtn().click()
        this.elements.dltWarning().click()
        cy.wait(5000)
    }

    validateDeletedEmployee() {
        cy.fixture('userData.json').then((user) => {
            this.elements.pimModul().click()
            this.elements.searchEmpId().type(user.EmployeeIDnew)
            cy.wait(5000)
            this.elements.searchBtn().click()
            this.elements.recordslist()
                .invoke('text')
                .then((actualRecords) => {
                    expect(actualRecords.trim()).to.eq('No Records Found');
                })
        })
    }
}




const pimPage = new pimClass();
export { pimPage };

