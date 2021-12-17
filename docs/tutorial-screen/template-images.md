---
sidebar_position: 2
---

# Working with template images

In order to search for an image on your screen, we have to provide a template [`Image`](../datatypes/image.md).

These images can either be loaded via their full path and [`loadImage`](../datatypes/image.md#image-loading), or relative to a configurable [resource directory](https://nut-tree.github.io/apidoc/classes/screen.html#config.resourcedirectory).

## Resource Directory

When working with a resource directory, you can reference template images by filename, omitting the full path.
However, when loading a template image, these filenames are relative to `screen.config.resourceDirectory`.

`screen.config.resourceDirectory = /path/to/my/template/images`

If not configured explicitly, `screen.config.resourceDirectory` is set to the current working directory.

## Loading Images from Resource Directory

Instead of using [`loadImage`](../datatypes/image.md#image-loading), so called `image resources` are loaded via `imageResource`.