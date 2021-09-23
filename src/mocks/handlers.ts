// src/mocks/handlers.js
import { rest } from "msw";
import { defaultResultAPI } from "./data";

export const handlers = [
  rest.get("*/search/:hero", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: defaultResultAPI,
      })
    );
  }),
];
