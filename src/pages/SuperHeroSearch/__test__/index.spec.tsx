import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SuperHeroSearch from "..";
import { render } from "../../../utils/tests";

test("search hero", async () => {
  render(<SuperHeroSearch />);

  const buttonSearch = screen.getByRole("button", { name: /search/i });

  expect(buttonSearch).toBeVisible();
  const inputSearchT = screen.getByRole("textbox", {
    name: /hero/i,
  });
  userEvent.type(inputSearchT, "batman");
  userEvent.click(buttonSearch);

  const resultSearch = await screen.findAllByRole("listitem");
  expect(resultSearch).toHaveLength(2);
});
