---
part: API
title: Data Types
---

# Image

---

nut.js enables you to search for images on your screen.

To represent image data, nut.js provides the [`Image`](https://nut-tree.github.io/apidoc/classes/image_class.Image.html) datatype.

## Image Properties

---

An [`Image`](https://nut-tree.github.io/apidoc/classes/image_class.Image.html) holds all the data required to perform on-screen search.

That is:

- the image `width`
- the image `height`
- a buffer storing raw image `data`
- the amount of color `channels`
- an `id`

### ColorMode

---

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

---

nut.js provides helpers for image loading.

`loadImage` receives a full path to an image, loads it and returns an [`Image`](https://nut-tree.github.io/apidoc/classes/image_class.Image.html) in `BGR` color mode, representing this particular file.
The image id will automatically be set to the path it was loaded from.

### imageResources

---

Often times, images are loaded to be used as inputs to `Screen#find` or similar.
For such use cases, nut.js provides the `imageResources` helper function to load images relative to a configured resource directory.

### Remote Images

---

Especially when collaborating with others, keeping all image resources on disk can become cumbersome.
Remote image loading allows you to store and manage all your image assets in a central place.

[`fetchFromUrl`](https://nut-tree.github.io/apidoc/modules/imageResources_function.html#fetchFromUrl) allows you to pass in a URL to an image located on a remote host that will be fetched and returned as nut.js `Image`.

## Image saving

---

Similar to image loading, nut.js provides helpers for image saving as well.

`saveImage` receives an `ImageWriterParameters` object that consists of the following:

- `image`: The [`Image`](https://nut-tree.github.io/apidoc/classes/image_class.Image.html) to store
- `path`: The path where to store the [`Image`](https://nut-tree.github.io/apidoc/classes/image_class.Image.html)

nut.js will take care of possibly required color mode conversions, so you, as a user, do not have to care about it.

# Region

---

When searching for images on your screen, nut.js uses the [`Region`](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) datatype to represent a 2D area on your screen.

A [`Region`](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) holds a `left`, `top`, `width` and `height` property to represent its size and location, as well as an [`area()`](https://nut-tree.github.io/apidoc/classes/region_class.Region.html#area) method that calculates the area occupied by a particular [`Region`](https://nut-tree.github.io/apidoc/classes/region_class.Region.html).

## Sample

---

```js
const r = new Region(10, 100, 400, 300);

console.log(r);

const regionArea = r.area();
```

# Point

---

When navigating your screen, nut.js relies on the [`Point`](https://nut-tree.github.io/apidoc/classes/point_class.Point.html) datatype to represent points in 2D space.

A [`Point`](https://nut-tree.github.io/apidoc/classes/point_class.Point.html) is a simple data structure holding an `x` and `y` coordinate.

## Sample

---

```js
const p = new Point(10, 100);

console.log(p);
```
