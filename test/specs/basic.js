const { assert } = require('console');
const registration = require('../pageObjects/registration.js');
const authorization = require('../pageObjects/authorization.js');
const forgotPassword = require('../pageObjects/forgotPassword.js');
const homepage = require('../pageObjects/homepage.js');
const topics = require('../pageObjects/topics.js');

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
        registration.setRandText();
        browser.pause(1000);
        registration.setEmail();
        browser.pause(1000);
        registration.passwordInput.setValue('Nz111111');
        browser.pause(1000);
    })

    it('should sing up with main form', () => {
        registration.setEmailMain();
        browser.pause(1000);
        registration.naviganeToRegPageMain();
        const urlRegPageMain = browser.getUrl();
        expect(browser).toHaveUrl('https://github.com/join')
        console.log ('MAIN REGISTRATION PAGE HAS URL : ' + urlRegPageMain);
        let verifyTextIsVisibleMain = registration.verifyText.isDisplayedInViewport();
        console.log("IS VISIBLE (Main)? " + verifyTextIsVisibleMain);

        registration.setRandText();
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
        browser.pause(2000);
        authorization.naviganeToProfile();
        browser.pause(2000);
        authorization.signout();
        browser.pause(2000);
    })

    it('negative test with empty field for reset your password', () => {
        authorization.naviganeToLoginPage();
        forgotPassword.navigateToResetPassword();
        forgotPassword.sendResetPassword();
        browser.pause(1000);
        forgotPassword.isVisibleWarning();
        browser.pause(1000);
    })

    it('negative test with random text for reset your password', () => {
        authorization.naviganeToLoginPage();
        forgotPassword.navigateToResetPassword();
        forgotPassword.inputResetWrong();
        forgotPassword.sendResetPassword();
        forgotPassword.isVisibleWarning();
        browser.pause(1000);
    })
    
    it('positive test for reset your password', () => {
        authorization.naviganeToLoginPage();
        forgotPassword.navigateToResetPassword();
        forgotPassword.setResetEmail();
        forgotPassword.sendResetPassword();
        browser.pause(1000);
        forgotPassword.isVisibleMessageCheckEmail();
        browser.pause(2000);
    })

    it('should be visible drop down menu after hovering', () => {
        browser.pause(2000);
        homepage.openMenuWhy();
        browser.pause(2000);
        homepage.moveMenuTeam();
        homepage.openMenuExplore();
        browser.pause(2000);
        homepage.moveMenuTeam();
        homepage.openMenuPricing();
        browser.pause(1000);
        homepage.moveMenuTeam();
    })

    xit('join for free', () => {
        browser.pause(1000);
        homepage.openMenuPricing();
        browser.pause(1000);
        registration.goToFreePlans();
        browser.pause(1000);
        registration.setRandText();
        browser.pause(1000);
        registration.setEmail();
        browser.pause(1000);
        registration.passwordInput.setValue('Nz111111');
        browser.pause(1000);
    })

    xit('should open topics and finde label Topics', () => {
        browser.pause(1000);
        homepage.openMenuExplore();
        browser.pause(1000);
        topics.navigateToTopics();
        browser.pause(2000);
        const textTopic = topics.labelTopics.getText();
        browser.pause(2000);
        expect(topics.labelTopics).toHaveText('Topics');
        console.log ('Page has label Topics : ' + textTopic);
      })

    it('should search webdriverio information', () => {
        browser.pause(1000);
        homepage.searchKeyWord();
        browser.pause(1000);
        homepage.searchResult();
        browser.pause(1000);
        expect(browser).toHaveUrlContaining('webdriverio')
        
    })

    it('get started with GitHub Enterprise', () => {
        registration.startEnterprise();
        browser.pause(1000);
        registration.setRandText();
        browser.pause(1000);
        registration.setEmail(); 
        browser.pause(1000);
        registration.passwordInput.setValue('Nz111111');
        browser.pause(1000);
        browser.pause(1000);
        browser.back();

        browser.pause(3000);
        registration.startEnterpriseServer();
        browser.pause(3000);

    })


    it('should print the Carrers list', () => {
        browser.pause(1000);
        homepage.listCareers();
        let itemsCareers = homepage.listOpenPositionsCareers.getText();
        console.log('Careers list : ' + itemsCareers);        
    })

})