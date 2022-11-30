import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application-specific request
// get all listings
export async function getAllOffers() {
  return await api.get(host + "/data/posts?sortBy=_createdOn%20desc");
}

// get listing by id
export async function getOfferById(id) {
  return await api.get(host + `/data/posts/${id}`);
}

// create listing
export async function createOffer(offer) {
  return await api.post(host + "/data/offers", offer);
}

// edit listing by id
export async function editOfferById(id, offer) {
  return await api.put(host + `/data/offers/${id}`, offer);
}

// delete listing by id
export async function deleteOfferById(id) {
  return await api.del(host + `/data/posts/${id}`);
}

export async function apply(offerId) {
  return await api.post(host + `/data/applications`, offerId);
}

export async function getTotalApplications(offerId) {
  return await api.get(
    host +
      `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`
  );
}

export async function didUserApplied(offerId, userId) {
  return await api.get(
    host +
      `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
