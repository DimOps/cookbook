import { html, nothing } from '../bundler.js';
import  * as recipeService from '../api/recipe.js';
import { createSubmitHandler } from '../utils.js';


const formTemplate = (onSubmit) => html`
<article class="new-comment">
    <h2>New comment</h2>
    <form @submit=${onSubmit} id="commentForm">
        <textarea name="content" placeholder="Type comment"></textarea>
        <input type="submit" value="Add comment">
    </form>
</article>
`;


export function commentFormView(ctx, isOwner) {
    
    if (ctx.user && !isOwner) {
        return formTemplate(createSubmitHandler(ctx, onSubmit));
    } else {
        return nothing;
    }
}

async function onSubmit(ctx, data, e) {
    const recipeId = ctx.params.id;

    await recipeService.postComment({
        recipeId,
        content: data.content
    });

    e.target.reset();
    ctx.page.redirect(`/details/${recipeId}`)
}