const { assert } = require('console');
const {registration,
    mainUserPage,
    forgotPassword,
    homepage,
    topics,
    header,
    login,
    pricing,
    explore
} =  require('../pageObjects');
const explore = require('../pageObjects/explore');

describe('Github registration', () => {
    beforeEach(function () {
        browser.url('./');
        browser.maximizeWindow();
    });

    xit('should open registration page, verify url, visibling some text and user registration', () => {
        header.signUp();
        const urlRegPage = browser.getUrl();
        expect(browser).toHaveUrl('https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home')
        console.log ('REGISTRATION PAGE HAS URL : ' + urlRegPage);
        let verifyTextIsVisible = registration.verifyText.isDisplayedInViewport();
        console.log("IS VISIBLE? " + verifyTextIsVisible);


        registration.setUserName();
        browser.pause(1000);
        registration.setEmail();
        browser.pause(1000);
        registration.setPassword();
        browser.pause(1000);
    })

    xit('should sing up with main form', () => {
        homepage.setEmailMain();
        browser.pause(1000);
        homepage.signUpFoGithub();
        const urlRegPageMain = browser.getUrl();
        expect(browser).toHaveUrl('https://github.com/join')
        console.log ('MAIN REGISTRATION PAGE HAS URL : ' + urlRegPageMain);
        let verifyTextIsVisibleMain = registration.verifyText.isDisplayedInViewport();
        console.log("IS VISIBLE (Main)? " + verifyTextIsVisibleMain);

        registration.setUserName();
        browser.pause(1000);
        registration.getEmail();
        browser.pause(1000);
        registration.setPassword();
        browser.pause(1000);
    })

    xit('should authorization with right credential', () => {
        header.signIn();       
        login.login();        
        header.userMenuClick();        
        header.itemProfilSelected();        
        mainUserPage.checkNickName();
        header.logout();
        browser.pause(2000);
    })

    xit('negative test with empty field for reset your password', () => {
        header.signIn();
        login.forgotPasswordLinkClick();
        forgotPassword.sendResetPassword();
        browser.pause(1000);
        forgotPassword.isVisibleWarning();
        browser.pause(1000);
    })

    xit('negative test with random text for reset your password', () => {
        header.signIn();
        login.forgotPasswordLinkClick();
        forgotPassword.setWrongEmail;
        forgotPassword.sendResetPassword();
        forgotPassword.isVisibleWarning();
        browser.pause(1000);
    })
    
    xit('positive test for reset your password', () => {
        header.signIn();
        login.forgotPasswordLinkClick();
        forgotPassword.setResetEmail();
        forgotPassword.sendResetPassword();
        forgotPassword.isVisibleMessageCheckEmail();
        browser.pause(2000);
    })

    xit('should be visible drop down menu after hovering', () => {
        header.openMenuWhy();
        header.moveMenuTeam();
        header.openMenuExplore();        
        header.moveMenuTeam();
        header.openMenuPricing();        
        header.moveMenuTeam();
    })

    xit('registration via join for free', () => {        
        header.openMenuPricing();        
        header.itemPlansClick();
        pricing.joinForFreeButtonClick();
        registration.setUserName();
        registration.setEmail();
        registration.setPassword();
        
    })

    it('should open topics and finde label Topics', () => {
        header.openMenuExplore();
        header.itemExploreGithub();
        explore.goToTopicsTab();
        topics.checkLabelTopics();        
    })

    xit('should search webdriverio information', () => {

        homepage.searchKeyWord();

        homepage.searchResult();

        expect(browser).toHaveUrlContaining('webdriverio')
        
    })

    xit('get started with GitHub Enterprise', () => {
        registration.startEnterprise();

        registration.setUserName();

        registration.setEmail(); 

        registration.setPassword();


        browser.back();

        browser.pause(3000);
        registration.startEnterpriseServer();
        browser.pause(3000);

        browser.isElementSelected('#questions_no');
        browser.pause(3000);

    })


    xit('should print the Carrers list', () => {

        homepage.listCareers();
        let itemsCareers = homepage.listOpenPositionsCareers.getText();
        console.log('Careers list : ' + itemsCareers);        
    })

})