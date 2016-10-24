import i18n from '../i18n';
import data from '../data';
import Header from './Header';
import Card from './Card';
import { create } from '../tools/dom';

class App {

  constructor () {

    this.el = create('main');

    this.createHeader();
    this.createBody();
  }

  createHeader () {

    const title = i18n.get('title');
    const description = i18n.get('description');

    this.header = new Header(title, description);
    this.el.appendChild(this.header.el);
  }

  createBody () {

    this.cards = create('div');
    this.el.appendChild(this.cards);

    this.createLoader();

    data.fetch().then(list => {
      this.cards.innerHTML = '';
      list.forEach(item => this.createCard(item));
    });
  }

  createLoader () {
    const text = create('span', 'Loading...');
    this.cards.appendChild(text);
  }

  createCard (item) {

    const { name, description } = item;
    const card = new Card(name, description);

    this.cards.appendChild(card.el);
  }
}

export default App;
