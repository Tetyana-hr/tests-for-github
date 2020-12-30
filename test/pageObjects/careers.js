class Careers{
    get openPositionsCareers() {return $('[href="#positions"]');}
    get listOpenPositionsCareers() {return $('[class="pb-md-6"]');}

    openPositionsClick(){
        this.openPositionsCareers.click(); 
    }

}
module.exports = new Careers();