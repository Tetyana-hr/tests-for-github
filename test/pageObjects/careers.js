class Careers{
    get openPositionsCareers() {return $('[href="#positions"]');}
    get listOpenPositionsCareers() {return $('[class="pb-md-6"]');}

    openPositionsClick(){
        this.openPositionsCareers.click(); 
    }

    listCareers(){
        let itemsCareers = this.listOpenPositionsCareers.getText();
        console.log('Careers list : ' + itemsCareers);
    }

}
module.exports = new Careers();