import { render } from "../bundler.js"; 

export function decorateContext(ctx, next) {
    const root = document.querySelector('main');
    ctx.render = (content) => render(content, root);
    next();
}
