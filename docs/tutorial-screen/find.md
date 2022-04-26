---
sidebar_position: 3
---

# find

Template images are [`Images`](../datatypes/image.md) either directly loaded using their full path, or relative to a configurable [resource directory](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#config).
See [`working with template images`](template-images.md#working-with-template-images) for further info.

## finding images

Let's dissect how `screen.find` works by looking at a sample snippet:

```js {1,2,4,6}
const { screen } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher");

(async () => {
    screen.config.resourceDirectory = "/resouce/path";
    try {
        const region = await screen.find(imageResource("mouse.png"));
        console.log(region);
    } catch (e) {
        console.error(e);
    }
})();
```

First things first, we're setting up our imports on line 1 and 2.

Line 4 sets our `resourceDirectory`, although the most interesting thing happens in line 6: Actually searching the image.

`screen.find` will scan your **main** screen for the provided template image and if it finds a match, it'll return the [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) it located the template image in.
Images are matched on a per-pixel basis.
The amount of matching pixels is configurable via `confidence` property on the `config` object.
`confidence` is expected to be a value between 0 and 1, it defaults to 0.99 (which corresponds to a 99% match).

> nut.js currently does not support multi-monitor setups

### The Cross-Platform Trick

The resource directory might seem confusing at first, but it actually has a really nice side effect.
Imagine writing a cross-platform automation script where we're dealing with different UIs and therefore different template images.

Using the resource directory, we can configure our directory depending on our current platform:

```js
screen.config.resourceDirectory = `/path/to/the/project/${process.platform}`;
```

This way, we can keep all our platform-specific template images in separate folders, but we don't have to actually care in our code.

By using the platform dependent resource directory, we don't have to deal with platform specific filenames.
The same filename will load the correct template image for the current platform, no further action required! 💪

### Troubleshooting

In case we screwed up, nut.js will let us know by rejecting.

#### Wrong resource directory

`Searching for mouse.png failed. Reason: 'Error: Failed to load /foo/bar/mouse.png. Reason: 'Failed to load image from '/foo/bar/mouse.png''.'`

#### No match

`Searching for mouse.png failed. Reason: 'Error: No match with required confidence 0.99. Best match: 0 at (0, 0, 477, 328)'`

## Summary

- nut.js provides a `screen` instance to search for template images on your screen
- The directory where to load your template images from is configurable via `config` object
- It will search your **main** screen for the template image and if it finds a match, it'll return the [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) it located the template image in.
- The amount of matching pixels is configurable via the `confidence` property on the `config` object.
