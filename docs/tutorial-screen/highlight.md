---
sidebar_position: 7
---

# highlight

Especially during development, we might want to visually track what happens when executing our script.
When it comes to image search, it's one thing to see in e.g. the log that we found a match, but a visual indicator would be even better.

[highlight](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#highlight) is exactly this!

## Configuration

[highlight](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#highlight) works by overlaying a [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) of interest with an opaque highlight window.

Highlight duration and opacity are once again configurable properties on the `screen.config` object.

- [highlightDurationMs](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#config)
- [highlightOpacity](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#config)

## Highlighting regions

[highlight](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#highlight) receives a [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) specifying the area to highlight.
It will then overlay the given region with an opaque highlight window.

```js {6}
const { screen, Region } = require("@nut-tree/nut-js");

(async () => {
    screen.config.highlightDurationMs = 3000;
    const highlightRegion = new Region(50, 100, 200, 300);
    await screen.highlight(highlightRegion);
})();
```

## Auto Highlighting

The way the API is structured, it's really easy to highlight regions located by e.g. [find](find.md):

```js {5-7}
const { screen } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher");

(async () => {
    screen.config.resourceDirectory = "/resouce/path";
    screen.config.highlightDurationMs = 3000;
    await screen.highlight(screen.find("image.png"));
})();
```

However, manually adding highlights is not only cumbersome, but also requires additional effort in case we want to remove it again before running our script in production.

Therefore, nut.js provides an auto-highlight mechanism which is toggleable via the [`config` property](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#config).
Highlight during development, disable it in production!

```js {6}
const { screen } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher");

(async () => {
    screen.config.resourceDirectory = "/resouce/path";
    screen.config.autoHighlight = true;
    screen.config.highlightDurationMs = 1500;
    await screen.find("test.png");
})();
```

With auto highlight turned on, we no longer have to care about manually highlighting [find](find.md) results.
Once [find](find.md) returns a valid [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html), it will be highlighted.
And since [waitFor](waitfor.md) reuses [find](find.md), auto-highlight works there as well!

## Summary

- nut.js provides a way to visually debug image search results.
- Both the highlight duration and the highlight window opacity are configurable via the `config` object.
- Auto highlight will automatically highlight results returned from [find](find.md).
