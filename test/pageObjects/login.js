class Login{
   
    get forgotPasswordLink() {return $('[href="/password_reset"]');}
    get loginName() {return $('#login_field');}
    get loginPassword() {return $('#password');}
    get loginButton() {return $('[class="btn btn-primary btn-block"]');}


    forgotPasswordLinkClick(){
        this.loginButton.waitForClickable();
        this.forgotPasswordLink.waitForDisplayed();
        this.forgotPasswordLink.click();
    }
/**
 * @param {object} credentions 
 * @param {string} credentions.userName
 * @param {string} credentions.userPassword
 */

    login(credentions) {
        credentions = credentions || {};
        credentions.userName = credentions.userName || 'kecowex120@nowdigit.com';
        credentions.userPassword = credentions.userPassword || 'Nz111111' ;
 
        this.loginButton.waitForClickable();
        browser.waitUntil(() => {
            this.loginName.setValue(credentions.userName);
            const uName = this.loginName.getValue();
            return uName === credentions.userName;
        },
        {
            timeout: 1000
        }
        )
        
        this.loginPassword.setValue(credentions.userPassword);
        this.loginButton.click();
    }
}

module.exports = new Login();