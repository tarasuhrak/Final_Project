let LoginPage = require('../page_objects/LoginPage.js');
let HeaderPage = require('../page_objects/HeaderPage.js');
let ProductsPage = require('../page_objects/ProductsPage.js');



describe('Add New Project, positive', function(){
    it('Add New Project,  positive', async function(){
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
        await allure.createStep('Enter data("Taras_Uhrak_Test_001") in the product name field', 
        () => productsPage.getProductNameInput().sendKeys("Taras_Uhrak_Test_001"))();
        
        await productsPage.getProductFamily().wait();
        await allure.createStep('Click on the "Product Family" drop down list', 
        () => productsPage.getProductFamily().click())();
        
        await allure.createStep('Enter valid data("ABCDF") in the product family field', 
        () => productsPage.getProductFamilyinput().sendKeys("ABCDF"))();
        
        
        
        await allure.createStep('Checking for existence of the entered the "ABCDF" product family',
        () => productsPage.getProductFamilyDrop().drop("ABCDF"))();

        await allure.createStep('Click on the "Save" button', 
        () => productsPage.getAddNewProductSaveButton().click())();
        await productsPage.getProductNameTitle().wait();
        //await browser.sleep(4000);
        let b = await productsPage.getProductNameTitle().getText()
        let c = await productsPage.getProductContent().getText()
        //let c = await element.all(By.css('div.content-container')).getText()

        await headerPage.createScreenShotAllure();
        expect(b).toEqual('Taras_Uhrak_Test_001',"Product title isn`t equal to entered");
        expect(c).toEqual(['ABCDF','',''],"Product Family or Description or Repository data isn`t equal to entered");

    })
})