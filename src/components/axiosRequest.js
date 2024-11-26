import axios from "axios";

const API_KEY = "gvUmmeYLqXEgCY0YfXHJJ4J7MsepO77oAl8WPPoEDoI";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 12,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`?query=${query}&page=${page}`);
  return data;
};
