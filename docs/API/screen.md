---
sidebar_position: 3
---

# Screen Control

nut.js allows searching and waiting for images on your screen to either verify certain conditions, or use it for further
processing.

## Configuration

The nut.js [screen](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html) comes with
a [config](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#config) object which allows to configure its behaviour.

### confidence

`screen.config.confidence` specifies the required matching percentage required to mark a possible candidate for a given
template image a match.

### autoHighlight

`screen.config.autoHighlight` is a boolean toggle which enables automated highlighting of image search results. This
will highlight the matching [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) by showing an opaque window.

### highlightDurationMs

`screen.config.highlightDurationMs` configures the duration in milliseconds a highlight window is shown.

### highlightOpacity

`screen.config.highlightOpacity` configures the opacity of highlight windows. Ranges from 0 (fully transparent) to 1 (
fully opaque).

### resourceDirectory

`screen.config.resourceDirectory` configures the location to load assets from
via [`imageResource`](../tutorial-screen/template-images.md#loading-images-from-resource-directory). This allows
configuring resource locations depending on e.g. the current operating system.

One could provide multiple folders containing platform specific template images and chose the correct resource directory
at runtime. Following this scheme loading of platform specific images would be possible without changes to the source.

## [`capture`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#capture)

`capture` allows you to capture a screenshot and store it to your filesystem.

## [`captureRegion`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#captureRegion)

`captureRegion` allows you to capture a screenshot of a desktop region and store it to your filesystem.

## [`grab`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#grab)

`grab` allows you to retrieve an [`Image`](../datatypes/image.md) containing the current screen content.

## [`grabRegion`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#grabRegion)

`grabRegion` allows you to an [`Image`](../datatypes/image.md) containing the current content of a desktop region.

## [`find`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#find)

`find` takes a template [`Image`](../datatypes/image.md) and tries to find a match on the main screen. It is possible to
override the [configured matching confidence](#confidence) and search region
providing [OptionalSearchParameters](https://nut-tree.github.io/apidoc/classes/optionalsearchparameters_class.OptionalSearchParameters.html). In case of a match,
the corresponding [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) on screen is returned.

```js
await mouse.move(straightTo(centerOf(screen.find(imageResource("image.png")))));
```

## [`findAll`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#findAll)

In contrast to [`find`](screen.md) returning only the most probable match, `findAll` takes a
template [`Image`](../datatypes/image.md) and returns a list of all matched occurrences on the main screen. It is
possible to override the [configured matching confidence](#confidence) and search region
providing [OptionalSearchParameters](https://nut-tree.github.io/apidoc/classes/optionalsearchparameters_class.OptionalSearchParameters.html). In case of a match,
the corresponding [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) on screen is returned.

```js
const matches = await screen.findAll(imageResource("image.png"));
for (const match of matches) {
    await mouse.move(straightTo(centerOf(match)));
}
```

## [`highlight`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#highlight)

When working with template images to e.g. move the mouse to certain positions it can be quite cumbersome to follow along
without visual clues.

`highlight` allows you to display an opaque window overlay which makes it easier to visually follow detection /
movement.

```js
await screen.highlight(screen.find("image.png"));
```

## [`on`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#on)

`on` allows you to register [callbacks](https://nut-tree.github.io/apidoc/modules/screen_class.html#FindHookCallback) which will be
executed once [find](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#find) returns a match for a given template image.

This way it's possible to repeatedly execute actions whenever a certain image is detected on screen.

## [`waitFor`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#waitFor)

Similar to [find](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#find), `waitFor` will search for a template image on a
systems main screen.

While [find](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#find) will fail immediately if no match is found, `waitFor`
allows to configure a timeout in milliseconds during which the screen will repeatedly be scanned for the template image.
The interval in milliseconds, in which the image search is carried out, is configurable as well. Its default value is set to 500ms. 
Once the configured timeout is reached with no match, `waitFor` will fail.

```js
await mouse.move(straightTo(centerOf(screen.waitFor(imageResource("image.png"), 3000, 500))));
```

## [`colorAt`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#colorAt)

`colorAt` will return RGBA color information at a specified pixel location.

For example, a black pixel would be represented as

```
RGBA { R: 0, G: 0, B: 0, A: 255 }
```

## [`width`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#width)

`width` returns the main screen's width in pixels.

## [`height`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#height)

`height` returns the main screen's height in pixels.
