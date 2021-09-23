import { screen } from "@testing-library/react";
import Home from "../../Home";
import userEvent from "@testing-library/user-event";
import { SuperHero } from "../../../types";
import { render } from "../../../utils/tests";

const myTeam: SuperHero[] = [
  {
    id: "69",
    name: "Batman",
    fullName: "Dick Grayson",
    work: "",
    powerstats: {
      intelligence: 81,
      strength: 40,
      speed: 29,
      durability: 55,
      power: 64,
      combat: 90,
    },
    aliases: [
      "Batman II",
      "The Tomorrow Knight",
      "The second Dark Knight",
      "The Dark Knight of Tomorrow",
      "Batman Beyond",
    ],
    alignment: "good",

    height: "178 cm",
    weight: "77 kg",
    eyeColor: "Blue",
    hairColor: "Black",
    image: "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg",
  },
];

test("team detail list", async () => {
  render(<Home />, { preloadedState: { superHeroes: { myTeam } } });

  const summaryTeamList = screen.getAllByRole("listitem");
  expect(summaryTeamList).toHaveLength(12);

  const cardSuperHero = screen.getByRole("listbox");
  expect(cardSuperHero).toBeVisible();

  const alertTeamsType = await screen.findByRole("alert");
  expect(alertTeamsType).toBeVisible();

  const buttonSeeMore = screen.getByRole("button", {
    name: /plus/i,
  });

  userEvent.click(buttonSeeMore);
});

test("add a superHero", async () => {
  const { history } = render(<Home />);

  const buttonAdd = screen.getByRole("button", {
    name: /plus/i,
  });
  userEvent.click(buttonAdd);
  expect(history.location.pathname).toEqual("/search-hero");
});
