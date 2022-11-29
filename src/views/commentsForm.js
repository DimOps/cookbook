import { html, nothing } from '../bundler.js';
import  * as recipeService from '../api/recipe.js';
import { createSubmitHandler } from '../utils.js';


const formTemplate = () => html`
<article class="new-comment">
    <h2>New comment</h2>
    <form id="commentForm">
        <textarea name="content" placeholder="Type comment"></textarea>
        <input type="submit" value="Add comment">
    </form>
</article>
`;


export function commentFormView (ctx, recipeId) {
    if (ctx.user) {
        return formTemplate();
    } else {
        return nothing;
    }
}