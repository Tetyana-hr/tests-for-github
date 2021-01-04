class Footer{

    get linkCareers() {return $('[href="/about/careers"]');}

    linkCareersClick() {
        this.linkCareers.waitForClickable();
        this.linkCareers.click();     
    }

}
module.exports = new Footer();