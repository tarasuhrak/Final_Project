exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    restartBrowserBetweenTests: true,
    capabilities: {
      browserName: 'chrome',
      maxInstances: 1,
    },
  
    specs: ['./tests/**.js'],
    onPrepare: function() {
      let AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }));//Before this command, the browser restarts
  
    
      /*jasmine.getEnv().afterEach(async function(){
        let screenshotFile = await browser.takeScreenshot();
        await allure.createAttachment("Screenshot",() => {
            return new Buffer (screenshotFile, "base64")
        }, 'image/png')();
      });*///Before this command, the browser restarts and we get a white screenshot


    },
    
    
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
  };