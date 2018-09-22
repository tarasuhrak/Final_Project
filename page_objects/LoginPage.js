let WebButton = require('../WebControl/web.button');
let WebField = require('../WebControl/web.field');


let open = 'http://eds_university.eleks.com/login';
let loginButton = 'button.login-button';
let email = 'email';
let userPassword= 'userPassword';
let signInButton= '.iframe-wrap .login-button';

let noteError = 'span.toast-message';
let NoteErrorTitle = 'div.toast-title';

class LoginPage{
    constructor(){browser.waitForAngularEnabled(false)}

    getloginButton() {
        return new WebButton(element(by.css(loginButton)),'Login Button');
    }

    getemail() {
        return new WebField(element(by.id(email)), 'Email field');
    }

    getuserPassword() {
        return new WebField(element(by.id(userPassword)), 'Password field');
    }

    getsignInButton() {
        return new WebButton(element(by.css(signInButton)),'Sign in button');
    }
    
    getNoteError(){
        return new WebField(element(by.css(noteError)),'Error about you sign in');
    }
    getNoteErrorTitle(){
        return new WebField(element(by.css(NoteErrorTitle)),'Error title about you sign in');
    }

    async get() {
        await browser.get(open);
    }

    async login(email,password) {
        await allure.createStep('Click on the "LOGIN" button', () => this.getloginButton().click() )();
        await allure.createStep('Enter data in the "Email" field', () => this.getemail().sendKeys(email) )();
        await allure.createStep('Enter data in the "Password" field', () => this.getuserPassword().sendKeys(password) )();
        await allure.createStep('Click on the "SIGN IN" button', () => this.getsignInButton().click() )();

    }
    

}

module.exports = LoginPage;