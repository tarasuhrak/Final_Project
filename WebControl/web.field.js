let WebControl = require("./base.control.js");

class WebField extends WebControl {
    constructor(webElement, title) {
        super(webElement, title);
    }
    
    getText(){
        return this.getControlWebElement().getText();
    }
    
    sendKeys(text){
        return this.getControlWebElement().sendKeys(text);
    }

    clear(){
        return this.getControlWebElement().clear();
    }

    isDisplayed(){
        return this.getControlWebElement().isDisplayed(); 
    }
    isPresent(){
        return this.getControlWebElement().isPresent()
    }
    
}



module.exports = WebField;