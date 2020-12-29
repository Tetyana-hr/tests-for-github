
const domains = ["ukr.net", "email.ua", "nv.ua", "meta.ua", "gmail.com"];


module.exports = function (){

    let randText = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    return {
        name: randText,
        email: randText + "@" + domains[rand(0, domains.length - 1)]
    }
}

function rand(min, max) {
    return (min + Math.random() * (max - min + 1)) | 0
   }