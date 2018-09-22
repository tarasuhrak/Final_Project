let LoginPage = require('../page_objects/LoginPage.js');
let HeaderPage = require('../page_objects/HeaderPage.js');
let ProductsPage = require('../page_objects/ProductsPage.js');



describe('Deleting Project, positive', function(){
    it('Deleting Project,  positive', async function(){
        let loginPage = new LoginPage();
        let headerPage = new HeaderPage();
        let productsPage = new ProductsPage();


        await allure.createStep('Open main page', 
        () => loginPage.get() )();
        
        await loginPage.getloginButton().wait();
        await loginPage.login("persevalif@gmail.com","N<f&nx39V");
        
        await headerPage.getAdministrationMenuButton().wait();
        await allure.createStep('Click "ADMINISTRATION" button', 
        () => headerPage.getAdministrationMenuButton().click() )();
        
        await productsPage.getSearchProduct().wait();
        await allure.createStep('Enter "TarasUhrak Product1" ', 
        () => productsPage.getSearchProduct().sendKeys("TarasUhrak Product1") )();
        
        //await browser.sleep(1000)
        await productsPage.getLinkOnProduct().wait();
        await allure.createStep('Click on "TarasUhrak Product1" link', 
        () => productsPage.getLinkOnProduct().click() )();
        
        //await browser.refresh()
        await productsPage.getProductDelete().wait()
        await allure.createStep('Click on product delete icon-button', 
        () => productsPage.getProductDelete().click() )();
       
        await productsPage.getProductDeleteConfirmation().wait();
        
        let m = await productsPage.getProductDeleteConfirmationText().getText();
        let string = await m.split(' ');
        //console.log(string)

        if( string[6] == "TarasUhrak Product1" ){
            await allure.createStep('Click on the product delete confirmation button', 
            () => productsPage.getProductDeleteConfirmation().click())()
        }else{
            console.log(`Delete product ${string[6]}  ` )
        }   
        
        
        await productsPage.getNote().wait();
        let b = await productsPage.getNote().getText()
        
        /*await allure.createStep('Enter the "Bohdan_Burtak_Test_001" product name in the search field', 
        () => productsPage.getSearchProduct().sendKeys("Bohdan_Burtak_Test_001") )();
        //Entered more than one time
        let z = await productsPage.getLinkOnProduct().click()*/
        let x = await productsPage.getProductNameTitle().getText()
        await headerPage.createScreenShotAllure();
        expect(b).toEqual('TarasUhrak Product1 successfully deleted');
        expect(x).not.toBe('TarasUhrak Product1','Shown information about deleted project');
        //expect(z).toEqual(null);
        
        //await browser.sleep(5000);
       





    })
})