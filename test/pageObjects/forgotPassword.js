const fake = require('../../lib/fake.js');
const faker = fake();

class ForgotPassword{
    get emailResetPassword() {return $('#email_field');}
    get sendButton() {return $('#forgot_password_form [type="submit"]');}
    get warningMessage() {return $('[class="container-lg px-2"]');}
    get messageCheckEmail() {return $('[class="mt-0"]');}



    setResetEmail(){
        this.emailResetPassword.setValue('kecowex120@nowdigit.com');
    }

    sendResetPassword(){
        this.sendButton.click();        
    }

    setWrongEmail() {
        this.emailResetPassword.setValue(faker.email);  
    }

    isVisibleMessageCheckEmail(){
       let isVisibleCheckMes = this.messageCheckEmail.isDisplayedInViewport();
       console.log("IS VISIBLE CHECK EMAIL MESSAGE? " + isVisibleCheckMes);
    }

    isVisibleWarning(){
        let isVisibleWarningMes = this.warningMessage.isDisplayedInViewport();
        console.log("IS VISIBLE WARNING MESSAGE? " + isVisibleWarningMes);
    }
}
module.exports = new ForgotPassword();