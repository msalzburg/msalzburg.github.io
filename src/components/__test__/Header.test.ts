import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest"

import Header from "@components/Header.astro";

const container = await AstroContainer.create();

test('Header with content property', async () => {    
    const result = await container.renderToString(Header, {props: {content: "HeaderContent"}});
    
    expect(result).toContain("HeaderContent")
})