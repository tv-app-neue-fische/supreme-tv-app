import { app } from './app';
import './index.scss';

const elements = app();
elements.forEach(element => {
  document.body.appendChild(element);
});
