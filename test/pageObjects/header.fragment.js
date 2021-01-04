class Header {
    get signUpButton() {return $('[class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1"]');}
    get signInButton() {return $('[class="HeaderMenu-link no-underline mr-3"]');}
    get signout() {return $('[class="dropdown-item dropdown-signout"]');}
 
    get userMenu() {return $('[aria-label="View profile and more"] [class="dropdown-caret"]')}
    get itemProfile() {return $('a.dropdown-item[href="/gito-tito"]');}
 
    get itemWhy() {return $('//summary[contains(text(),"Why GitHub?")]');}
    get menuWhy() {return $('[class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]');}

    get itemTeam() {return $('[class="d-lg-flex list-style-none"] [href="/team"]');}

    get itemExplore() {return $('//summary[contains(text(),"Explore")]');}
    get menuExplore() {return $('[class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]');}
    get itemExploreGithub() {return $('[href="/explore"]');}

    get itemPricing() {return $('//summary[contains(text(),"Pricing")]');}
    get menuPricing() {return $('[class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]');}
    get itemPlans() {return $('[class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"] [href="/pricing"]');}
    
    get inputSearch() {return $('input[name="q"]');}
    get searchAllGithub() {return $('[class="js-jump-to-badge-search-text-global"]');}
   
    get itemEnterprise() {return $('[class="d-lg-flex list-style-none"] [href="/enterprise"]');}

 
 
  signUp(){
    this.signUpButton.click();
  }

  signIn(){
    this.signInButton.waitForClickable();
    this.signInButton.click();
  }

  userMenuClick(){
    this.userMenu.click();
  }

  goToYourProfile(){
    this.itemProfile.waitForClickable();
    this.itemProfile.click();
  }

  logout(){
    this.userMenu.click();
    this.signout.waitForClickable();
    this.signout.click();
}

moveMenuTeam(){
  this.itemTeam.moveTo(); 
}

itemPlansClick(){
  this.itemPlans.waitForClickable();
  this.itemPlans.click();
}

itemExploreGithubClick(){
  this.itemExploreGithub.waitForClickable();
  this.itemExploreGithub.click();
}

searchKeyWord(value = 'webdriverio'){

  browser.waitUntil(() => {
    this.inputSearch.setValue(value);
    const _value = this.inputSearch.getValue();
    return _value === value;
  },
  {
    timeout: 1000
  }
  )

  this.searchAllGithub.click();
}

itemEnterpriseClick(){
  this.itemEnterprise.waitForClickable();
  this.itemEnterprise.click();
}

}
module.exports = new Header();