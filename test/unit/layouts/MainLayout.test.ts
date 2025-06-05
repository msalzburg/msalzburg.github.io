import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";

import MainLayout from "@layouts/MainLayout.astro";

const container = await AstroContainer.create();

test("MainLayout without properties", async () => {
  const result = await container.renderToString(MainLayout);

  // contains static navigation entries
  expect(result).toContain("/");
  expect(result).toContain("Home");
});

test("MainLayout with properties", async () => {
  const result = await container.renderToString(MainLayout, {
    props: { header: "HeaderContent", footer: "FooterContent" },
  });

  expect(result).toContain("HeaderContent");
  expect(result).toContain("FooterContent");
});
