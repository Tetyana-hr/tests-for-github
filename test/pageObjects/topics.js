class Topics {
    get itemExploreGithub() {return $('[href="/explore"]');}
    get tabTopics() {return $('[data-selected-links="topics_path /topics/ /topics"]');}
    get labelTopics() {return $('h1[class="h0-mktg"]');}

    navigateToTopics(){
        this.itemExploreGithub.click();
        this.tabTopics.click();
      
    }

}
module.exports = new Topics();