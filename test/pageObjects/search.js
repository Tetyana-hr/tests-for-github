const explore = require("./explore")

class Search{
 
    get itemTypeScript() {return $('[class="filter-list small"]  > :nth-child(2) [class="filter-item"]');}
    get searchResults() {return $('[class="repo-list"] > :nth-child(1) [class="v-align-middle"]');}

    
    searchResult(){
        this.itemTypeScript.click();
        this.searchResults.click();
    }

}
module.exports = new Search();