let LoginPage = require('../page_objects/LoginPage.js');
let HeaderPage = require('../page_objects/HeaderPage.js');
let ProductsPage = require('../page_objects/ProductsPage.js');



describe('Change in product, positive', function(){
    it('Delete Project,  positive', async function(){
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
    
        await productsPage.getSearchProduct().wait();
        await allure.createStep('Enter "TarasUhrak Product1" product name in the search field', 
        () => productsPage.getSearchProduct().sendKeys("TarasUhrak Product1") )();
        
        await productsPage.getLinkOnProduct().wait();
        //await setTimeout(() => {
        //}, 1000)
        await allure.createStep('Click on the "TarasUhrak Product1" product link', 
        () => productsPage.getLinkOnProduct().click() )();
        
        
        await browser.sleep(1000);//else got Product Name Title before Click on the product link
        await productsPage.getProductNameTitle().wait();
        let t = await productsPage.getProductNameTitle().getText();
        
        if(t != 'TarasUhrak Product1' ){
            await console.log(`Delete Product: ${t}`)
        }else{
            await allure.createStep('Click on the edit icon-button', 
            () => productsPage.getProductEdit().click() )();

            await allure.createStep('Clear the product name field', 
            () => productsPage.getProductNameInput().clear())();
            await allure.createStep('Enter data("TarasUhrak Product1") in the product name field', 
            () => productsPage.getProductNameInput().sendKeys("TarasUhrak Product1"))();

            await productsPage.getProductFamily().wait();
            await allure.createStep('Click on the "Product Family" drop down list', 
            () => productsPage.getProductFamily().click())();
        
            await allure.createStep('Enter valid data("sdfdsfsdfs") in the product family field', 
            () => productsPage.getProductFamilyinput().sendKeys("sdfdsfsdfs"))();
                
            await allure.createStep('Checking for existence of the entered the "sdfdsfsdfs" product family',
            () => productsPage.getProductFamilyDrop().drop("sdfdsfsdfs"))();
            await allure.createStep('Click on the "Save" button', 
            () => productsPage.getAddNewProductSaveButton().click())();
            await productsPage.getProductNameTitle().wait();
            let b = await productsPage.getProductNameTitle().getText()
            let c = await productsPage.getProductContent().getText()
            await headerPage.createScreenShotAllure();
            expect(b).toEqual('TarasUhrak Product1',"Product title isn`t equal to entered");
            expect(c).toEqual(['sdfdsfsdfs','',''],"Product Family or Description or Repository data isn`t equal to entered");
        }
        

        //browser.sleep(5000)







    })
})