import axios from "axios";
const URL = `${process.env.REACT_APP_SUPER_HEROES_URL}${process.env.REACT_APP_SUPER_HEROES_API_TOKEN}`;

export function searchSuperHeroes(value: string) {
  return axios({
    method: "get",
    url: `${URL}/search/${value}`,
  }).then(function (response) {
    const superHeroes = response.data.results;
    return superHeroes;
  });
}
