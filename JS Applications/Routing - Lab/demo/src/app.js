import page from '../src/node_modules/page/page.mjs';

page('index.html', '/');
page('/', () => console.log('<h2>Home Page</h2>'));
page('/catalog', () => console.log('<h2>Catalog Page</h2>'));
page('/about', () => console.log('<h2>About Page</h2>'));

page.start();