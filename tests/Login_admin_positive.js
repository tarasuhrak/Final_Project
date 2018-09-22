let LoginPage = require('../page_objects/LoginPage.js');
let HeaderPage = require('../page_objects/HeaderPage.js');

describe('Login, positive, admin', function(){
    it('Login, admin', async function(){
        let loginPage = new LoginPage();
        let headerPage = new HeaderPage();

        await allure.createStep('Open main page', 
        () => loginPage.get() )();
        await allure.createStep('Login', 
        () => loginPage.login("persevalif@gmail.com ","N<f&nx39V"))();
        
        await headerPage.getUser_name().wait();
        let name = await headerPage.getUser_name().getText();
        
        let user_status = await headerPage.getUser_status().getText();
        
        
        await headerPage.createScreenShotAllure();
        expect(name).toEqual('Taras Uhrak');
        expect(user_status).toEqual('Admin');
        console.log("User Name - " + name);
        console.log("User Status - " + user_status);
       
    }) 
})
