import { html } from "../../node_modules/lit-html/lit-html.js";
import {
  deleteOfferById,
  getOfferById,
  getTotalApplications,
  didUserApplied,
  apply,
} from "../api/data.js";

const detailsTamplate = (
  offer,
  isOwner,
  onDelete,
  isLoggedIn,
  totalApplicationsCount,
  onClickApplication,
  didUserApply
) => html`<section id="details">
<div id="details-wrapper">
  <p id="details-title">Album Details</p>
  <div id="img-wrapper">
    <img src="${offer.imageUrl}" alt="example1" />
  </div>
  <div id="info-wrapper">
    <p><strong>Band:</strong><span id="details-singer">${offer.singer}</span></p>
    <p>
      <strong>Album name:</strong><span id="details-album">${offer.album}</span>
    </p>
    <p><strong>Release date:</strong><span id="details-release">${offer.release}</span></p>
    <p><strong>Label:</strong><span id="details-label">${offer.label}</span></p>
    <p><strong>Sales:</strong><span id="details-sales">${offer.sales}</span></p>
  </div>
  <div id="likes">Likes: <span id="likes-count">${totalApplicationsCount}</span></div>

  <div id="action-buttons">
    ${isOwner
    ? html` <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
    <a href="javascript:void(0)" id="delete-btn">Delete</a>`
    : ""}
    ${(() => {
      if (didUserApply == 0) {
        if (isLoggedIn && !isOwner) {
          return html`<a href="javascript:void(0)" id="like-btn"  @click=${onClickApplication}>Like</a>`
        }
      }
    })()};
  </div>
</div>
</section>`;


export async function detailsPage(ctx) {
  const offerId = ctx.params.id;
  const offer = await getOfferById(offerId);
  const user = ctx.user;

  let userId;
  let totalApplicationsCount;
  let didUserApply;

  if (user != null) {
    userId = user._id;
    didUserApply = await didUserApplied(offerId, userId);
  }

  const isOwner = user && offer._ownerId == user._id;
  const isLoggedIn = user !== undefined;

  totalApplicationsCount = await getTotalApplications(offerId);
  ctx.render(
    detailsTamplate(
      offer,
      isOwner,
      onDelete,
      isLoggedIn,
      totalApplicationsCount,
      onClickApplication,
      didUserApply
    )
  );

  async function onClickApplication() {
    const donation = {
      offerId,
    };
    await apply(donation);

    totalApplicationsCount = await getTotalApplications(offerId);
    didUserApply = await didUserApplied(offerId, userId);
    ctx.render(
      detailsTamplate(
        offer,
        isOwner,
        onDelete,
        isLoggedIn,
        totalApplicationsCount,
        onClickApplication,
        didUserApplied
      )
    );
  }

  document.getElementById("delete-btn").addEventListener('click', onDelete);
  async function onDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await deleteOfferById(offer._id);
      ctx.page.redirect("/");
    }
  }
}
