import { html } from '../bundler.js';
import * as recipeService from '../api/recipe.js'

const catalogTemplate = (recipes) => html`
<section id="catalog">
    <div class="section-title">
        <form id="searchForm">
            <input type="text" name="search" value="">
            <input type="submit" value="Search">
        </form>
    </div>
    <header class="section-title"> 
        Page 1 of 1 
        <a class="pager" href="#">&lt;Prev</a>
        <a class="pager" href="#">Next&gt;</a>
    </header>
    
    ${recipes.map(previewTempalte)}
    

    <footer class="section-title"> Page 1 of 1 </footer>
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
    ctx.render(html`<p>Loading &hellip;</p>`)
    const recipes = await recipeService.getAll();
    ctx.render(catalogTemplate(recipes));

}