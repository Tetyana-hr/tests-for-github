class ForgotPassword{
    get forgotPasswordLink() {return $('[href="/password_reset"]');}
    get emailResetPassword() {return $('#email_field');}
    get sendButton() {return $('#forgot_password_form [type="submit"]');}
    get warningMessage() {return $('[class="container-lg px-2"]');}
    get messageCheckEmail() {return $('[class="mt-0"]');}

    navigateToResetPassword(){
        this.forgotPasswordLink.click();
    }

    setResetEmail(){
        this.emailResetPassword.setValue('kecowex120@nowdigit.com');
    }

    sendResetPassword(){
        this.sendButton.click();        
    }

    inputResetWrong(){
        let randTextWrong = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        this.emailResetPassword.setValue(randTextWrong)
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