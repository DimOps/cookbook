import { page } from './bundler.js';
import { decorateContext } from './middlewares/render.js';


import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

page(decorateContext);
page('/', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page.start();



