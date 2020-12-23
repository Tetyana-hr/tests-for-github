const { assert } = require('console');
const registration = require('../pageObjects/registration.js');
const authorization = require('../pageObjects/authorization.js');
const forgotPassword = require('../pageObjects/forgotPassword.js');


describe('Github registration', () => {
    beforeEach(function () {
        browser.url('./');
        browser.maximizeWindow();
    });

    xit('should open registration page, verify url, visibling some text and user registration', () => {
        registration.naviganeToRegPage();
        const urlRegPage = browser.getUrl();
        expect(browser).toHaveUrl('https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home')
        console.log ('REGISTRATION PAGE HAS URL : ' + urlRegPage);
        let verifyTextIsVisible = registration.verifyText.isDisplayedInViewport();
        console.log("IS VISIBLE? " + verifyTextIsVisible);

        browser.pause(1000);
        registration.inputRegSet();
        browser.pause(1000);
        registration.setEmail();
        browser.pause(1000);
        registration.passwordInput.setValue('Nz111111');
        browser.pause(1000);
    })

    xit('should sing up with main form', () => {
        registration.setEmailMain();
        browser.pause(1000);
        registration.naviganeToRegPageMain();
        const urlRegPageMain = browser.getUrl();
        expect(browser).toHaveUrl('https://github.com/join')
        console.log ('MAIN REGISTRATION PAGE HAS URL : ' + urlRegPageMain);
        let verifyTextIsVisibleMain = registration.verifyText.isDisplayedInViewport();
        console.log("IS VISIBLE (Main)? " + verifyTextIsVisibleMain);

        registration.inputRegSet();
        browser.pause(1000);
        registration.getEmail();
        browser.pause(1000);
        registration.passwordInput.setValue('Nz111111');
        browser.pause(1000);
    })

    xit('should authorization with right credential', () => {
        authorization.naviganeToLoginPage();
        browser.pause(1000);
        authorization.login();
        browser.pause(1000);
        authorization.naviganeToProfile();
    })

    xit('negative test with empty field for reset your password', () => {
        authorization.naviganeToLoginPage();
        forgotPassword.navigateToResetPassword();
        forgotPassword.sendResetPassword();
        browser.pause(1000);
        forgotPassword.isVisibleWarning();
        browser.pause(1000);
    })

    xit('negative test with random text for reset your password', () => {
        authorization.naviganeToLoginPage();
        forgotPassword.navigateToResetPassword();
        forgotPassword.inputResetWrong();
        forgotPassword.sendResetPassword();
        forgotPassword.isVisibleWarning();
        browser.pause(1000);
    })
    
    xit('positive test for reset your password', () => {
        authorization.naviganeToLoginPage();
        forgotPassword.navigateToResetPassword();
        forgotPassword.setResetEmail();
        forgotPassword.sendResetPassword();
        browser.pause(1000);
        forgotPassword.isVisibleMessageCheckEmail();
        browser.pause(2000);
    })

    it('sould drop down menu is wisible after hovering', () => {
        browser.pause(2000);
        // let itemPricing = $('//summary[contains(text(),"Pricing")]');
        browser.elementHover('//summary[contains(text(),"Pricing")]');   
        browser.pause(5000);
    })

    // it('sould drop down menu is wisible after hovering', () => {
    //     browser.pause(2000);
    //     const itemPricing = $('//summary[contains(text(),"Pricing")]');
    //     itemPricing.hover();
    // //     let itemPricing = {
    // //         locator: $('//summary[contains(text(),"Pricing")]'),
            
    // //         toString: function(){
    // //         return this.locator;
    // //         }
    // //     };
    // //     browser.elementHover(itemPricing);
        
    //     browser.pause(5000);
    // })

     // it('', () => {
    //     browser.pause(2000);
    //     const itemPricing = $('//summary[contains(text(),"Pricing")]');
    //     itemPricing.elementHover();
    //     browser.pause(2000);
    // })

})