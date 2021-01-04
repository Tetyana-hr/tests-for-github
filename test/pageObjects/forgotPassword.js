const fake = require('../../lib/fake.js');
const faker = fake();

class ForgotPassword{
    get emailResetPassword() {return $('#email_field');}
    get sendButton() {return $('#forgot_password_form [type="submit"]');}
    get warningMessage() {return $('[class="container-lg px-2"]');}
    get messageCheckEmail() {return $('[class="mt-0"]');}

/**
 * @param fake {string: {email}} for custom email
 * @param fake {any} for fake email
 * @param fake {undefined || null} for default email
 * @return {Promise<void>}
 */

    setResetEmail(fake){       

        let email = 'kecowex120@nowdigit.com';
        if (fake && typeof fake === 'string' && ~fake.indexOf('@')) {
            email = fake;
            fake = false;
        }
        if (fake) email = faker.email
            browser.waitUntil(() => {
            this.emailResetPassword.setValue(email);
            const eName = this.emailResetPassword.getValue();
            return eName === email;
        },
        {
            timeout: 1000
        }
            )
        
    }

    sendButtonClick(){
        this.sendButton.waitForClickable();
        this.sendButton.click();        
    }
}
module.exports = new ForgotPassword();