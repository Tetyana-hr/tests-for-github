class MainUserPage{
    get nickName() {return $('[itemprop="additionalName"]');}
}
module.exports = new MainUserPage();