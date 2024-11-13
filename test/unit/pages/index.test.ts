import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";

import Index from "@pages/index.astro";

const container = await AstroContainer.create();

test("Index page", async () => {
  const result = await container.renderToString(Index);

  // contains static header and footer contents
  expect(result).toContain("To whom it may concern");
  expect(result).toContain("made with ♥");
});
