---
sidebar_position: 1
---

## Usage

[`getActiveWindow`](https://nut-tree.github.io/apidoc/interfaces/window_api_interface.WindowApi.html#getActiveWindow) allows you to get a [`window`](https://nut-tree.github.io/apidoc/classes/window_class.Window.html) reference of the system's focused window at the moment of the function call.
[`getActiveWindow`](https://nut-tree.github.io/apidoc/interfaces/window_api_interface.WindowApi.html#getActiveWindow) will return as a `Promise`.

```js {4}
const { getActiveWindow } = require('@nut-tree/nut-js');

(async () => {
    const windowRef = await getActiveWindow();
})();

```
Now logging this alone wouldn't be very useful, remember that it's simply a reference:

```js
// source:
//  ...
    const windowRef = await getActiveWindow();
    console.log(windowRef);
//  ...

// output:
Window {
  providerRegistry: DefaultProviderRegistry {
  // ...
  },
  windowHandle: 2165090
}
```

Instead, we want to take advantage of our window's [`title`](https://nut-tree.github.io/apidoc/classes/window_class.Window.html#title) and [`region`](https://nut-tree.github.io/apidoc/classes/window_class.Window.html#region)  properties. Be careful though, these are [`getter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) properties that each return a `Promise` instead of a plain value - so we must use `await` again:

```js {5,6}
const { getActiveWindow } = require('@nut-tree/nut-js');

(async () => {
    const windowRef = await getActiveWindow();
    const title = await windowRef.title
    const region = await windowRef.region
    console.log(title, region)
})();
```

You can also `await` these values in parallel instead of sequentially, as shown below:

```js {5}
const { getActiveWindow } = require('@nut-tree/nut-js');

(async () => {
    const windowRef = await getActiveWindow();
    const [title, region] = await Promise.all([windowRef.title, windowRef.region])
    console.log(title, region)
})();
```

Additionally, please note that this script will always detail the window information of the shell you run it from. To play around with getting the details of a different window, consider adding a delay before calling [`getActiveWindow`](https://nut-tree.github.io/apidoc/interfaces/window_api_interface.WindowApi.html#getActiveWindow). We can use `nut.js`' own [`sleep`](https://nut-tree.github.io/apidoc/modules/sleep_function.html) helper function to achieve this:


```js {1,4}
const { getActiveWindow, sleep } = require('@nut-tree/nut-js');

(async () => {
    await sleep(4000) // delay for 4 seconds before continuing
    const windowRef = await getActiveWindow();
    const [title, region] = await Promise.all([windowRef.title, windowRef.region])
    console.log(title, region)
})();
```

## Examples

### Clicking in the active window

```js
const { getActiveWindow, centerOf, randomPointIn, mouse, sleep } = require('@nut-tree/nut-js');

(async () => {
    const windowRef = await getActiveWindow();
    const region = await windowRef.region
    await mouse.setPosition(await centerOf(region))
    await mouse.leftClick()
    await sleep(1000)
    await mouse.setPosition(await randomPointIn(region))
    await mouse.leftClick()
})();
```

### Log active window info repeatedly

```js
const { getActiveWindow } = require('@nut-tree/nut-js');

(async () => {
    setInterval(async () => {
        const windowRef = await getActiveWindow()
        const [title, region] = await Promise.all([windowRef.title, windowRef.region])
        console.log(title, region.toString())
    }, 2000)
})();
```