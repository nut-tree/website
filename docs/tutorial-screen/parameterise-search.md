---
sidebar_position: 8
---

# Parameterize Search

[find](find.md), [findAll](findall.md) and [waitFor](waitfor.md) accept [OptionalSearchParameters](https://nut-tree.github.io/apidoc/classes/optionalsearchparameters_class.OptionalSearchParameters.html) to fine-tune the search.

This allows to e.g. limit the search space to a certain portion of your screen:

```js {4-5}
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
