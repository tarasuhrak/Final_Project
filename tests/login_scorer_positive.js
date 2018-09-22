let LoginPage = require('../page_objects/LoginPage.js');
let HeaderPage = require('../page_objects/HeaderPage.js');

describe('Login, positive, scorer', function(){
    it('Login, positive, scorer', async function(){
        let loginPage = new LoginPage();
        let headerPage = new HeaderPage();
       
        await allure.createStep('Open page', () => loginPage.get() )();
        
        await loginPage.getloginButton().wait()
        await allure.createStep('Login', () => loginPage.login("persevalif+scorer@gmail.com","#*tBk6-QAF4"))();
        
        await headerPage.getUser_name().wait();
        //await browser.wait(protractor.ExpectedConditions.visibilityOf(headerPage.getUser_status()),15000)

        let name = await headerPage.getUser_name().getText();
        let user_status = await headerPage.getUser_status().getText();

        await headerPage.createScreenShotAllure();
        expect(name).toEqual('Taras Uhrak');
        expect(user_status).toEqual('Scorer');
        console.log("User Name - " + name);
        console.log("User Status - " + user_status);
    }) 
})
