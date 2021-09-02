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

export type SuperHero = {
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
  alignment: "good" | "bad";
  powerstats: Powerstats;
};
