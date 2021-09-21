import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SuperHero } from "../../types";

type SuperHeroContextType = {
  myTeam: SuperHero[];
};
const initialState: SuperHeroContextType = {
  myTeam: [],
};

const superHeroSlice = createSlice({
  name: "superHero",
  initialState,
  reducers: {
    addNewHero: (state, action: PayloadAction<SuperHero>) => {
      state.myTeam.push(action.payload);
    },
    deleteHero: (state, action: PayloadAction<string>) => {
      state.myTeam = state.myTeam.filter(
        (myTeam) => myTeam.id !== action.payload
      );
    },
  },
});
export const { addNewHero, deleteHero } = superHeroSlice.actions;
export const superHeroesReducer = superHeroSlice.reducer;
