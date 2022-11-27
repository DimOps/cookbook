import { page } from './bundler.js';

page('/', () => console.log('home'));
page('/catalog', () => console.log('catalog'));
page.start();