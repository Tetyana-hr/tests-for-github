module.exports = {
    waitDomReady,
    waitAjaxLoad

};

function waitDomReady (timeout = 10000) {
    browser.waitUntil(function () {
            return browser.execute(() => document.readyState) === 'complete';
        },
        {
            timeout: timeout,
            timeoutMsg: '!!! Document doesnt ready !!!\n'
        });
    return true;
}

function waitAjaxLoad (){
        browser.executeAsync((done) => {
            if (window.jQuery) {
                return Promise.race([
                    new Promise(resolve => setTimeout(resolve, 2000)),
                    new Promise(resolve => jQuery(document).ajaxComplete(resolve))
                ])
                    .then(() => done())
            }
            return done();
        });
        return true;
}