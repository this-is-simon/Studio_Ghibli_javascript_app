const PubSub = require('../helpers/pub_sub');
const Characters = require('../models/characters');

const ListView = function(htmlElement){
  this.htmlElement = htmlElement;
}

ListView.prototype.receiveCharacters = function(){
  PubSub.subscribe('Characters:character-names-ready', (event) => {
    this.renderCharacters(event.detail);
  });
}

ListView.prototype.renderCharacters = function(characterData){
    characterData.forEach((character, index) => {
      const characterItem = this.createItem(character, index);
      this.htmlElement.appendChild(characterItem);
    });
}

ListView.prototype.createItem = function (character, id) {
  const characterItem = document.createElement('li');
  characterItem.classList.add('character-item');
  characterItem.textContent = character.name;
  characterItem.id = id;

  characterItem.addEventListener('click', (event) => {
    PubSub.publish('ListView:character-item-clicked', event.target.id);
  });

  return characterItem;
}

module.exports = ListView;
