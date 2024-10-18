import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest"

import About from "../about.astro";

const container = await AstroContainer.create();

test('About page', async () => {
    const result = await container.renderToString(About);

    // contains static header and footer contents
    expect(result).toContain("About")
    expect(result).toContain("made with ♥")

    expect(result).toContain("Mr. Salzburg")
    expect(result).toContain("Hamburg, Germany")
})