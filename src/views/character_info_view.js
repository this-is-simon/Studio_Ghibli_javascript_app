const PubSub = require('../helpers/pub_sub');
const Characters = require('../models/characters');

const CharacterInfoView = function(characterContainer, character){
  this.characterContainer = characterContainer;
  this.character = character;
}

CharacterInfoView.prototype.receiveClickedCharacter = function() {
  PubSub.subscribe('Characters:character-info-ready', (event) => {
    this.character = event.detail;
    console.log('Clicked Character:', event.detail);
    this.render();
  });
}

CharacterInfoView.prototype.render = function(){
  this.characterContainer.innerHTML = '';
  //TODO render info about each character in div when clicked
  const characterContainer = document.querySelector('#character-info');
  const characterParagraph = document.createElement('p');
  characterParagraph.textContent = this.character;
  characterContainer.appendChild(characterParagraph);
}

module.exports = CharacterInfoView;
