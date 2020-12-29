class Topics {
    
    
    get labelTopics() {return $('h1[class="h0-mktg"]');}

    checkLabelTopics(){
        const textTopics = this.labelTopics.getText();
        expect(this.labelTopics).toHaveText('Topics');
        console.log ('Page has label Topics : ' + textTopics);
        
    }

    

}
module.exports = new Topics();