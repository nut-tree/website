---
sidebar_position: 5
---

# Cancelling waitFor

As we learned earlier, [waitFor](waitfor.md) will repeatedly search our screen for a given template image.

This great flexibility does not come for free, so we might not want to wait for the timeout to fire before we can cancel the ongoing search.
nut.js follows the same approach to cancellation as the [browser fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#aborting_a_fetch), using an [AbortController](https://www.npmjs.com/package/node-abort-controller).

Before we can actually look at a sample, we will have to install an additional package to our project:

```shell
npm i node-abort-controller
```

Now, let's take a look at an (rather artificial) example:

```js
const { screen, Region } = require("@nut-tree/nut-js");
const AbortController = require("node-abort-controller");

(async () => {
    const controller = new AbortController();
    screen.waitFor("test.png", 5000, {abort: controller.signal});
    setTimeout(() => controller.abort(), 2000);
})();
```

We instantiate our [AbortController](https://www.npmjs.com/package/node-abort-controller) in line 5 and pass its `signal` as an [OptionalSearchParameter](https://nut-tree.github.io/apidoc/classes/optionalsearchparameters.html#abort) to [waitFor](waitfor.md).

`waitFor` has a timeout of 5000 milliseconds configured, but after 2000 milliseconds, we call `abort()` on our [AbortController](https://www.npmjs.com/package/node-abort-controller), which will cancel the ongoing search:

```
Action aborted by signal
```

## Summary

- `waitFor` cancelable using an [AbortController](https://www.npmjs.com/package/node-abort-controller)
