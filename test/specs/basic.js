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



describe('Github registration', () => {
    beforeEach(function () {
        browser.url('./');
 
        if (!header.signInButton.isDisplayedInViewport()) header.logout();
        });

    it('should open registration page, verify url, visibling some text and user registration', () => {
        browser.pause(1000);
        header.signUp();
        browser.pause(1000);
        const urlRegPage = browser.getUrl();
        expect(browser).toHaveUrl('https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home')
        console.log ('REGISTRATION PAGE HAS URL : ' + urlRegPage);        
        expect(registration.textVerifyYourAccount.isDisplayedInViewport()).toBeTruthy(); 
        
        browser.pause(1000); 

        registration.setUserName();
        browser.pause(1000);
        registration.setEmail();
        browser.pause(1000);
        registration.setPassword();
    })

    it('should sing up with main form', () => {
        browser.pause(1000);
        homepage.setEmailMain();
        browser.pause(1000);
        homepage.signUpForGithub();
        browser.pause(1000);
        const urlRegPageMain = browser.getUrl();
        browser.pause(1000);
        expect(browser).toHaveUrl('https://github.com/join')
        console.log ('MAIN REGISTRATION PAGE HAS URL : ' + urlRegPageMain);
        expect(registration.textVerifyYourAccount.isDisplayedInViewport()).toBeTruthy();  
        browser.pause(1000);

        registration.setUserName();
        browser.pause(1000);
        registration.setEmail();
        browser.pause(1000);
        registration.setPassword();
        browser.pause(1000);
    })

    it('should authorization with right credential', () => {
        header.signIn();       
        browser.pause(1000);
        login.login();
        browser.pause(1000);
        header.userMenuClick();
        browser.pause(1000);        
        header.goToYourProfile(); 
        browser.pause(2000);       
        expect(profile.nickName).toHaveText('gito-tito');  
          
    })

    it('negative test with empty field for reset your password', () => {
        header.signIn();
        browser.pause(1000);
        login.forgotPasswordLinkClick();
        browser.pause(1000);
        forgotPassword.sendButtonClick();
        browser.pause(1000);
        let isVisibleWarningMes = forgotPassword.warningMessage.isDisplayedInViewport();
        expect(isVisibleWarningMes).toBeTruthy();
    })

    it('negative test with random text for reset your password', () => {
        header.signIn();
        browser.pause(1000);
        login.forgotPasswordLinkClick();
        browser.pause(1000);
        forgotPassword.setResetEmail({fake:true});
        browser.pause(1000);
        forgotPassword.sendButtonClick();
        browser.pause(1000);
        let isVisibleWarningMes = forgotPassword.warningMessage.isDisplayedInViewport();
        expect(isVisibleWarningMes).toBeTruthy();
    })
    
    it('positive test for reset your password', () => {
        header.signIn();
        browser.pause(1000);
        login.forgotPasswordLinkClick();
        browser.pause(1000);
        forgotPassword.setResetEmail();
        browser.pause(1000);
        forgotPassword.sendButtonClick();
        let isVisibleCheckMes = forgotPassword.messageCheckEmail.isDisplayedInViewport();
        expect(isVisibleCheckMes).toBeTruthy();
        
    })

    it('should be visible drop down menu after hovering', () => {
        browser.pause(1000);
        header.itemWhy.moveTo();
        browser.pause(1000);
        expect(header.menuWhy.isDisplayedInViewport()).toBeTruthy();
        browser.pause(1000);
        header.moveMenuTeam();
        browser.pause(1000);
        header.itemExplore.moveTo();  
        browser.pause(1000);       
        expect(header.menuExplore.isDisplayedInViewport()).toBeTruthy();  
        browser.pause(1000);     
        header.moveMenuTeam();
        browser.pause(1000);
        header.itemPricing.moveTo();   
        browser.pause(1000);      
        expect(header.menuPricing.isDisplayedInViewport()).toBeTruthy();  
        browser.pause(1000);     
        header.moveMenuTeam();
    })

    it('registration via join for free', () => { 
        browser.pause(1000);       
        header.itemPricing.moveTo();   
        browser.pause(1000);      
        header.itemPlansClick();
        browser.pause(1000);
        pricing.joinForFreeButtonClick();
        browser.pause(1000);
        registration.setUserName();
        browser.pause(1000);
        registration.setEmail();
        browser.pause(1000);
        registration.setPassword();
        
    })

    it('should open topics and finde label Topics', () => {

        browser.pause(1000);
        header.itemExplore.moveTo(); 
        browser.pause(1000);  
        header.itemExploreGithubClick();
        browser.pause(1000);
        explore.goToTopicsTab();
        browser.pause(1000);
        expect(topics.labelTopics).toHaveText('Topics'); 
    })

    it('should search webdriverio information', () => {

        header.searchKeyWord();
        browser.pause(1000);
        search.searchResult();
        browser.pause(1000);
        expect(browser).toHaveUrlContaining('webdriverio')
        
    })

    it('get started with GitHub Enterprise', () => {
        header.itemEnterpriseClick();
        browser.pause(1000);
        enterprise.startFreeTrialClick();
        browser.pause(1000);
        enterprise.planEnterpriseCloud();
        browser.pause(1000);
        registration.setUserName();
        browser.pause(1000);
        registration.setEmail(); 
        browser.pause(1000);
        registration.setPassword();

        browser.back();

        browser.pause(1000);
        enterprise.planEnterpriseServer();
        browser.pause(1000);
        browser.isElementSelected('#questions_no');
        browser.pause(1000);
    })


    it('should print the Carrers list', () => {
        
        footer.linkCareersClick();
        browser.pause(1000);
        careers.openPositionsClick();
        browser.pause(1000);
        expect(careers.listOpenPositionsCareers.isDisplayed()).toBeTruthy();  
    })

})