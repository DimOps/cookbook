import { html, nothing } from '../bundler.js';
import * as recipeService from '../api/recipe.js'
import { createSubmitHandler, parseQuerystring } from '../utils.js';


const catalogTemplate = (recipes, page, pageCount, searchHandler) => html`
<section id="catalog">
    <div class="section-title">
        <form @submit=${searchHandler} id="searchForm">
            <input type="text" name="search" .value="">
            <input type="submit" value="Search">
        </form>
    </div>
    <header class="section-title"> 
        Page ${page} of ${pageCount}
        ${Number(page) != 1 ? html`<a class="pager" href="/catalog?page=${page - 1}">&lt;Prev</a>` : nothing}
        ${Number(page) < pageCount ? html`<a class="pager" href="/catalog?page=${page + 1}">Next&gt;</a>` : nothing}
        
    </header>
    
    ${recipes.map(previewTempalte)}
    

    <footer class="section-title"> Page ${page} of ${pageCount} </footer>
</section>
`;

const previewTempalte = (recipe) => html`
<a class="card" href="details/${recipe._id}">
    <article class="preview">
        <div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small"><img src=${recipe.img}></div>
    </article>
</a>
`;

export async function catalogPage(ctx) {
    ctx.render(html`<p>Loading &hellip;</p>`);
    const query = parseQuerystring(ctx.querystring);
    const page = Number(query.page) || 1;
    const {recipes, pageCount} = await recipeService.getAll(page);
    ctx.render(catalogTemplate(recipes, page, pageCount, createSubmitHandler(ctx, searchHandler)));
}

async function searchHandler (ctx, data, e) {
    const query = parseQuerystring(ctx.querystring);
    const page = Number(query.page) || 1;
    const {recipes, pageCount} = await recipeService.getAll(page, data.search);
    ctx.render(catalogTemplate(recipes, page, pageCount));
}