import { html, nothing } from '../bundler.js';
import  * as recipeService from '../api/recipe.js';
import { commentsView } from './comments.js';

const detailsTemplate = (recipe, commentsSection, onDelete) => html`
<section id="details">
    <article>
        <h2>${recipe.name}</h2>
        <div class="band">
            <div class="thumb"><img src=${recipe.img}></div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    ${recipe.ingredients.map(ing => html`<li>${ing}</li>`)}
                </ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            ${recipe.steps.map(s => html`<p>${s}</p>`)}
        </div>
        ${recipe._isOwner ? html`<div class="controls">
            <a class="actionLink" href="/edit/${recipe._id}">✎ Edit</a>
            <a  @click=${onDelete} class="actionLink" href="javascript:void(0)">✖ Delete</a>
        </div>` : nothing};
        
    </article>
    <div>
    <div class="section-title"> Comments for ${recipe.name} </div>
    
    <article class="new-comment">
        <h2>New comment</h2>
        <form id="commentForm">
            <textarea name="content" placeholder="Type comment"></textarea>
            <input type="submit" value="Add comment">
        </form>
    </article>
    
    ${commentsSection}
</div>
</section>
`;

export async function detailsPage(ctx) {
    const recipe = ctx.recipe;

    const commentsSection = await commentsView(recipe._id)

    

    ctx.render(detailsTemplate(recipe, commentsSection, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this?');
        if (choice){
            await recipeService.deleteItem(ctx.params.id);
            ctx.page.redirect('/');
        }
    }
}