let LoginPage = require('../page_objects/LoginPage.js');
let HeaderPage = require('../page_objects/HeaderPage.js');

describe('Login, negative, admin', function(){
    it('Login, negative: username- invalid, password - valid, admin', async function(){
        let loginPage = new LoginPage();
        let headerPage = new HeaderPage();

        await allure.createStep('Open main page', 
        () => loginPage.get() )();
        await allure.createStep('Login', 
        () => loginPage.login("persevalif@gmail.com","N<f&nx39V"))();
        
        await loginPage.getNoteError().wait();
        await headerPage.createScreenShotAllure();
        expect(loginPage.getNoteError().getText()).toEqual('Login and (or) password not correct');
       
       
    }) 
})
