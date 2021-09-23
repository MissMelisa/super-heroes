import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import SuperHeroSearch from "..";
import { badHeroesFull, goodHeroesFull } from "../../../mocks/data";
import { server } from "../../../mocks/server";
import { SuperHero } from "../../../types";
import { render } from "../../../utils/tests";

test("search hero", async () => {
  const { history } = render(<SuperHeroSearch />, {}, "/search-hero");

  const buttonSearch = screen.getByRole("button", { name: /search/i });

  expect(buttonSearch).toBeVisible();
  const inputSearchT = screen.getByRole("textbox", {
    name: /hero/i,
  });
  userEvent.type(inputSearchT, "batman");
  userEvent.click(buttonSearch);

  const resultSearch = await screen.findAllByRole("listitem");
  expect(resultSearch).toHaveLength(2);

  const buttonAddSuperHero = within(resultSearch[0]).getByRole("button");

  userEvent.click(buttonAddSuperHero);
  expect(history.location.pathname).toEqual("/");
});

test("display error if hero is already in the team", async () => {
  const myTeam = [
    {
      id: "69",
      name: "Batman",
    } as SuperHero,
  ];
  const { history } = render(
    <SuperHeroSearch />,
    {
      preloadedState: { superHeroes: { myTeam } },
    },
    "/search-hero"
  );

  const buttonSearch = screen.getByRole("button", { name: /search/i });

  const inputSearchT = screen.getByRole("textbox", {
    name: /hero/i,
  });
  userEvent.type(inputSearchT, "batman");

  userEvent.click(buttonSearch);

  const resultSearch = await screen.findAllByRole("listitem");
  const buttonAddSuperHero = within(resultSearch[0]).getByRole("button");

  userEvent.click(buttonAddSuperHero);

  await screen.findByText(/this hero is in your team/i);
  expect(history.location.pathname).toEqual("/search-hero");
});

test("display error when your team is full", async () => {
  const myTeam = [
    {
      key: "71",
      name: "Batman II",
      id: "71",
      alignment: "good",
    },
    {
      key: "3",
      name: "Abin Sur",
      id: "3",
      alignment: "good",
    },
    {
      key: "4",
      name: "Abomination",
      id: "4",
      alignment: "bad",
    },
    {
      key: "2",
      name: "Abe Sapien",
      id: "2",
      alignment: "good",
    },
    {
      key: "18",
      name: "Alien",
      id: "18",
      alignment: "bad",
    },
    {
      key: "299",
      name: "Green Goblin",
      id: "299",
      alignment: "bad",
    },
  ];
  const { history } = render(
    <SuperHeroSearch />,
    { preloadedState: { superHeroes: { myTeam } } },
    "/search-hero"
  );

  const buttonSearch = screen.getByRole("button", { name: /search/i });

  const inputSearchT = screen.getByRole("textbox", {
    name: /hero/i,
  });
  userEvent.type(inputSearchT, "batman");

  userEvent.click(buttonSearch);

  const resultSearch = await screen.findAllByRole("listitem");
  const buttonAddSuperHero = within(resultSearch[0]).getByRole("button");

  userEvent.click(buttonAddSuperHero);

  await screen.findByText(/your team is full/i);
  expect(history.location.pathname).toEqual("/search-hero");
});

test("display error when your have 3 bad heroes", async () => {
  const myTeam = [
    {
      key: "3",

      name: "Abin Sur",

      id: "3",

      alignment: "good",
    },
    {
      key: "4",

      name: "Abomination",

      id: "4",

      alignment: "bad",
    },
    {
      key: "2",

      name: "Abe Sapien",

      id: "2",

      alignment: "good",
    },
    {
      key: "18",

      name: "Alien",

      id: "18",

      alignment: "bad",
    },
    {
      key: "299",

      name: "Green Goblin",

      id: "299",

      alignment: "bad",
    },
  ];

  server.use(
    rest.get("*/search/:hero", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          results: badHeroesFull,
        })
      );
    })
  );

  const { history } = render(
    <SuperHeroSearch />,
    { preloadedState: { superHeroes: { myTeam } } },
    "/search-hero"
  );

  const buttonSearch = screen.getByRole("button", { name: /search/i });

  const inputSearchT = screen.getByRole("textbox", {
    name: /hero/i,
  });
  userEvent.type(inputSearchT, "Darth");

  userEvent.click(buttonSearch);

  const resultSearch = await screen.findAllByRole("listitem");
  const buttonAddSuperHero = within(resultSearch[0]).getByRole("button");

  userEvent.click(buttonAddSuperHero);

  await screen.findByText(/you have 3 bad heroes/i);
  expect(history.location.pathname).toEqual("/search-hero");
});

test("display error when your have 3 good heroes", async () => {
  const myTeam = [
    {
      key: "3",
      name: "Abin Sur",
      id: "3",
      alignment: "good",
    },
    {
      key: "2",
      name: "Abe Sapien",
      id: "2",
      alignment: "good",
    },
    {
      key: "4",
      name: "super Meli",
      id: "4",
      alignment: "good",
    },
  ];

  server.use(
    rest.get("*/search/:hero", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          results: goodHeroesFull,
        })
      );
    })
  );

  const { history } = render(
    <SuperHeroSearch />,
    { preloadedState: { superHeroes: { myTeam } } },
    "/search-hero"
  );

  const buttonSearch = screen.getByRole("button", { name: /search/i });

  const inputSearchT = screen.getByRole("textbox", {
    name: /hero/i,
  });
  userEvent.type(inputSearchT, "Gamora");

  userEvent.click(buttonSearch);

  const resultSearch = await screen.findAllByRole("listitem");
  const buttonAddSuperHero = within(resultSearch[0]).getByRole("button");

  userEvent.click(buttonAddSuperHero);

  await screen.findByText(/you have 3 good heroes/i);
  expect(history.location.pathname).toEqual("/search-hero");
});
