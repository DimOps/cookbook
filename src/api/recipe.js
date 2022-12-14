import * as api from './api.js';

const pageSize = 3;

const endpoints = {
    recipes: `/data/recipes?sortBy=_createdOn%20desc&pageSize=${pageSize}&offset=`,
    count: '/data/recipes?count',
    search: '/data/recipes?where=',
    recent: '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3',
    byId: '/data/recipes/',
    create: '/data/recipes',
    edit: '/data/recipes/',
    delete: '/data/recipes/',
    postComment: '/data/comments',
    getAuthor: (recipeId) => `/data/comments?where=recipeId%3D%22${recipeId}%22&load=author%3D_ownerId%3Ausers`
}

export async function getAll(page = 1, search) {
    let urlRecipes = endpoints.recipes + ((page - 1) * pageSize);
    let urlCount = endpoints.count;

    if (search) {
        urlRecipes += '&where=' + encodeURIComponent(`name like "${search}"`);
        urlCount += '&where=' + encodeURIComponent(`name like "${search}"`);    
    }

    const [recipes, count] = await Promise.all([
        api.get(urlRecipes),
        api.get(urlCount)
    ])

    const pageCount = Math.ceil(count / pageSize); 

    return {recipes, pageCount};
}

export async function getRecent() {
    return api.get(endpoints.recent);
}

export async function getItemDetails(id) {
    return api.get(endpoints.byId + id);
}

export async function createItem(data) {
    return api.post(endpoints.create, data);
 } 

export async function editItem(id, data) {
    return api.put(endpoints.edit + id, data);
 } 

export async function deleteItem(id) {
    return api.del(endpoints.delete + id);
 } 

 export async function getByRecipeId(recipeId) {
    return api.get(endpoints.commentsById(recipeId));
}

export async function postComment(comment) {
    return api.post(endpoints.postComment, comment);
}

export async function getAuthor(recipeId) {
    return api.get(endpoints.getAuthor(recipeId));
}
