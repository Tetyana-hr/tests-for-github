const { assert } = require('console');
const {registration,
    profile,
    forgotPassword,
    homepage,
    topics,
    header,
    login,
    pricing,
    explore,
    search,
    footer,
    careers,
    enterprise
} =  require('../pageObjects');
const {waitDomReady, waitAjaxLoad} = require('../../lib/wait.js');


describe('Github registration', () => {
    beforeEach(function () {
        browser.url('./');
 
        if (!header.signInButton.isDisplayedInViewport()) header.logout();
        });

    it('should open registration page, verify url, visibling some text and user registration', () => {
    

        header.signUpButton.waitForClickable();
        header.signUp();
        waitDomReady();
        const urlRegPage = browser.getUrl();
        expect(browser).toHaveUrl('https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home')
        console.log ('REGISTRATION PAGE HAS URL : ' + urlRegPage);
        registration.setUserName();
        registration.setEmail();
        registration.setPassword();
        expect(registration.textVerifyYourAccount.waitForDisplayed({ timeout: 1000 })).toBeTruthy();
        
        
    
    })

    it('should sing up with main form', () => {
        homepage.singUpButton.waitForClickable();
        homepage.setEmailMain();        
        homepage.signUpForGithub();   
        waitDomReady();     
        const urlRegPageMain = browser.getUrl();        
        expect(browser).toHaveUrl('https://github.com/join')
        console.log ('MAIN REGISTRATION PAGE HAS URL : ' + urlRegPageMain); 
        registration.setUserName();       
        registration.setPassword();        
        expect(registration.textVerifyYourAccount.waitForDisplayed({ timeout: 1000 })).toBeTruthy(); 
    })

    it('should authorization with right credential', () => {
        header.signIn(); 
        login.login();
        waitDomReady();
        header.userMenuClick();        
        header.goToYourProfile();
        waitDomReady();        
        expect(profile.nickName).toHaveText('gito-tito');  
          
    })

    it('negative test with empty field for reset your password', () => {
        header.signIn();
        waitDomReady();        
        login.forgotPasswordLinkClick();        
        forgotPassword.sendButtonClick();
        waitDomReady();
        let isVisibleWarningMes = forgotPassword.warningMessage.isDisplayedInViewport();
        expect(isVisibleWarningMes).toBeTruthy();
    })

    it('negative test with random text for reset your password', () => {
        header.signIn();
        waitDomReady();
        login.forgotPasswordLinkClick();
        forgotPassword.setResetEmail({fake:true});
        forgotPassword.sendButtonClick();
        waitDomReady();
        let isVisibleWarningMes = forgotPassword.warningMessage.isDisplayedInViewport();
        expect(isVisibleWarningMes).toBeTruthy();
    })
    
    it('positive test for reset your password', () => {
        header.signIn();
        waitDomReady();
        login.forgotPasswordLinkClick();

        forgotPassword.setResetEmail();
        forgotPassword.sendButtonClick();
        waitDomReady();
        let isVisibleCheckMes = forgotPassword.messageCheckEmail.isDisplayedInViewport();
        expect(isVisibleCheckMes).toBeTruthy();
        
    })

    it('should be visible drop down menu after hovering', () => {
        header.itemWhy.moveTo();
        expect(header.menuWhy.waitForDisplayed({ timeout: 2000 })).toBeTruthy();
        header.moveMenuTeam();
        header.itemExplore.moveTo();         
        expect(header.menuExplore.waitForDisplayed({ timeout: 2000 })).toBeTruthy();       
        header.moveMenuTeam();
        header.itemPricing.moveTo();         
        expect(header.menuPricing.waitForDisplayed({ timeout: 2000 })).toBeTruthy();       
        header.moveMenuTeam();
    })

    it('registration via join for free', () => { 
        header.moveMenuTeam();       
        header.itemPricing.moveTo();         
        header.itemPlansClick();
        pricing.joinForFreeButtonClick();
        registration.setUserName();
        registration.setEmail();
        registration.setPassword();
        browser.pause(500);
        const autocheck = registration.passwordInput.getAttribute('class');
        expect(autocheck.includes('is-autocheck-successful')).toBeTruthy();
        
    })

    it('should open topics and finde label Topics', () => {
        header.moveMenuTeam();
        header.itemExplore.moveTo();   
        header.itemExploreGithubClick();        
        explore.goToTopicsTab();
        waitDomReady();
        expect(topics.labelTopics).toHaveText('Topics'); 
    })

    it('should search webdriverio information', () => {

        header.searchKeyWord(); 
        waitDomReady();       
        search.searchResult();  
        waitDomReady();      
        expect(browser).toHaveUrlContaining('/webdriverio')
        
    })

    it('get started with GitHub Enterprise', () => {
        header.itemEnterpriseClick();        
        enterprise.startFreeTrialClick();        
        enterprise.planEnterpriseCloud();        
        registration.setUserName();        
        registration.setEmail();         
        registration.setPassword();

        browser.back();

        enterprise.planEnterpriseServer();
        expect(browser.isElementSelected('#questions_no')).toBeTruthy();
    })


    it('should print the Carrers list', () => {
        
        footer.linkCareersClick();
        careers.openPositionsClick();
        
        expect(careers.listOpenPositionsCareers.waitForDisplayed()).toBeTruthy();  
    })

})