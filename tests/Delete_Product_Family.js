let LoginPage = require('../page_objects/LoginPage.js');
let HeaderPage = require('../page_objects/HeaderPage.js');
let ProductsPage = require('../page_objects/ProductsPage.js');



describe('Add new product family, positive', function(){
    it('Add new product family,  positive', async function(){
        let loginPage = new LoginPage();
        let headerPage = new HeaderPage();
        let productsPage = new ProductsPage();


        await allure.createStep('Open main page', 
        () => loginPage.get() )();
        
        await loginPage.getloginButton().wait();
        await loginPage.login("persevalif@gmail.com","N<f&nx39V");
        
        await headerPage.getAdministrationMenuButton().wait();
        await allure.createStep('Click on "ADMINISTRATION" button', 
        () => headerPage.getAdministrationMenuButton().click() )();
    
       
        await productsPage.getAddNewProduct().wait();
        await allure.createStep('Click on "Add New Product" button', 
        () => productsPage.getAddNewProduct().click())();
        
        await productsPage.getProductFamilyEdit().wait();
        await allure.createStep('Click on "Edit" Product Family button', 
        () => productsPage.getProductFamilyEdit().click())();
        
        await productsPage.getEditProductFamilySearch().wait();
        await allure.createStep('Enter "TarasUhrak Product1" in Product ', 
        () => productsPage.getEditProductFamilySearch().sendKeys("TarasUhrak Product1"))();
        
        await productsPage.getEditProductFamilyDelete().click()
        await productsPage.getProductFamilyDeleteConfirmationText().wait()
        let m = await productsPage.getProductFamilyDeleteConfirmationText().getText();
        let string = await m.split(' ');
        
        if( string[3] == '\"TarasUhrak Product1\"?' ){
            await allure.createStep('Click on the product delete confirmation button', 
            () => productsPage.getProductFamilyDeleteConfirmation().click())()
        }else{
            console.log(`delete ${string[3]} product` )
        }

        await productsPage.getNote().wait();
        let b = await productsPage.getNote().getText()
        expect(b).toEqual('Product Family TarasUhrak Product1 successfully deleted');
        //browser.sleep(3000)


    })
})