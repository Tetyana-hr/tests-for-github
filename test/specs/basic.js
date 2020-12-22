const { assert } = require('console');
const registration = require('../pageObjects/registration.js');
const authorization = require('../pageObjects/authorization.js');

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

    xit('negative test for reset your password', () => {

    })

})