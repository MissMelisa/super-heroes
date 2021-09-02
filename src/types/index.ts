export type Credentials = {
  email: string;
  password: string;
};

export type Powerstats = {
  combat: number;
  durability: number;
  intelligence: number;
  power: number;
  speed: number;
  strength: number;
};
export type TeamSummary = {
  combat: number;
  durability: number;
  intelligence: number;
  power: number;
  speed: number;
  strength: number;
  weight: number;
  height: number;
  signOut?: () => void;
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
