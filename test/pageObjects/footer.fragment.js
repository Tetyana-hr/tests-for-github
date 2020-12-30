class Footer{

    get linkCareers() {return $('[href="/about/careers"]');}

    linkCareersClick() {
        this.linkCareers.click();     
    }

}
module.exports = new Footer();