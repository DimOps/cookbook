import * as api from './api.js';

const endpoints = {
    recipes: '/data/recipes',
    recent: '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3',
    byId: '/data/recipes/',
    create: '/data/recipes',
    edit: '/data/recipes/',
    delete: '/data/recipes/',
}

export async function getAll() {
    return api.get(endpoints.recipes);
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
