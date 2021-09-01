import axios from "axios";
import { MyTeam } from "../types";
const URL = `${process.env.REACT_APP_SUPER_HEROES_URL}${process.env.REACT_APP_SUPER_HEROES_API_TOKEN}`;

export function searchSuperHeroes(value: string): Promise<MyTeam[]> {
  return axios({
    method: "get",
    url: `${URL}/search/${value}`,
  }).then((response) => {
    if (response.data.error) return [];

    const superHeroes = response.data.results.map((item: any) => ({
      image: item.image.url,
      name: item.name,
      powerstats: item.powerstats,
      id: item.id,
      aliases: item.biography.aliases,
      fullName: item.biography["full-name"],
      height: item.appearance.height,
      weight: item.appearance.weight,
      work: item.work.base,
      eyeColor: item.appearance["eye-color"],
      hairColor: item.appearance["hair-color"],
    }));
    return superHeroes;
  });
}
