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


// ContinentView.prototype.addName = function () {
//   const name = document.createElement('h2');
//   name.classList.add('continent-name');
//   name.textContent = this.continent.name;
//   return name;
// };

// ContinentView.prototype.render = function () {
//   this.clearContainer();
//
//   const name = this.addName();
//   this.container.appendChild(name);
//
//   const countriesContainer = this.createCountriesContainer();
//   this.renderCountries(countriesContainer);
//   this.container.appendChild(countriesContainer);
// };
//
// ContinentView.prototype.addName = function () {
//   const name = document.createElement('h2');
//   name.classList.add('continent-name');
//   name.textContent = this.continent.name;
//   return name;
// };
//
// ContinentView.prototype.createCountriesContainer = function () {
//   const countriesContainer = document.createElement('div');
//   countriesContainer.id = 'countries';
//   return countriesContainer;
// };

module.exports = CharacterInfoView;
