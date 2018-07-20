

module.exports = function(callback){
    let source = document.createElement('script');
        source.src = "https://use.fontawesome.com/547c536a42.js"
        source.async = true;
        source.onload = function(){
            callback();
        };
}