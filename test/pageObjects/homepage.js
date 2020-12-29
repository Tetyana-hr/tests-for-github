const fake = require('../../lib/fake.js');
const faker = fake();

class Home {
    get emailInputMain() {return $('#user_email');}
    get singUpButon() {return $('[class="btn-mktg-fluid btn-green-mktg-fluid width-full width-sm-auto"]');}
    get inputSearch() {return $('input[name="q"]');}
    get searchAllGithub() {return $('[class="js-jump-to-badge-search-text-global"]');}
    get itemTypeScript() {return $('[class="filter-list small"]  > :nth-child(2) [class="filter-item"]');}
    get searchResults() {return $('[class="repo-list"] > :nth-child(1) [class="v-align-middle"]');}
    get linkCareers() {return $('[href="/about/careers"]');}
    get openPositionsCareers() {return $('[href="#positions"]');}
    get listOpenPositionsCareers() {return $('[class="pb-md-6"]');}

    setEmailMain() {
        this.emailInputMain.setValue(faker.email);
     }

    signUpFoGithub(){
        this.singUpButton.click();
    } 

    searchKeyWord(){
        this.inputSearch.setValue('webdriverio');
        this.searchAllGithub.click();
    }

    searchResult(){
        this.itemTypeScript.click();
        this.searchResults.click();
    }

    listCareers() {
        this.linkCareers.click();
        this.openPositionsCareers.click();        
    }

}

module.exports = new Home();