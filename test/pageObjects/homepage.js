class Home {
    get itemWhy() {return $('//summary[contains(text(),"Why GitHub?")]');}
    get itemExplore() {return $('//summary[contains(text(),"Explore")]');}
    get itemPricing() {return $('//summary[contains(text(),"Pricing")]');}
    get menuWhy() {return $('[class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]');}
    get menuExplore() {return $('[class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]');}
    get menuPricing() {return $('[class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]');}
    get inputSearch() {return $('input[name="q"]');}
    get searchAllGithub() {return $('[class="js-jump-to-badge-search-text-global"]');}
    get linkTtpeScript() {return $('');}

    openMenuWhy(){
        this.itemWhy.moveTo(); 
        console.log('IS VISIBLE Why GitHub MENU ? ' + this.menuWhy.isDisplayedInViewport());  
    }
   
    openMenuExplore(){
        this.itemExplore.moveTo();
        console.log('IS VISIBLE Explore MENU ? ' + this.menuExplore.isDisplayedInViewport());  
    }

    openMenuPricing(){
        this.itemPricing.moveTo(); 
        console.log('IS VISIBLE PRICING MENU ? ' + this.menuPricing.isDisplayedInViewport());  
    }

    searchKeyWord(){
        this.inputSearch.setValue('webdriverio');
        this.searchAllGithub.click();
    }

}

module.exports = new Home();