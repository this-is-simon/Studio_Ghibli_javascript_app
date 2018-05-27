const Characters = require('./models/characters');
const ListView = require('./views/listView');
const CharacterInfoView = require('./views/character_info_view');

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('#characters');
  const listView = new ListView(listContainer);
  listView.receiveCharacters();

  const characterInfoContainer = document.querySelector('#character-info');
  const characterInfoView = new CharacterInfoView(characterInfoContainer);
  characterInfoView.receiveClickedCharacter();

  const characters = new Characters;
  characters.bindEvents();
  characters.getData();
})
