import { html } from '../bundler.js';

const detailsTemplate = () => html`
<section id="details">
    <article>
        <h2> Easy Lasagna </h2>
        <div class="band">
            <div class="thumb"><img src="/assets/lasagna.jpg"></div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li> 1 tbsp Ingredient 1 </li>
                    <li> 2 cups Ingredient 2 </li>
                    <li> 500 g Ingredient 3 </li>
                    <li> 25 g Ingredient 4 </li>
                </ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            <p>Prepare ingredients</p>
            <p>Mix ingredients</p>
            <p>Cook until done</p>
        </div>
        <div class="controls">
            <a class="actionLink" href="/edit/3987279d-0ad4-4afb-8ca9-5b256ae3b298">✎ Edit</a>
            <a class="actionLink" href="javascript:void(0)">✖ Delete</a>
        </div>
    </article>

    <div>
        <div class="section-title"> Comments for Grilled Duck Fillet </div>
        
        <article class="new-comment">
            <h2>New comment</h2>
            <form id="commentForm">
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
</section>
`;

export function detailsPage(ctx) {
    
    ctx.render(detailsTemplate());

}