import { html } from '../bundler.js';
import { createSubmitHandler } from '../utils.js';
import  * as recipeService from '../api/recipe.js';

const editTemplate = (data, onSubmit) => html`
<section id="edit">
    <article>
        <h2>Edit Recipe</h2>
        <form @submit=${onSubmit} id="editForm">
        <input type="hidden" name="_id" .value="${data._id}">
            <label>Name: <input type="text" name="name" placeholder="Recipe name" .value="${data.name}"></label>
            <label>Image: <input type="text" name="img" placeholder="Image URL" .value="${data.img}"></label>
            <label class="ml">Ingredients: <textarea name="ingredients" placeholder="Enter ingredients on separate lines" .value="${data.ingredients}"></textarea></label>
            <label class="ml">Preparation: <textarea name="steps" placeholder="Enter preparation steps on separate lines" .value="${data.steps}"></textarea></label>
            <input type="submit" value="Save Changes">
        </form>
    </article>
</section>
`;

export async function editPage(ctx) {
    const recipeObj = await recipeService.getItemDetails(ctx.params.id);
    recipeObj.ingredients = recipeObj.ingredients.join('\n');
    recipeObj.steps = recipeObj.steps.join('\n');
    ctx.render(editTemplate(recipeObj, createSubmitHandler(ctx, onSubmit)));

}

async function onSubmit(ctx, data, e) {

    const recipeObj = await recipeService.editItem(ctx.params.id, {
        name: data.name,
        img: data.img,
        ingredients: data.ingredients.split('\n').map(ing => ing.trim()).filter(ing => ing != ''),
        steps: data.steps.split('\n').map(s => s.trim()).filter(s => s != ''),
    });
    
    e.target.reset();
    ctx.page.redirect(`/details/${recipeObj._id}`)
}