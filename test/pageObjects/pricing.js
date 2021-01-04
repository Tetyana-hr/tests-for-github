class Pricing{
    get freeButton() {return $('[href="/join?plan=free&ref_cta=Join%2520for%2520free&ref_loc=topcarousel&ref_page=%2Fpricing&source=pricing-card-free"]');}
  


    joinForFreeButtonClick(){
        this.freeButton.waitForClickable();
        this.freeButton.click();
      }
}
module.exports = new Pricing();