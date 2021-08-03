---
sidebar_position: 3
---

# Get Things Moving

Now that we're all set up it's time to get things moving!

In particular, I'm talking about your cursor!

In our `working directory`, let's create a new file, `index.js`.

Open it in your favourite editor and add the following line to get started:

```js
const { mouse } = require("@nut-tree/nut-js");

(async () => {
    
})();
```

`mouse` gives you control over your, well, mouse, so let's play around with it a bit!

**Attention:** nut.js is fully async, so in most examples you will see something like the above snippet, which is an async [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) used as a workaround to use `async` / `await`.

## Simple Movement

```js
const { mouse, left, right, up, down } = require("@nut-tree/nut-js");

(async () => {
    await mouse.move(left(500));
    await mouse.move(up(500));
    await mouse.move(right(500));
    await mouse.move(down(500))
})();
```

nut.js provides a declarative API, so instead of explicitly stating where we want our cursor to be, we can make use [MovementApi](https://nut-tree.github.io/nut.js/interfaces/movementapi.html) functions to move our cursor relative to our current position.

When executed via `node index.js` you'll see that your cursor moves along a square and ends up at its initial position.

## Targeting Specific Points

Moving our cursor in up, down, left or right direction is a good start, but we're not sitting in front of an [Etch A Sketch](https://etchasketch.com).
Let's see how we can target specific points on our screen.

```js
const { mouse, straightTo, Point } = require("@nut-tree/nut-js");

(async () => {
    const target = new Point(500, 350);
    
    await mouse.move(straightTo(target));
})();
```

`straightTo` is another `MovementApi` function which takes a target [Point](https://nut-tree.github.io/nut.js/classes/point.html) and computes a straight line towards it, starting at our current cursor positon.

## Speeding up / Slowing down

In case you want to configure mouse movement speed to go faster / slower, every instance exposed by nut.js provides a `config` object.

The [mouse config object](https://nut-tree.github.io/nut.js/classes/mouse.html#config) allows you to configure movement speed measured in pixels per second.

```js
const { mouse, straightTo, Point } = require("@nut-tree/nut-js");

(async () => {
    mouse.config.mouseSpeed = 2000;
    const fast = new Point(500, 350);
    await mouse.move(straightTo(fast));
    mouse.config.mouseSpeed = 100;
    const slow = new Point(100, 150);
    await mouse.move(straightTo(slow));
})();
```

## Beam me up, Scotty!

Sometimes we don't want to move along a path to reach a certain point.

In such cases, we can rely on [setPosition](https://nut-tree.github.io/apidoc/classes/mouse.html#setposition) to immediately change our cursor position to the provided [Point](https://nut-tree.github.io/apidoc/classes/point.html)

```js
const { mouse, Point } = require("@nut-tree/nut-js");

(async () => {
    const target = new Point(500, 350);
    await mouse.setPosition(target);
})();
```

## Summary

- nut.js provides a `mouse` instance to control your cursor
- Movement speed in pixels / second is configurable via the `config` object
- It provides a high-level [MovementApi](https://nut-tree.github.io/apidoc/interfaces/movementapi.html) for easy relative mouse movement
- For fast changes of cursor position, [setPosition](https://nut-tree.github.io/apidoc/classes/mouse.html#setposition) is the right tool