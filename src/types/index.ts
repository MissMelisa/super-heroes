export type Credentials = {
  email: string;
  password: string;
};

export type SuperHeroesType = {
  image: ItemImage;
  name: string;
  powerstats: Powerstats;
};

export type Powerstats = {
  combat: string;
  durability: string;
  intelligence: string;
  power: string;
  speed: string;
  strength: string;
};

export type ItemImage = {
  url: string;
};
