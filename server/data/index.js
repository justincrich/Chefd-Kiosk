const foodie = require('./foodie.json');
const foodtrivia = require('./foodtrivia.json');

module.exports = function(type){
    switch(type){
        case 'foodie': return foodie;
        break;
        case 'foodtrivia': return foodtrivia;
    }
}