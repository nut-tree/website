---
sidebar_position: 3
---

# Image

nut.js enables you to search for images on your screen.

To represent image data, nut.js provides the [`Image`](https://nut-tree.github.io/apidoc/classes/image_class.Image.html) datatype.

## Image Properties

An [`Image`](https://nut-tree.github.io/apidoc/classes/image_class.Image.html) holds all the data required to perform on-screen search.

That is:

- the image `width`
- the image `height`
- a buffer storing raw image `data`
- the amount of color `channels`
- an `id`

### ColorMode

Additionally, it also stores information about the order of color channels.
By default, nut.js images are stored using the `BGR` color mode.
This mode was chosen to align with a [well known computer vision library](https://docs.opencv.org/4.5.4/d4/da8/group__imgcodecs.html#ga288b8b3da0892bd651fce07b3bbd3a56).

However, since not every image processing library expects image data in `BGR` ordering, nut.js images provide methods to convert between `BGR` and `RGB` mode.

```js
const bgrImage = new Image(...);

const rgbImage = bgrImage.toRGB();
```

```js
const rgbImage = new Image(..., ColorMode.RGB);

const bgrImage = rgbImage.toBGR();
```

## Image loading

nut.js provides helpers for image loading.

`loadImage` receives a full path to an image, loads it and returns an [`Image`](https://nut-tree.github.io/apidoc/classes/image_class.Image.html) in `BGR` color mode, representing this particular file.
The image id will automatically be set to the path it was loaded from.

### imageResources

Often times, images are loaded to be used as inputs to `Screen#find` or similar.
For such use cases, nut.js provides the `imageResources` helper function to load images relative to a configured resource directory.

See [Loading Images from Resource Directory](../tutorial-screen/template-images.md#loading-images-from-resource-directory) and [the cross platform trick](../tutorial-screen/find.md#the-cross-platform-trick) for further information.

## Image saving

Similar to image loading, nut.js provides helpers for image saving as well.

`saveImage` receives an `ImageWriterParameters` object that consists of the following:

- `image`: The [`Image`](https://nut-tree.github.io/apidoc/classes/image_class.Image.html) to store
- `path`: The path where to store the [`Image`](https://nut-tree.github.io/apidoc/classes/image_class.Image.html)

nut.js will take care of possibly required color mode conversions, so you, as a user, do not have to care about it.
