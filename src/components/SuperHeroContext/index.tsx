import React, { useContext, useState } from "react";
import { SuperHero } from "../../types";

type SuperHeroContextType = {
  myTeam: SuperHero[];
  deleteHero: (id: string) => void;
  addNewHero: (hero: SuperHero) => void;
};

const initialContext: SuperHeroContextType = {
  myTeam: [],
  deleteHero: () => {},
  addNewHero: () => {},
};

export const SuperHeroesContext = React.createContext(initialContext);

export default function SuperHeroProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [myTeam, setMyTeam] = useState<SuperHero[]>([]);

  function addNewHero(hero: SuperHero) {
    setMyTeam((prevState) => {
      return [...prevState, hero];
    });
  }
  function deleteHero(id: string) {
    const newItems = myTeam.filter((myTeam) => myTeam.id !== id);
    setMyTeam(newItems);
  }

  return (
    <SuperHeroesContext.Provider value={{ myTeam, addNewHero, deleteHero }}>
      {children}
    </SuperHeroesContext.Provider>
  );
}
export function useSuperHero() {
  const context = useContext(SuperHeroesContext);

  if (!context) {
    throw new Error(
      "You must be within a SuperHeroProvider to use SuperHeroContext"
    );
  }

  return context;
}
