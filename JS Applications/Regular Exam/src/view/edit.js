import { html } from "../../node_modules/lit-html/lit-html.js";
import { editOfferById, getOfferById } from "../api/data.js";

const editTamplate = (offer, onSubmit) => html` <section id="edit">
<div class="form">
  <h2>Edit Album</h2>
  <form class="edit-form" @submit=${onSubmit}>
    <input type="text" name="singer" id="album-singer" value="${offer.singer}" placeholder="Singer/Band" />
    <input type="text" name="album" id="album-album" value="${offer.album} placeholder="Album" />
    <input type="text" name="imageUrl" id="album-img" value="${offer.imageUrl} placeholder="Image url" />
    <input type="text" name="release" id="album-release" value="${offer.release} placeholder="Release date" />
    <input type="text" name="label" id="album-label" value="${offer.label} placeholder="Label" />
    <input type="text" name="sales" id="album-sales" value="${offer.sales} placeholder="Sales" />

    <button type="submit">post</button>
  </form>
</div>
</section>`;

export async function editPage(ctx) {
  const offerId = ctx.params.id;

  const offer = await getOfferById(offerId);
  ctx.render(editTamplate(offer, onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const editOffer = {
      singer: formData.get("singer").trim(),
      album: formData.get("album").trim(),
      imageUrl: formData.get("imageUrl").trim(),
      release: formData.get("release").trim(),
      label: formData.get("label").trim(),
      sales: formData.get("sales").trim()
    };

    if (Object.values(editOffer).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await editOfferById(offerId, editOffer);
    event.target.reset();
    ctx.page.redirect(`/albums/${offerId}`);
  }
}
