import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllOffers } from "../api/data.js";

const dashboardTemplate = (posts) => html`<section id="dashboard-page">
<h1 class="title">All Posts</h1>
  ${posts.length == 0
    ? html`<h1 class="title no-posts-title">No posts yet!</h1>`
    : posts.map(
        (p) => html` <div class="all-posts">
        <div class="post">
            <h2 class="post-title">${p.title}</h2>
            <img class="post-image" src="${p.imageUrl}" alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${p._id}" class="details-btn btn">Details</a>
            </div>
        </div>`
      )}
</section>`;

export async function dashboardPage(ctx) {
  const offers = await getAllOffers();
  console.log(offers);
  ctx.render(dashboardTemplate(offers));
}


  
        // <div class="offer">
        //   <img src="${o.logo}" alt="example1" />
        //   <p><strong>Title: </strong><span class="title">${o.title}</span></p>
        //   <p><strong>Salary:</strong><span class="salary">${o.salary}</span></p>
        //   <a class="details-btn" href="/details/${o._id}">Details</a>
        // </div>`