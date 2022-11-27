import * as api from './api.js';

const endpoints = {
    recipes: '/data/recipes',
    recent: '/data/recipes',
    myItems: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
    create: '/data/catalog',
    edit: '/data/catalog/',
    delete: '/data/catalog/',
}

export async function getAll() {
    return api.get(endpoints.recipes);
}

async function getRecent() {
    return api.get(endpoints.recent);
}

export async function getItemDetails(id) {
    return api.get(endpoints.byId + id);
}

export async function getMyItems(userId) {
    return api.get(endpoints.myItems(userId));
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
