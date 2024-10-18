import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest"

import Page from "@components/Page.astro";

const container = await AstroContainer.create();

test('Page with default slot', async () => {    
    const result = await container.renderToString(Page, {slots: {default: "PageSlot"} });
    
    expect(result).toContain("PageSlot")
})