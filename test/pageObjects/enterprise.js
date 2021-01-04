const fake = require('../../lib/fake.js');
const faker = fake();

class Enterprise{
    get startFreeTrial() {return $('[href="/organizations/enterprise_plan?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise"]');}
    get enterpriseCloud() {return $('//*[contains(text(),"Enterprise Cloud") and @class="h1 "]');}

    get enterpriseServer() {return $('//*[contains(text(),"Enterprise Server") and @class="h1 "]')}
    get nameEnterpriseServer() {return $('#contact_request_name');}
    get companyEnterpriseServer() {return $('#contact_request_organization_name');}
    get emailEnterpriseServer() {return $('#contact_request_email');}
    get radioButtonServer() {return $('#contact_request_instance_type_aws');}
    get checkTermsServer() {return $('#contact_request_agreed_to_terms');}
    get phoneEnterpriseServer() {return $('#contact_request_phone');}
  
    startFreeTrialClick(){
        this.startFreeTrial.waitForClickable();
        this.startFreeTrial.click();
    }

    planEnterpriseCloud(){  
        this.enterpriseCloud.waitForClickable();  
        this.enterpriseCloud.click();
    }

    planEnterpriseServer(){
        this.enterpriseServer.waitForClickable();
        this.enterpriseServer.click();
        this.nameEnterpriseServer.setValue(faker.name);
        this.companyEnterpriseServer.setValue(faker.name);
        this.emailEnterpriseServer.setValue(faker.email);
        this.setPhoneServer();
        this.radioButtonServer.click();
        this.checkTermsServer.click();       
      }

    setPhoneServer(){
        let randPhone = Math.floor(Math.random() * 1000000000);
        this.phoneEnterpriseServer.setValue(randPhone);
    }
}
module.exports = new Enterprise();