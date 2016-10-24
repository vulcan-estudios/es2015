import 'babel-polyfill';
import App from './components/App';
import { status } from './tools/state';
import { select, render } from './tools/dom';

const container = select('#app');
const app = new App();

status();

render(container, app.el);
