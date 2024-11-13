import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";

import Footer from "@components/Footer.astro";

const container = await AstroContainer.create();

test("Footer with content property", async () => {
  const result = await container.renderToString(Footer, {
    props: { content: "FooterContent" },
  });

  expect(result).toContain("FooterContent");
});
