import * as api from './api.js';

const endpoints = {
    recipes: '/data/recipes',
    recent: '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3',
    create: '/data/catalog',
    edit: '/data/catalog/',
    delete: '/data/catalog/',
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
