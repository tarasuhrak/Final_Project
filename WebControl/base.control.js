class WebControl {

    constructor(baseControlWebElement, title) {
        if (new.target === WebControl) {
            throw new TypeError("Cannot construct Abstract WebControl instances directly");
        }
        this.baseControlWebElement = baseControlWebElement;
        this.controlTitle = title;
    }

    getControlWebElement() {
        if (this.baseControlWebElement) {
            return this.baseControlWebElement;
        } else {
            throw new Error(`Web Control \"${this.controlTitle}\" is \"Undefined\"`);
        }
    }
    async wait() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.baseControlWebElement),15000);
    }
}

module.exports = WebControl;