

class loginClass {


    elements = {
        usernameInput: () => cy.get('[name="username"]'),
        passwordInput: () => cy.get('[name="password"]'),
        loginButton: () => cy.get('[type="submit"]'),
        forgotPassword: () => cy.get('[className= "oxd-text oxd-text--p orangehrm-login-forgot-header"]')
    }

    enterUsername(username) {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }

    clickSubmit() { 
        this.elements.loginButton().click();
    }


}
const loginPage = new loginClass();
export { loginPage };
