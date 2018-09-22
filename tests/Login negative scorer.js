let LoginPage = require('../page_objects/LoginPage.js');
let HeaderPage = require('../page_objects/HeaderPage.js');

describe('Login, negative, scorer', function(){
    it('Login, negative: username - valid, password - invalid, scorer', async function(){
        let loginPage = new LoginPage();
        let headerPage = new HeaderPage();
        
        
        await allure.createStep('Open main page', () => loginPage.get() )();
        
        await loginPage.getloginButton().wait()
        await allure.createStep('Click  "LOGIN" button', () => loginPage.getloginButton().click() )();
        await allure.createStep('Enter "Email" field', () => loginPage.getemail().sendKeys("persevalif+scorer@gmail.com") )();
        await allure.createStep('Enter "Password" field', () => loginPage.getuserPassword().sendKeys("456545") )();
        await headerPage.createScreenShotAllure();
        expect(loginPage.getsignInButton().isEnabled()).toBe(false);
        //expect(element(by.css('button.login-button')).isEnabled()).toBe(true);
    }) 
})
