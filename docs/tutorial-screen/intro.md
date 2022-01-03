---
sidebar_position: 1
---

# Image Search

> "A picture is worth a thousand words"

When it comes to desktop automation, this holds true as well.
`nut.js` allows you to locate template images on your screen, a key capability for automation.

## ImageFinder Providers

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

[find](https://nut-tree.github.io/apidoc/classes/screen.html#find), [findAll](https://nut-tree.github.io/apidoc/classes/screen.html#findall) and [waitFor](https://nut-tree.github.io/apidoc/classes/screen.html#waitfor) are the main functions when it comes to image search.

While [find](https://nut-tree.github.io/apidoc/classes/screen.html#find) and [findAll](https://nut-tree.github.io/apidoc/classes/screen.html#findall) try to locate an image on screen at the very moment, [waitFor](https://nut-tree.github.io/apidoc/classes/screen.html#waitfor) will repeatedly scan the screen for the image until a certain timeout is reached.

By default, image search is carried out over multiple scales.

All above-mentioned functions are very powerful helpers when automating more complex tasks, so let's see how we can use them to our advantage!
