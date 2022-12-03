import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

import { logout as apiLogout } from "./api/api.js";
import { getUserData } from "./utility.js";
import { loginPage, registerPage } from "./view/auth.js";
import { homePage } from "./view/home.js";
import { dashboardPage } from "./view/dashboard.js";
import { detailsPage } from "./view/details.js";
import { editPage } from "./view/edit.js";
import { createPage } from "./view/create.js";

const main = document.getElementById("content");

setUserNav();

document.getElementById("logOutBtn").addEventListener("click", onLogout);

page(decorateContext);
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/dashboard", dashboardPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
 page("/create-offer", createPage);

page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, main);
  ctx.setUserNav = setUserNav;
  ctx.user = getUserData();

  next();
}

function setUserNav() {
  const userAsJson = sessionStorage.getItem("user");
  const user = userAsJson && JSON.parse(userAsJson);
  const guestDiv = document.getElementsByClassName("guest")[0];
  const userDiv = document.getElementsByClassName("user")[0];
    if (user != null) {
        userDiv.style.display = "inline-block";
        guestDiv.style.display = "none";
    } else {
        userDiv.style.display = "none";
        guestDiv.style.display = "inline-block";
    }
}

async function onLogout() {
  await apiLogout();
  setUserNav();
  page.redirect("/");
}
