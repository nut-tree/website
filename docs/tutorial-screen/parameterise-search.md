---
sidebar_position: 4
---

# Parameterize Search

Both [find](find.md) and [waitFor](waitfor.md) accept [OptionalSearchParameters](https://nut-tree.github.io/apidoc/classes/optionalsearchparameters.html) to fine-tune the search.

This allows to e.g. limit the search space to a certain portion of your screen:

```js {4-5}
const { screen, Region } = require("@nut-tree/nut-js");

(async () => {
    const searchRegion = new Region(10, 10, 500, 500);
    await screen.find("image.png", {searchRegion});
})();
```

It's also possible to configure the `confidence` required for valid matches:

```js {4}
const { screen, Region } = require("@nut-tree/nut-js");

(async () => {
    await screen.find("test.png", {confidence: 0.7});
})();
```

One parameter we want to take a close look at is the [abort signal](https://nut-tree.github.io/apidoc/classes/optionalsearchparameters.html#abort).