---
part: tutorials
title: On Screen Search
---

# Image Search

--- 

> "A picture is worth a thousand words"

When it comes to desktop automation, this holds true as well.
`nut.js` allows you to locate template images on your screen, a key capability for automation.

## ImageFinder Providers

--- 

To do so, we will have to install an additional package, providing the actual implementation to perform image comparison.
Otherwise, all functions relying on image matching will throw an error like `Error: No ImageFinder registered`.

One available option would be `@nut-tree/template-matcher`:

```bash
npm i @nut-tree/template-matcher
```

To use this provider package, simply require it in your code, e.g. `index.js`:

```js
const { screen, imageResource } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher"); // THIS IS NEW

(async () => {
  try {
    await screen.find(imageResource("img.png"));
  } catch (e) {
    console.error(e);
  }
})();
```

## Provided Functionality

--- 

 [find](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#find), [findAll](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#findAll) and [waitFor](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#waitFor) are the main functions when it comes to image search.

While [find](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#find) and [findAll](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#findAll) try to locate an image on screen at the very moment, [waitFor](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#waitFor) will repeatedly scan the screen for the image until a certain timeout is reached.

By default, image search is carried out over multiple scales.

All above-mentioned functions are very powerful helpers when automating more complex tasks, so let's see how we can use them to our advantage!

# Working with template images

--- 

In order to search for an image on your screen, we have to provide a template [`Image`](/API/datatypes).

These images can either be loaded via their full path and `loadImage`, or relative to a configurable [resource directory](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#config).

## Resource Directory

--- 

When working with a resource directory, you can reference template images by filename, omitting the full path.
However, when loading a template image, these filenames are relative to `screen.config.resourceDirectory`.

`screen.config.resourceDirectory = "/path/to/my/template/images"`

If not configured explicitly, `screen.config.resourceDirectory` is set to the current working directory.

## Loading Images from Resource Directory

--- 

Instead of using `loadImage`, so called `image resources` are loaded via `imageResource`.

## Fetch Images from a Remote Host

--- 

[`fetchFromUrl`](https://nut-tree.github.io/apidoc/modules/imageResources_function.html#fetchFromUrl) allows you to pass in a URL to an image located on a remote host that will be fetched and returned as nut.js `Image`.

# find

--- 

Template images are [`Images`](/API/datatypes) either directly loaded using their full path, relative to a configurable [resource directory](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#config) or from a remote host via [`fetchFromUrl`](https://nut-tree.github.io/apidoc/modules/imageResources_function.html#fetchFromUrl).

## finding images

--- 

Let's dissect how `screen.find` works by looking at a sample snippet:

```js {1,2,5,7}
const { screen, imageResource } = require("@nut-tree/nut-js");
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

Line 5 sets our `resourceDirectory`, although the most interesting thing happens in line 7: actually searching the image.

`screen.find` will scan your **main** screen for the provided template image and if it finds a match, it'll return the [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) it located the template image in.
Images are matched on a per-pixel basis.
The amount of matching pixels is configurable via the `confidence` property on the `config` object.
`confidence` is expected to be a value between 0 and 1, it defaults to 0.99 (which corresponds to a 99% match).

!> nut.js currently does not support multi-monitor setups

### The Cross-Platform Trick

--- 

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

--- 

In case we screwed up, nut.js will let us know by rejecting.

#### Wrong resource directory

--- 

`Searching for mouse.png failed. Reason: 'Error: Failed to load /foo/bar/mouse.png. Reason: 'Failed to load image from '/foo/bar/mouse.png''.'`

#### No match

--- 

`Searching for mouse.png failed. Reason: 'Error: No match with required confidence 0.99. Best match: 0 at (0, 0, 477, 328)'`

## Summary

--- 

- nut.js provides a `screen` instance to search for template images on your screen.
- The directory where to load your template images from is configurable via the `config` object.
- It will search your **main** screen for the template image and if it finds a match, it'll return the [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) it located the template image in.
- The amount of matching pixels is configurable via the `confidence` property on the `config` object.

# findAll

--- 

`findAll` is used very similarly to `find`.
The major difference between the two is the fact that `findAll` will return a list of all detected matches on your main screen.

Everything else mentioned for`find` applies to `findAll` as well.

# waitFor

--- 

Being able to locate images on our screen is a huge benefit when automating things, but in reality, we have to deal with timing.
`waitFor` is here to help by allowing us to specify a timeout in which we expect our template image to appear on screen!

Template images are [`Images`](/API/datatypes) either directly loaded using their full path, relative to a configurable [resource directory](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#config) or from a remote host via [`fetchFromUrl`](https://nut-tree.github.io/apidoc/modules/imageResources_function.html#fetchFromUrl).

## Waiting for images

--- 

Let's tweak the snippet used in the `find` example just a little:

```js {7}
const { screen, imageResource } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher");

(async () => {
    screen.config.resourceDirectory = "/resouce/path";
    try {
        const region = await screen.waitFor(imageResource("mouse.png"));
        console.log(region);
    } catch (e) {
        console.error(e);
    }
})();
```

`waitFor` basically does the exact same as `find`, but multiple times over a specified period of time.

It'll scan your main screen for the given template image, but if it fails to find it, it'll simply give it another shot.
The interval in which these retries happen is configurable as well.

```js {7}
const { screen, imageResource } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher");

(async () => {
    screen.config.resourceDirectory = "/resouce/path";
    try {
        const region = await screen.waitFor(imageResource("mouse.png"), 5000, 1000);
        console.log(region);
    } catch (e) {
        console.error(e);
    }
})();
```

In the above snippet, we tell `waitFor` to look for our template image for at most five seconds, retrying every second.

If it still couldn't locate the image after the configured timeout in milliseconds, it'll reject.
Otherwise, it'll return the [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) it located the image in, just like [find](screen/find.md).

### Troubleshooting

--- 

Everything mentioned on `find` applies to `waitFor` as well.

#### Timeout

--- 

`Action timed out after 5000 ms`

## Summary

--- 

- `waitFor` will repeatedly search your **main** screen for the template image and if it finds a match, it'll return the [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) it located the template image in.
- If it can't locate the image, it'll retry the search in configurable intervals until it hits the configured timeout in milliseconds.

# Cancelling waitFor

--- 

As we learned earlier, `waitFor` will repeatedly search our screen for a given template image.

This great flexibility does not come for free, so we might not want to wait for the timeout to fire before we can cancel the ongoing search.
nut.js follows the same approach to cancellation as the [browser fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#aborting_a_fetch), using an [AbortController](https://www.npmjs.com/package/node-abort-controller).

Before we can actually look at a sample, we will have to install an additional package to our project:

```shell
npm i node-abort-controller
```

Now, let's take a look at a (rather artificial) example:

```js {6}
const { screen, Region, imageResource } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher");
const { AbortController } = require("node-abort-controller");

(async () => {
    const controller = new AbortController();
    screen.waitFor(imageResource("test.png"), 5000, 1000, {abort: controller.signal});
    setTimeout(() => controller.abort(), 2000);
})();
```

We instantiate our [AbortController](https://www.npmjs.com/package/node-abort-controller) in line 6 and pass its `signal` as an [OptionalSearchParameter](https://nut-tree.github.io/apidoc/classes/optionalsearchparameters_class.OptionalSearchParameters.html) to [waitFor](screen/waitfor.md).

`waitFor` has a timeout of 5000 milliseconds configured, retrying after 1000 milliseconds, but after 2000 milliseconds, we call `abort()` on our [AbortController](https://www.npmjs.com/package/node-abort-controller), which will cancel the ongoing search:

```
Action aborted by signal
```

## Summary

--- 

- `waitFor` is cancelable using an [AbortController](https://www.npmjs.com/package/node-abort-controller).

# highlight

--- 

Especially during development, we might want to visually track what happens when executing our script.
When it comes to image search, it's one thing to see in e.g. the log that we found a match, but a visual indicator would be even better.

[highlight](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#highlight) is exactly this!

## Configuration

--- 

[highlight](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#highlight) works by overlaying a [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) of interest with an opaque highlight window.

Highlight duration and opacity are once again configurable properties on the `screen.config` object.

- [highlightDurationMs](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#config)
- [highlightOpacity](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#config)

## Highlighting regions

--- 

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

--- 

The way the API is structured, it's really easy to highlight regions located by e.g. [find](screen/find.md):

```js {5-7}
const { screen, imageResource } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher");

(async () => {
    screen.config.resourceDirectory = "/resouce/path";
    screen.config.highlightDurationMs = 3000;
    await screen.highlight(screen.find(imageResource("image.png")));
})();
```

However, manually adding highlights is not only cumbersome, but also requires additional effort in case we want to remove it again before running our script in production.

Therefore, nut.js provides an auto-highlight mechanism which is toggleable via the [`config` property](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#config).
Highlight during development, disable it in production!

```js {6}
const { screen, imageResource } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher");

(async () => {
    screen.config.resourceDirectory = "/resouce/path";
    screen.config.autoHighlight = true;
    screen.config.highlightDurationMs = 1500;
    await screen.find(imageResource("test.png"));
})();
```

With auto highlight turned on, we no longer have to care about manually highlighting `find` results.
Once `find` returns a valid [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html), it will be highlighted.
And since `waitFor` reuses `find`, auto-highlight works there as well!

## Summary

--- 

- nut.js provides a way to visually debug image search results.
- Both the highlight duration and the highlight window opacity are configurable via the `config` object.
- Auto highlight will automatically highlight results returned from `find`.

# Parameterize Search

--- 

`find`, `findAll` and `waitFor` accept [OptionalSearchParameters](https://nut-tree.github.io/apidoc/classes/optionalsearchparameters_class.OptionalSearchParameters.html) to fine-tune the search.

This allows to e.g. limit the search space to a certain portion of your screen:

```js
const { screen, Region, OptionalSearchParameters, imageResource } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher");
const { AbortController } = require("node-abort-controller");

(async () => {
    // Configure the postion and size of the area you wish Nut to search
    const searchRegion = new Region(10, 10, 500, 500);
    
    // Configure the confidence you wish Nut to have before finding a match
    const confidence = 0.88;
    
    // Configure whether Nut should try to match across multiple scales of Image
    const searchMultipleScales = false;
    
    // Configure an Abort controller so that you can cancel the find operation at any time
    const controller = new AbortController();
    const { signal } = controller;
    
    // Feed your parameters into the OptionalSearchParameters constructor to make sure they fit the spec
    const fullSearchOptionsConfiguration = new OptionalSearchParameters(searchRegion, confidence, searchMultipleScales, signal);
    
    // .find() will return the Region where it found a match based on your search parameters and provided Image data
    const matchRegion = await screen.find(imageResource("image.png"), fullSearchOptionsConfiguration);
    
    const cancelFindTimeout = setTimeout(() => {
      controller.abort();
    }, 5000);
    
    
})();
```
