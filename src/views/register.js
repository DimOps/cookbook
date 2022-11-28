import { html } from '../bundler.js';
import { register } from '../api/user.js';
import { createSubmitHandler } from '../utils.js';

const registerTemplate = (onSubmit) => html`
<section id="register">
    <article>
        <h2>Register</h2>
        <form @submit=${onSubmit} id="registerForm">
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="rePass"></label>
            <input type="submit" value="Register">
        </form>
    </article>
</section>
`;

export function registerPage(ctx) {
    
    ctx.render(registerTemplate(createSubmitHandler(ctx, onSubmit)));

}

async function onSubmit (ctx, data, e) {

    try{
        if (data.email == '' || data.password == '') {

            throw alert('All fields are required!')        
        }
        if (data.password != data.rePass) {
            throw alert('Passwords don\'t match!')
        }

        await register(data.email, data.password);
        e.target.reset();
        ctx.page.redirect('/catalog');
    } catch (err) {
        throw err;
    }
}