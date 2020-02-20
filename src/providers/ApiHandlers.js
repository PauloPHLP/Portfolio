const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:6006/api/v1/articles"
});

export async function getArticles() {
  return api.get("", { })
  .then(res => res.data)
  .catch(err => err.response);
}