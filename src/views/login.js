import { login } from '../api/user.js';
import { html } from '../bundler.js';
import { createSubmitHandler } from '../utils.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
    <article>
        <h2>Login</h2>
        <form @submit=${onSubmit} id="loginForm">
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input type="submit" value="Login">
        </form>
    </article>
</section>
`;

export function loginPage(ctx) {
    
    ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)));

}

async function onSubmit (ctx, data, e) {
    await login(data.email, data.password);
    e.target.reset();
    ctx.page.redirect('/catalog');

}