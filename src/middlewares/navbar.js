const links = {
    '/catalog': document.getElementById('catalogLink'),
    '/create': document.getElementById('createLink'),
    '/login': document.getElementById('loginLink'),
    '/register': document.getElementById('registerLink')
}

export function updateNav(ctx, next) {
    Object.values(links).forEach(link => link.classList.remove('active'));
    const current = links[ctx.pathname];
    if (current) {
        current.classList.add('active');
    }
    next();
}