import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";

import NavigationEntry from "@components/navigation/NavigationEntry.astro";

const container = await AstroContainer.create();

test("NavigationEntry with content property", async () => {
  const navigationEntry = {
    path: "/index",
    name: "Home",
  };

  const result = await container.renderToString(NavigationEntry, {
    props: { entry: navigationEntry },
  });

  expect(result).toContain("/index");
  expect(result).toContain("Home");
});
