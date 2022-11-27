import { render } from "../bundler.js"; 

const root = document.querySelector('main');

function Renderer (content) {
    render(content, root);
}

export function decorateContext(ctx, next) {
    ctx.render = Renderer;
    next();
}
