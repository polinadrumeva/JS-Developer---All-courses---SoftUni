import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAllOffers() {
  return await api.get(host + "/data/albums?sortBy=_createdOn%20desc");
}

export async function getOfferById(id) {
  return await api.get(host + `/data/albums/${id}`);
}


export async function createOffer(offer) {
  return await api.post(host + "/data/albums", offer);
}


export async function editOfferById(id, offer) {
  return await api.put(host + `/data/albums/${id}`, offer);
}


export async function deleteOfferById(id) {
  return await api.del(host + `/data/albums/${id}`);
}

export async function apply(_offerId) {
  return await api.post(host + `/data/likes`,_offerId);
}

export async function getTotalApplications(_offerId) {
  return await api.get(
    host +
      `/data/likes?where=albumId%3D%22${_offerId}%22&distinct=_ownerId&count`
  );
}

export async function didUserApplied(_id, userId) {
  return await api.get(
    host +
      `/data/likes?where=albumId%3D%22${_id}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
