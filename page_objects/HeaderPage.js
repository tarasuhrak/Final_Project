let WebButton = require('../WebControl/web.button');
let WebField = require('../WebControl/web.field');



let ProductsMenuButton = '//li[@class][1]/a';
let AdministrationMenuButton = 'ul.navbar-nav li:nth-child(2) a';
let SingOut = 'ul.dropdown-menu .dropdown-item';
let User_name = ".user-data .user-name";
let User_status = '.user-data .user-status';





class HeaderPage{
    constructor(){
        browser.waitForAngularEnabled(false)   
    }
    
    getProductsMenuButton() {
        return new WebButton(element(by.xpath(ProductsMenuButton)),'Products main menu item');
    }

    getAdministrationMenuButton() {
        return new WebButton(element(by.css(AdministrationMenuButton)),'Administration main menu item');
    }

    getUser_name() {
        return new WebField(element(by.css(User_name)),'User name');
        
    }
    
    getUser_status() {
        return new WebField(element(by.css(User_status)),'User status');
    }
    
    getSignOut() {
        return new WebButton(element(by.css(SingOut)),'Sing out main menu item');
    }

    


    async wait_name(){
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getUser_name()),15000)
    }

    async createScreenShotAllure(){
        let screenshotFile = await browser.takeScreenshot();
        await allure.createAttachment("Screenshot",() => {
            return new Buffer (screenshotFile, "base64")
        }, 'image/png')();
    }


}

module.exports = HeaderPage;
