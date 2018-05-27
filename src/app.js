const Characters = require('./models/characters');
const ListView = require('./views/listView');

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('#characters');
  const listView = new ListView(listContainer);
  listView.receiveCharacters();

  const characters = new Characters;
  characters.getData();
})
