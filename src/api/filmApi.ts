import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/502356",
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization: process.env.BEARER_KEY,
  },
};

export async function getFilmDetails(movieId: number) {
  const result = await axios.request({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: process.env.BEARER_KEY,
    },
  });

  return result.data;
}

export async function getFilmCredits(movieId: number) {
  const result = await axios.request({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: process.env.BEARER_KEY,
    },
  });

  return result.data;
}
