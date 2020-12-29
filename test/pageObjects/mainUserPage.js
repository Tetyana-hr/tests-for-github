class MainUserPage{
    get nickName() {return $('[itemprop="additionalName"]');}
   
 
    checkNickName(){
        this.nickName.getText();
        expect(this.nickName).toHaveText('gito-tito');
        
    }

}
module.exports = new MainUserPage();