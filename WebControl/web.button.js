let WebControl = require("./base.control.js");

// WebButton {
    class WebButton extends WebControl {
        constructor(webElement, title) {
            super(webElement, title);
        }
   /* constructor(webElement, title) {
        this.webElement = webElement;
        this.title = title;
    }*/
    click(){
        return this.getControlWebElement().click();
    }
    isEnabled(){
        return this.getControlWebElement().isEnabled();
    }

}

module.exports = WebButton;