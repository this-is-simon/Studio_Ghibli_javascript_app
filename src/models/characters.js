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
  //TODO get character names and publish
  PubSub.publish('Characters:character-data-ready', characters);
}

module.exports = Characters;
