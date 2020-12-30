const fake = require('../../lib/fake.js');
const faker = fake();

class Registration{
    get nameInput() {return $('#user_login');}
    get emailInput() {return $('#user_email');}
    get passwordInput() {return $('#user_password');}
 
    setUserName() {
      this.nameInput.setValue(faker.name);
    }
 
    setEmail() {
      this.emailInput.setValue(faker.email);  
    }

    setPassword(password = 'Nz111111') {
      this.passwordInput.setValue(password);
    }
 
}
module.exports = new Registration();