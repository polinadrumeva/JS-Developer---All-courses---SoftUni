import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllOffers } from "../api/data.js";

const dashboardTemplate = (offers) => html`<section id="dashboard">
<h2>Albums</h2>
<ul class="card-wrapper">
  ${offers.length == 0
    ? html`<h2>There are no albums added yet.</h2>
    </section>`
    : offers.map(
        (o) => html`<li class="card">
        <img src="${o.imageUrl}" alt="travis" />
        <p>
          <strong>Singer/Band: </strong><span class="singer">${o.singer}</span>
        </p>
        <p>
          <strong>Album name: </strong><span class="album">${o.album}</span>
        </p>
        <p><strong>Sales:</strong><span class="sales">${o.sales}</span></p>
        <a class="details-btn" href="/details/${o._id}">Details</a>
      </li>`
      )}
</section>`;


export async function dashboardPage(ctx) {
  const offers = await getAllOffers();
  console.log(offers);
  ctx.render(dashboardTemplate(offers));
}
