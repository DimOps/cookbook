import { html, nothing } from '../bundler.js';
import  * as recipeService from '../api/recipe.js';

const commentsTemplate = (comments) => html` 
<div class="comments">
    ${comments.length > 0 ? commentsList(comments) : nothing}
</div>
`;

const commentsList = (comments) => html`
    <ul>
        ${comments.map(commentParagraph)}
    </ul>
`;


const commentParagraph = (comment) => html`
    <li class="comment">
        <header>peter@abv.bg</header>
        <p>${comment.comment}</p>
    </li>
`;



export async function commentsView (recipeId) {
    const comments = await recipeService.getByRecipeId(recipeId);

    return commentsTemplate(comments);
} 



