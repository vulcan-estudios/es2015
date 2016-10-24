import { create } from '../tools/dom';

class Header {

  constructor (title = '', description = '') {

    this.el = create('header');

    const h1 = create('h1', title);
    this.el.appendChild(h1);

    const p = create('p', description);
    this.el.appendChild(p);
  }

}

export default Header;
