class Explore{
    get tabTopics() {return $('[data-selected-links="topics_path /topics/ /topics"]');}

    goToTopicsTab(){
        this.tabTopics.waitForClickable();
        this.tabTopics.click();
    }
}
module.exports = new Explore();