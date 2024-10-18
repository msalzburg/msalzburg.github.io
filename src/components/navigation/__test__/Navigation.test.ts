import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest"

import Navigation from "../Navigation.astro";

const container = await AstroContainer.create();

test('Navigation with entries property', async () => {    
    const navigationEntries = [
        {
            path: "/index",
            name: "Home"
        },
        {
            path: "/about",
            name: "About"
        }
    ]
     
    const result = await container.renderToString(Navigation, {props: {entries: navigationEntries}});

    expect(result).toContain("/index")
    expect(result).toContain("Home")
    expect(result).toContain("/about")
    expect(result).toContain("About")
})