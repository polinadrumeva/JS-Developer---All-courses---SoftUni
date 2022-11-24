import {html, render} from 'https://unpkg.com/lit-html?module';

const p = name => html`<p>Hello ${name}!</p>`;

// const name = 'Peter';
// const p = html`<p>Hello ${name}!</p>`;

// const p = document.createElement('p');
// p.textContent = 'Hello, World!'; 

render(p('world'), document.querySelector('main'));