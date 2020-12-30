const fake = require('../../lib/fake.js');
const faker = fake();

class Home {
    get emailInputMain() {return $('#user_email');}
    get singUpButon() {return $('[class="btn-mktg-fluid btn-green-mktg-fluid width-full width-sm-auto"]');}


    setEmailMain() {
        this.emailInputMain.setValue(faker.email);
     }

    signUpForGithub(){
        this.singUpButton.click();
    } 
}

module.exports = new Home();