import { page } from './bundler.js';
import { updateNav } from './middlewares/navbar.js';
import { decorateContext } from './middlewares/render.js';


import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

page(updateNav);
page(decorateContext);
page('/', homePage);
page('/catalog', catalogPage);
page('/details/:id', detailsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/edit/:id', editPage);

page.start();



