class MainUserPage{
    get nickName() {return $('[itemprop="additionalName"]');}
   
 
    getNickName(){
       return this.nickName.getText();
    }

}
module.exports = new MainUserPage();