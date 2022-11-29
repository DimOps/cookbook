import { html } from '../bundler.js';
import  * as recipeService from '../api/recipe.js';

const commentsTemplate = (recipe, publisher) => html`
<div>
    <div class="section-title"> Comments for ${recipe.name} </div>
    
    <article class="new-comment">
        <h2>New comment</h2>
        <form @submit=${onSubmit} id="commentForm">
            <textarea name="content" placeholder="Type comment"></textarea>
            <input type="submit" value="Add comment">
        </form>
    </article>
    
    <div class="comments">
        <ul>
        <li class="comment">
            <header>peter@abv.bg</header>
            <p>Great recipe!</p>
        </li>
        </ul>
    </div>
</div>
`;



