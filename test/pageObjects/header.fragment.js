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
    
 
  signUp(){
    this.signUpButton.click();
  }

  signIn(){
    this.signInButton.click();
  }

  userMenuClick(){
    this.userMenu.click();
  }

  itemProfilSelected(){
    this.itemProfile.click();
  }

  logout(){
    this.userMenu.click();
    this.signout.click();
}

openMenuWhy(){
  this.itemWhy.moveTo(); 
  console.log('IS VISIBLE Why GitHub MENU ? ' + this.menuWhy.isDisplayedInViewport());  
}

moveMenuTeam(){
  this.itemTeam.moveTo(); 
}

openMenuExplore(){
  this.itemExplore.moveTo();
  console.log('IS VISIBLE Explore MENU ? ' + this.menuExplore.isDisplayedInViewport());  
}

openMenuPricing(){
  this.itemPricing.moveTo(); 
  console.log('IS VISIBLE PRICING MENU ? ' + this.menuPricing.isDisplayedInViewport());  
}

itemPlansClick(){
  this.itemPlans.click();
}

itemExploreGithub(){
  this.itemExploreGithub.click();
}

}
module.exports = new Header();