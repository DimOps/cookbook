import *as recipeService from '../api/recipe.js'

export async function preload (ctx, next) {
    const recipeId = ctx.params.id;
    const recipe = await recipeService.getItemDetails(recipeId); 
    ctx.recipe = recipe;
    console.log(ctx)
    if (ctx.user && ctx.user.id == recipe._ownerId) {
        recipe._isOwner = true;
    }
    
    next();
}