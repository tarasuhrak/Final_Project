let WebButton = require('../WebControl/web.button');
let WebField = require('../WebControl/web.field');
let WebDrop = require('../WebControl/web.dropdown');


let AddNewProduct = '.form-group .section-body__actions';
let SearchProduct = '.section__left input.form-control';
let LinkOnProduct = 'ul.preview-list li';

let ProductNameInput = '#product-name';
let ProductFamily = 'form .dropdown button';
let ProductFamilyinput = '.dropdown input.form-control';
let ProductFamilyDrop= 'li.dropdown-item a span';
let AddNewProductSaveButton = 'button[class="btn gds-btn gds-btn-success"]';

let ProductNameTitle = 'div.section-title__details-name';
let ProductDelete = 'div.section-title__details-actions .gds-delete-icon'; 
let ProductEdit = 'button.gds-edit-icon';
let ProductContent = 'div.content-container';
//three elements: Product Family, Description, Repository

let ProductDeleteConfirmation = 'button[class="btn gds-btn gds-ml-1 gds-btn-danger"]';
let ProductFamilyDeleteConfirmation = 'button[class="btn gds-btn gds-btn-danger"]';
let ProductDeleteConfirmationText = 'confirmation-modal h4.message';
let ProductFamilyDeleteConfirmationText = 'div[class="modal fade gds-confirmation-modal in"] h4';

let Note = 'span.toast-message';
let ProductNameInputNote = 'div[class="validation-message validation-message__name"]';
let ProductFamilyNote = 'div[class="validation-message"]';

let ProductFamilyEdit = 'button[class="btn gds-btn gds-btn-link pull-right"]'

//Edit Product Family List form
let AddProductFamily = 'div.gds-btn-link';
let NewNameProductFamilyInput = 'input.product-family-name';
let NewNameProductFamilySave = 'button[class="btn gds-btn gds-btn-success gds-btn-sm gds-mr-3"]';
let EditProductFamilyDelete = '.actions-group span.gds-delete-icon'
let EditProductFamilySearch = 'product-family input';
let EditProductFamilyName = 'label.product-family-name'

class ProductsPage{
    constructor(){browser.waitForAngularEnabled(false)}



    getAddNewProduct() {
        return new WebButton(element(by.css(AddNewProduct)), 'Add New Product button');
    }

    getSearchProduct(){
        return new WebField(element(by.css(SearchProduct)), 'Search product');
    }
    getLinkOnProduct(){
        return new WebButton(element(by.css(LinkOnProduct)), 'Link on Product');
    }
    
    
    
    
    getProductNameInput(){
        return new WebField(element(by.css(ProductNameInput)),'Product Name field');
    }

    getProductFamily(){
        return new WebButton(element(by.css(ProductFamily)),'Product Family drop down button');
    }
    getProductFamilyEdit(){
        return new WebButton(element(by.css(ProductFamilyEdit)),'Product Family Edit button');
    }
    getAddProductFamily(){
        return new WebButton(element(by.css(AddProductFamily)),'Add Product Family link');
    }
    getNewNameProductFamilyInput(){
        return new WebField(element(by.css(NewNameProductFamilyInput)),'New name product family input link');
    }
    getNewNameProductFamilySave(){
        return new WebButton(element(by.css(NewNameProductFamilySave)), 'New name product family save button');
    }
    getEditProductFamilyDelete(){
        return new WebButton(element(by.css(EditProductFamilyDelete)), 'Product family delete icon-button');
    }

    getEditProductFamilySearch(){
        return new WebField(element(by.css(EditProductFamilySearch)), 'Product family search field in the "Edit Product Family List" form');
    }
    getEditProductFamilyName(){
        return new WebField(element(by.css(EditProductFamilyName)), 'Product family label in the "Edit Product Family List" form');
    }
   


    getProductFamilyinput(){
        return  new WebField(element(by.css(ProductFamilyinput)),'Product Family drop down field')
    }
    getProductFamilyDrop(){
        return  new WebDrop(element(by.css(ProductFamilyDrop)),'Product Family item of drop down list')
    }

    getAddNewProductSaveButton(){
        return  new WebButton(element(by.css(AddNewProductSaveButton)),'New product save button');
    }
    
    
    
    
    
    
    getProductNameTitle(){
        return new WebField(element(by.css(ProductNameTitle)),'Product Name title')
    }
    getProductContent(){
        return new WebField(element.all(by.css(ProductContent)),'Product content container field')
    }
    getProductEdit(){
        return new WebButton(element(by.css(ProductEdit)), 'Product edit button');
    }
    getProductDelete(){
        return  new WebButton(element(by.css(ProductDelete)),'Product delete button'); 
    }

    getProductDeleteConfirmation(){
        return  new WebButton(element(by.css(ProductDeleteConfirmation)),'Product delete confirmation button'); 
    }
    getProductDeleteConfirmationText(){
        return  new WebField(element(by.css(ProductDeleteConfirmationText)),'Product delete confirmation note text'); 
    }
    getProductFamilyDeleteConfirmationText(){
        return  new WebField(element(by.css(ProductFamilyDeleteConfirmationText)),'Product family delete confirmation note text'); 
    }
    getProductFamilyDeleteConfirmation(){
        return  new WebButton(element(by.css(ProductFamilyDeleteConfirmation)),'Product family delete confirmation button'); 
    }


    

    getNote(){
        return new WebField(element(by.css(Note)),'Note')
    }
    
    getProductNameInputNote(){
        return new WebField(element(by.css(ProductNameInputNote)),'Product name input field note')
    }

    getProductFamilyNote(){
        return new WebField(element(by.css(ProductFamilyNote)),'Product Family field note')
    }
   

}


module.exports = ProductsPage;