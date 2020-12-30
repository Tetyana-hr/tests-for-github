const { assert } = require('console');
const {registration,
    mainUserPage,
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
        browser.maximizeWindow();
        try {
        header.signInButton
        }
        catch (error){
            header.logout();
        }
        });

    xit('should open registration page, verify url, visibling some text and user registration', () => {
        header.signUp();
        const urlRegPage = browser.getUrl();
        expect(browser).toHaveUrl('https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home')
        console.log ('REGISTRATION PAGE HAS URL : ' + urlRegPage);        
        expect(registration.textVerifyYourAccount.isDisplayedInViewport()).toBeTruthy();  

        registration.setUserName();
        registration.setEmail();
        registration.setPassword();
    })

    xit('should sing up with main form', () => {
        homepage.setEmailMain();
        homepage.signUpForGithub();
        const urlRegPageMain = browser.getUrl();
        expect(browser).toHaveUrl('https://github.com/join')
        console.log ('MAIN REGISTRATION PAGE HAS URL : ' + urlRegPageMain);
        expect(registration.textVerifyYourAccount.isDisplayedInViewport()).toBeTruthy();  

        registration.setUserName();
        browser.pause(1000);
        registration.setEmail();
        browser.pause(1000);
        registration.setPassword();
        browser.pause(1000);
    })

    xit('should authorization with right credential', () => {
        header.signIn();       
        login.login();        
        header.userMenuClick();        
        header.goToYourProfile();        
        expect(mainUserPage.getNickName()).toHaveText('gito-tito');
    })

    xit('negative test with empty field for reset your password', () => {
        header.signIn();
        login.forgotPasswordLinkClick();
        forgotPassword.sendButtonClick();
        let isVisibleWarningMes = forgotPassword.warningMessage.isDisplayedInViewport();
        expect(isVisibleWarningMes).toBeTruthy();
    })

    xit('negative test with random text for reset your password', () => {
        header.signIn();
        login.forgotPasswordLinkClick();
        forgotPassword.setResetEmail({fake:true});
        forgotPassword.sendButtonClick();
        let isVisibleWarningMes = forgotPassword.warningMessage.isDisplayedInViewport();
        expect(isVisibleWarningMes).toBeTruthy();
    })
    
    xit('positive test for reset your password', () => {
        header.signIn();
        login.forgotPasswordLinkClick();
        forgotPassword.setResetEmail();
        forgotPassword.sendResetPassword();
        let isVisibleCheckMes = this.messageCheckEmail.isDisplayedInViewport();
        expect(isVisibleCheckMes).toBeTruthy();
        
    })

    xit('should be visible drop down menu after hovering', () => {
        header.itemWhy.moveTo(); 
        expect(header.menuWhy.isDisplayedInViewport()).toBeTruthy();
        header.moveMenuTeam();
        header.itemExplore.moveTo();         
        expect(header.menuExplore.isDisplayedInViewport()).toBeTruthy();       
        header.moveMenuTeam();
        header.itemPricing.moveTo();         
        expect(header.menuPricing.isDisplayedInViewport()).toBeTruthy();       
        header.moveMenuTeam();
    })

    xit('registration via join for free', () => {        
        header.itemPricing.moveTo();        
        header.itemPlansClick();
        pricing.joinForFreeButtonClick();
        registration.setUserName();
        registration.setEmail();
        registration.setPassword();
        
    })

    xit('should open topics and finde label Topics', () => {
        
        header.itemExplore.moveTo();  
        header.itemExploreGithubClick();
        explore.goToTopicsTab();
        const textTopics = topics.labelTopics.getText();
        expect(textTopics).toHaveText('Topics');       
    })

    

    xit('should search webdriverio information', () => {

        header.searchKeyWord();
        search.searchResult();
        expect(browser).toHaveUrlContaining('webdriverio')
        
    })

    xit('get started with GitHub Enterprise', () => {
        header.itemEnterpriseClick();
        enterprise.startFreeTrialClick();
        browser.pause(1000);
        enterprise.planEnterpriseCloud();
        browser.pause(1000);
        registration.setUserName();
        registration.setEmail(); 
        registration.setPassword();

        browser.back();

        browser.pause(1000);
        enterprise.planEnterpriseServer();
        browser.isElementSelected('#questions_no');
        browser.pause(1000);
    })


    xit('should print the Carrers list', () => {
        
        footer.linkCareersClick();
        careers.openPositionsClick();
        expect(careers.listOpenPositionsCareers.isDisplayedInViewport()).toBeTruthy();  
    })

})