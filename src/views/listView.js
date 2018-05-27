const PubSub = require('../helpers/pub_sub');
const Characters = require('../models/characters');

const ListView = function(htmlElement){
  this.htmlElement = htmlElement;
}

ListView.prototype.receiveCharacters = function(){
  PubSub.subscribe('Characters:character-data-ready', (event) => {
    console.log('event details:', event.detail);
  });
}

module.exports = ListView;
