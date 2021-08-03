---
sidebar_position: 3
---

# waitFor

Being able to locate images on our screen is a huge benefit when automating things, but in reality, we have to deal with timing.
`waitFor` is here to help by allowing us to specify a timeout in which we expect our template image to appear on screen!

## Resource Directory

Just like [find](https://nut-tree.github.io/apidoc/classes/screen.html#find), [waitFor](https://nut-tree.github.io/apidoc/classes/screen.html#waitfor) uses the same mechanism to configure its [resource directory](https://nut-tree.github.io/apidoc/classes/screen.html#config.resourcedirectory).

Please check [the find docs](find.md) to learn more about the resource directory.

## Waiting for images

Let's tweak the snippet used on [find](find.md) just a little:

```js {6}
const { screen } = require("@nut-tree/nut-js");

(async () => {
    screen.config.resourceDirectory = "/resouce/path";
    try {
        const region = await screen.waitFor("mouse.png");
        console.log(region);
    } catch (e) {
        console.error(e);
    }
})();
```

`waitFor` basically does the exact same as [find](find.md), but multiple times over a specified period of time.

It'll scan your main screen for the given template image, but if it fails to find it, it'll simply give it another shot after 500 milliseconds.
If it still couldn't locate the image after the configured timeout in milliseconds, it'll reject.
Otherwise, it'll return the [Region](https://nut-tree.github.io/apidoc/classes/region.html) it located the image in, just like [find](find.md).

### Troubleshooting

Everything mentioned on [find](find.md) applies to `waitFor` as well.

#### Timeout

`Action timed out after 5000 ms`

## Summary

- `waitFor` will repeatedly search your **main** screen for the template image and if it finds a match, it'll return the [Region](https://nut-tree.github.io/apidoc/classes/region.html) it located the template image in.
- If it can't locate the image, it'll retry the search in intervals of 500 milliseconds until it hits the configured timeout in milliseconds.
