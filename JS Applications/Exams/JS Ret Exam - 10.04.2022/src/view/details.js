import { html } from "../../node_modules/lit-html/lit-html.js";
import {
  deleteOfferById,
  getOfferById,
  getTotalApplications,
  didUserApplied,
  apply,
} from "../api/data.js";

const detailsTamplate = (
  p,
  isOwner,
  onDelete,
  isLoggedIn,
  totalCount,
  onDonate,
  didUserApply
) => html`
<section id="details-page">
<h1 class="title">Post Details</h1>

<div id="container">
    <div id="details">
        <div class="image-wrapper">
            <img src="${p.imageUrl}" alt="Material Image" class="post-image">
        </div>
        <div class="info">
            <h2 class="title post-title">${p.title}</h2>
            <p class="post-description">${p.description}</p>
            <p class="post-address">${p.address}</p>
            <p class="post-number">Phone number: ${p.phone}</p>
            <p class="donate-Item">Donate Materials: ${totalCount}</p>

            <div class="btns">
            ${isOwner
              ? html`<a href="/edit/${p._id}" class="edit-btn btn">Edit</a>
                <a href="javascript:void(0)" class="delete-btn btn" @click=${onDelete}>Delete</a>`
              :""}
              ${(() => {
                if (didUserApply == 0) {
                  if (isLoggedIn && !isOwner) {
                    return html`<a href="javascript:void(0)" class="donate-btn btn" @click=${onDonate}
                    id="donate-btn">Donate</a>`;
                  }
                }})()}
            </div>
        </div>
    </div>
</div>
</section>`;

    

export async function detailsPage(ctx) {
  const offerId = ctx.params._id;
  const offer = await getOfferById(offerId);
  const user = ctx.user;

  let userId;
  let totalCount;
  let didUserApply;

  if (user != null) {
    userId = user._id;
    didUserApply = await didUserApplied(offerId, userId);
  }

  const isOwner = user && offer._ownerId == user._id;
  const isLoggedIn = user !== undefined;

  totalCount = await getTotalApplications(offerId);
  ctx.render(
    detailsTamplate(
      p,
    isOwner,
    onDelete,
    isLoggedIn,
    totalCount,
    onDonate,
    didUserApply
    )
  );

  async function onDonate() {
    const donation = {
      offerId,
    };
    await apply(donation);

    totalCount = await getTotalApplications(offerId);
    didUserApply = await didUserApplied(offerId, userId);
    ctx.render(
      detailsTamplate(
        offer,
        isOwner,
        onDelete,
        isLoggedIn,
        totalCount,
        onDonate,
        didUserApplied
      )
    );
  }

  async function onDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await deleteOfferById(offerId);
      ctx.page.redirect("/");
    }
  }
}
