import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest"

import Tweets from "@components/Tweets.astro";

const container = await AstroContainer.create();

test('Tweets rendering', async () => {    
    const result = await container.renderToString(Tweets);
    
    expect(result).toContain("Tweets by mrsalzburg")
})