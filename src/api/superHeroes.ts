import axios from "axios";
import { SuperHero } from "../types";
const URL = `${process.env.REACT_APP_SUPER_HEROES_URL}${process.env.REACT_APP_SUPER_HEROES_API_TOKEN}`;

export function searchSuperHeroes(value: string): Promise<SuperHero[]> {
  return axios({
    method: "get",
    url: `${URL}/search/${value}`,
  }).then((response) => {
    const superHeroes = response.data.results.map((item: any) => ({
      key: item.id,
      image: item.image.url,
      name: item.name,
      powerstats: item.powerstats,
      id: item.id,
      aliases: item.biography.aliases,
      fullName: item.biography["full-name"],
      height: item.appearance.height[1].replace("cm", ""),
      weight: item.appearance.weight[1].replace("kg", ""),
      alignment: item.biography.alignment,
      work: item.work.base,
      eyeColor: item.appearance["eye-color"],
      hairColor: item.appearance["hair-color"],
    }));
    return superHeroes;
  });
}
