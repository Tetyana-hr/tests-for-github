const explore = require("./explore")

class Search{
 
    get itemTypeScript() {return $('a[href*="TypeScript"]');}
    get searchResults() {return $('ul.repo-list a[href*="/webdriverio"]:first-child');}
    
    searchResult(){
            browser.waitUntil(
                () => this.itemTypeScript.isDisplayedInViewport(),
                {timeout: 3000}
            );
            browser.waitUntil(
                () => {
                    this.itemTypeScript.click();
                    const classValue = this.itemTypeScript.getAttribute('class');
                    return classValue.includes('selected');
                },
                {timeout: 3000}
            );
            this.searchResults.waitForClickable({timeout: 1000});
            this.searchResults.click();
            }
}
module.exports = new Search();