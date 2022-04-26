---
sidebar_position: 4
---

# Jest integration

nut.js provides custom matchers for Jest, which allows you to write UI tests using well known syntax.

## Setup

In order to use our custom matchers we need to extend Jest's `expect`

```js
const {jestMatchers} = require("@nut-tree/nut-js");

expect.extend(jestMatchers);
```

## [`toBeAt`](https://nut-tree.github.io/apidoc/modules/expect_matchers_toBeAt_function.html#toBeAt)

`toBeAt` is a matcher which verifies mouse cursor position.

It receives a [Point](https://nut-tree.github.io/apidoc/classes/point_class.Point.html) which specifies the expected [mouse](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html) cursor position on screen.

```js
const {jestMatchers, mouse, Point} = require("@nut-tree/nut-js");

expect.extend(jestMatchers);

describe("Basic test with custom Jest matchers", () => {
    it("should verify that cursor is at a certain position", async () => {
        // GIVEN
        const targetPoint = new Point(10, 10);

        // WHEN
        await mouse.setPosition(targetPoint);

        // THEN
        await expect(mouse).toBeAt(targetPoint);
    });
});
```

It also supports negation as known from other matchers:

```js
const {jestMatchers, mouse, Point} = require("@nut-tree/nut-js");

expect.extend(jestMatchers);

describe("Basic test with custom Jest matchers", () => {
    it("should verify that cursor is not at a certain position", async () => {
        // GIVEN
        const targetPoint = new Point(10, 10);
        const wrongPoint = new Point(10, 10);

        // WHEN
        await mouse.setPosition(targetPoint);

        // THEN
        await expect(mouse).not.toBeAt(wrongPoint);
    });
});
```

## [`toBeIn`](https://nut-tree.github.io/apidoc/modules/expect_matchers_toBeIn_function.html#toBeIn)

`toBeIn` allows us to verify whether our [mouse](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html) cursor is located within a certain [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) or not.

```js
const {jestMatchers, mouse, Point} = require("@nut-tree/nut-js");

expect.extend(jestMatchers);

describe("Basic test with custom Jest matchers", () => {
    it("should verify that cursor is within a certain region", async () => {
        // GIVEN
        const targetPoint = new Point(10, 10);
        const targetRegion = new Region(5, 5, 10, 10);

        // WHEN
        await mouse.setPosition(targetPoint);

        // THEN
        await expect(mouse).toBeIn(targetRegion);
    });
});
```

Just like [`toBeAt`](#tobeat), it supports negation:

```js
const {jestMatchers, mouse, Point} = require("@nut-tree/nut-js");

expect.extend(jestMatchers);

describe("Basic test with custom Jest matchers", () => {
    it("should verify that cursor is not within a certain region", async () => {
        // GIVEN
        const targetPoint = new Point(10, 10);
        const targetRegion = new Region(100, 100, 10, 10);

        // WHEN
        await mouse.setPosition(targetPoint);

        // THEN
        await expect(mouse).not.toBeIn(targetRegion);
    });
});
```

## [`toShow`](https://nut-tree.github.io/apidoc/modules/expect_matchers_toShow_function.html#toShow)

Sometimes we want to verify that our [screen](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html) displays a certain image.

`toShow` receives a filename of an image in our [resourceDirectory](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#config) and checks whether it's visible on our screen or not.

```js
const {jestMatchers, screen} = require("@nut-tree/nut-js");

expect.extend(jestMatchers);

describe("Basic test with custom Jest matchers", () => {
    it("should verify that the API-screen shows a certain image", async () => {
        // GIVEN
        screen.config.resourceDirectory = "../../e2e/assets";

        // WHEN

        // THEN
        await expect(screen).toShow("an_image.png");
    });
});
```

Once again, it is also possible to negate an expectation:

```js
const {jestMatchers, screen} = require("@nut-tree/nut-js");

expect.extend(jestMatchers);

describe("Basic test with custom Jest matchers", () => {
    it("should verify that the API-screen shows a certain image", async () => {
        // GIVEN
        screen.config.resourceDirectory = "../../e2e/assets";

        // WHEN

        // THEN
        await expect(screen).not.toShow("different_image.png");
    });
});
```
