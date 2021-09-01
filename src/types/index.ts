export type Credentials = {
  email: string;
  password: string;
};

export type Powerstats = {
  combat: string;
  durability: string;
  intelligence: string;
  power: string;
  speed: string;
  strength: string;
};

export type Biography = {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
};
export type Appearance = {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
};

export type MyTeam = {
  fullName: string;
  id: string;
  weight: string;
  height: string;
  work: string;
  name: string;
  eyeColor: string;
  aliases: string[];
  hairColor: string;
  image: string;
  powerstats: Powerstats;
};
