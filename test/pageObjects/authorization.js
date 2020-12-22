class Authorization{
    get singIn() {return $('[class="HeaderMenu-link no-underline mr-3"]');}
    get loginName() {return $('#login_field');}
    get loginPassword() {return $('#password');}
    get loginButton() {return $('[class="btn btn-primary btn-block"]');}
    get avatarMenu() {return $('[aria-label="View profile and more"] [class="dropdown-caret"]')}
    get profileItem() {return $('a.dropdown-item[href="/gito-tito"]');}
    get nickName() {return $('[itemprop="additionalName"]');}
 

    naviganeToLoginPage(){
        this.singIn.click();
      }
   
    login() {
        this.loginName.setValue('kecowex120@nowdigit.com');
        this.loginPassword.setValue('Nz111111');
        this.loginButton.click();
    }

    naviganeToProfile(){
        this.avatarMenu.click();
        this.profileItem.click();

        this.nickName.getText();
        expect(this.nickName).toHaveText('gito-tito');
        
    }

}
module.exports = new Authorization();