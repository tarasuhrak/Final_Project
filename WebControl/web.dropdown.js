let WebControl = require("./base.control.js");


class WebDrop extends WebControl {
    constructor(webElement, title) {
        super(webElement, title);
    }
    /*click(data){
        element.all(by.css(this.webElement)).filter(function(elem, index) {
            return elem.getText().then(function(text) {
              return text === data;
            });
          }).first().click();
    }*/
        
    async drop(text) {
        let a = await this.getControlWebElement().getText();
        if (a === text){
            await this.getControlWebElement().click()
        }else{
            await console.log(`The ${text}, is not have in the ${this.title} .`)
        }
    }
    

}
module.exports = WebDrop;




