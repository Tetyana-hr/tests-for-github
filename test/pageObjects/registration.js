class Registration{
    get singUp() {return $('[class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1"]');}
    get nameInput() {return $('input[name="user[login]"]');}
    get emailInput() {return $('input[name="user[email]"]');}
    get passwordInput() {return $('input[name="user[password]"]');}
    get verifyText(){return $('[class="f4 mb-3"]');}
    get emailInputMain() {return $('#user_email');}
    get singUpMain() {return $('[class="btn-mktg-fluid btn-green-mktg-fluid width-full width-sm-auto"]');}

    get itemPlans() {return $('[class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"] [href="/pricing"]');}
    get freeButton() {return $('[href="/join?plan=free&ref_cta=Join%2520for%2520free&ref_loc=topcarousel&ref_page=%2Fpricing&source=pricing-card-free"]');}
    
    get itemEnterprise() {return $('[class="d-lg-flex list-style-none"] [href="/enterprise"]');}
    get freeEnterprise() {return $('[href="/organizations/enterprise_plan?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise"]');}
    get enterpriseCloud() {return $('//*[contains(text(),"Enterprise Cloud") and @class="h1 "]')}

    naviganeToRegPage(){
      this.singUp.click();
    }
    
    inputRegSet(){
      let randText = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
      this.nameInput.setValue(randText)
    } 
 
     getEmail() {
        let endings = ["ukr.net", "email.ua", "nv.ua", "meta.ua", "gmail.com"];
        let randNameEmail = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        function rand(min, max) {
          return (min + Math.random() * (max - min + 1)) | 0
         }
         return randNameEmail + "@" + endings[rand(0, endings.length - 1)];
      }

      setEmail() {
        this.emailInput.setValue(this.getEmail);  
      }

      setEmailMain() {
        this.emailInputMain.setValue(this.getEmail);
      }

      naviganeToRegPageMain(){
        this.singUpMain.click();
      } 
      
      goToFreePlans(){
        this.itemPlans.click();
        this.freeButton.click();
      }

      startEnterprise(){
        this.itemEnterprise.click();
        this.freeEnterprise.click();
        
      }

}
module.exports = new Registration();