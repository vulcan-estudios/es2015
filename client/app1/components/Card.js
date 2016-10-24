import { italic } from '../tools/filter';
import { create } from '../tools/dom';

class Card {

  constructor (title = '', description = '') {

    this.el = create('article');

    const hr = create('hr');
    this.el.appendChild(hr);

    const h2 = create('h2', title);
    this.el.appendChild(h2);

    const p = create('p', italic(description));
    this.el.appendChild(p);
  }

}

export default Card;
