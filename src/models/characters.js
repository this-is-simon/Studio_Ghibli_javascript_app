const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Characters = function(){
  this.characters = []
}

Characters.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://ghibliapi.herokuapp.com/people');
  requestHelper.get((data) => this.handleDataReady(data));
};

Characters.prototype.handleDataReady = function(characters) {
  //get character names and publish
  const characterNames = this.getCharacterNames(characters);
  PubSub.publish('Characters:character-names-ready', characters);
  console.log('Character Names:', characterNames);
}

Characters.prototype.getCharacterNames = function (characters) {
  return characters.map(character => character.name).filter((character, index, characters) => characters.indexOf(character) === index);
}

module.exports = Characters;
