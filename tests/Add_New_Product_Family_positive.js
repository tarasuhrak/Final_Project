let LoginPage = require('../page_objects/LoginPage.js');
let HeaderPage = require('../page_objects/HeaderPage.js');
let ProductsPage = require('../page_objects/ProductsPage.js');



describe('Add new product family, positive', function(){
    it('Add new product family,  positive', async function(){
        let loginPage = new LoginPage();
        let headerPage = new HeaderPage();
        let productsPage = new ProductsPage();


        await allure.createStep('Open the main page', 
        () => loginPage.get() )();
        
        await loginPage.getloginButton().wait();
        await loginPage.login("persevalif@gmail.com","N<f&nx39V");
        
        await headerPage.getAdministrationMenuButton().wait();
        await allure.createStep('Click on the "ADMINISTRATION" button', 
        () => headerPage.getAdministrationMenuButton().click() )();
    
       
        await productsPage.getAddNewProduct().wait();
        await allure.createStep('Click on the "Add New Product" button', 
        () => productsPage.getAddNewProduct().click())();
        
        await productsPage.getProductFamilyEdit().wait();
        await allure.createStep('Click on the "Edit" Product Family button', 
        () => productsPage.getProductFamilyEdit().click())();
        
        await setTimeout(() => {
            allure.createStep('Click on the "Add Product Family" link', 
        () => productsPage.getAddProductFamily().click())();
        }, 1000)
        
        await productsPage.getNewNameProductFamilyInput().wait();
        await allure.createStep('Enter valid data("Uhrak_test_NPF") in the Product Family Name field', 
        () => productsPage.getNewNameProductFamilyInput().sendKeys('Uhrak_test_NPF'))();
        
        await productsPage.getNewNameProductFamilySave().wait();
        await allure.createStep('Click on the save button', 
        () => productsPage.getNewNameProductFamilySave().click())();
        
        await productsPage.getNote().wait();
        let b = await productsPage.getNote().getText()
        await headerPage.createScreenShotAllure();
        expect(b).toEqual('Product Family Uhrak_test_NPF successfully created');
        
        //browser.sleep(4000)

    })
})