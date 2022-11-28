import { showHome } from "./home.js";


const main = document.getElementById('mainView');

const homeView = document.getElementById('homeView');
const registerView = document.getElementById('registerView');
const loginView = document.getElementById('loginView');
const dashboard = document.getElementById('dashboard-holder');
const detailsView = document.getElementById('detailsView');
const createView = document.getElementById('createView');

const defaultSection = document.getElementById('defaultSection').remove();

const links = {
    "/": showHome,
    "/catalog": loginView, 
    "/login": loginView, 
    "/register": registerView,
    "/details": detailsView, 
    "/create": createView
}

const context = {showView};
window.showHome = showHome(context);

function showView(section) {
    main.replaceChild(section);
}