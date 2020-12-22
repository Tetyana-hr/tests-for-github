const { assert } = require('console');
const registration = require('../pageObjects/registration.js');

describe('Github registration', () => {
    beforeEach(function () {
        browser.url('./');
        browser.maximizeWindow();
    });

    it('should open registration page, verify url, visibling some text and user registration', () => {
        registration.naviganeToRegPage();
        const urlRegPage = browser.getUrl();
        expect(browser).toHaveUrl('https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home')
        console.log ('REGISTRATION PAGE HAS URL : ' + urlRegPage);
        let verifyTextIsVisible = registration.verifyText.isDisplayedInViewport();
        console.log("IS VISIBLE? " + verifyTextIsVisible);

        browser.pause(1000);
        registration.inputRegSet();
        browser.pause(1000);
        registration.getEmail();
        browser.pause(1000);
        registration.passwordInput.setValue('Nz111111');
        browser.pause(1000);
    })

    it('should sig up with main form', () => {
        registration.getEmailMain();
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

})