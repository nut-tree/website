---
part: tutorials
title: First Steps
---

# Prerequisites

---

nut.js comes with a pre-built version of OpenCV for your respective target platform.
In order to use these pre-compiled bindings, certain runtime conditions have to be met.

## Windows

---

In order to install nut.js on Windows, please make sure to have the [Microsoft Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) installed.

In case you're running Windows 10 N, please make sure to have the [Media Feature Pack](https://support.microsoft.com/en-us/topic/media-feature-pack-for-windows-10-n-may-2020-ebbdf559-b84c-0fc2-bd51-e23c9f6a4439) installed as well.

## macOS

---

On macOS, Xcode command line tools are required.
You can install them by running:
```bash
xcode-select --install
```

**Attention**:

In case you're experiencing problems like your mouse not moving or your keyboard not typing,
please make sure to give the process you're executing your tests with accessibility permissions.

nut.js will give you a subtle hint in case permissions are lacking:

`##### WARNING! The application running this script is not a trusted process! Please visit https://github.com/nut-tree/nut.js#macos #####`

When an application wants to use accessibility features, a permission pop-up should be shown.
If not, you could try to manually add the application you're running the script from.

`Settings -> Security & Privacy -> Privacy tab -> Accessibility -> Add...`

For example, if you want to execute your node script in e.g. `iTerm2`, you'd have to add `iTerm.app` to the list.
When running your script from a built-in terminal in e.g. `VSCode` or `IntelliJ`, you'd have to add the respective IDE.

<p align="center">
    <img src="https://github.com/nut-tree/nut.js/raw/develop/.gfx/permissions.png" alt="accessibility permissions screen"/>
</p>

## Linux

---

Depending on your distribution, Linux setups may differ.

In general, nut.js requires

- libXtst

Installation on `*buntu` distributions:
```bash
sudo apt-get install build-essential libxtst-dev
```

Setups on other distributions might differ.

## node

---

nut.js is built and tested against various versions of node.
However, for best compatibility, it's recommended to run the latest available LTS version of node (`lts/gallium` at the time of writing) and using a version manager like [nvm](https://github.com/nvm-sh/nvm).

# Installation

---

With our prerequisites met, let’s continue installing.
The following steps are meant to be carried out in a dedicated directory of your choice.
We will simply refer to this directory as `working directory`.

## npm project

---

Let’s first initialize a new npm project in our `working directory` by executing:

`npm init`

Feel free to fill out the interactive dialogue, but it’s not a hard requirement to continue the initial setup.

(You could even accept all defaults by running `npm init -y`)

## Install nut.js

---

Running

```bash
npm i @nut-tree/nut-js
```

or

```bash
yarn add @nut-tree/nut-js
```

in our newly created npm project will install nut.js and its required dependencies.

### Snapshot releases

---

nut.js also provides snapshot releases which allow testing of upcoming features.

Running

```bash
npm i @nut-tree/nut-js@next
```

or

```bash
yarn add @nut-tree/nut-js@next
```

will install the most recent development release of nut.js.

**Attention**: While snapshot releases are great to work with upcoming features before a new stable release, it is still a snapshot release.
Please bear in mind that things might change and / or break on snapshot releases, so it is not recommended using them in production.

# Get Things Moving

---

Now that we're all set up it's time to get things moving!

In our `working directory`, let's create a new file, `index.js`.

Open it in your favourite editor and add the following lines to get started:

```js
const { mouse } = require("@nut-tree/nut-js");

(async () => {
    
})();
```

`mouse` gives you control over your, well, mouse, so let's play around with it a bit!

**Attention:** nut.js is fully async, so in most examples you will see something like the above snippet, which is an async [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) used as a workaround to use `async` / `await` at the top-level.

## Simple Movement

---

```js
const { mouse, left, right, up, down } = require("@nut-tree/nut-js");

(async () => {
    await mouse.move(left(500));
    await mouse.move(up(500));
    await mouse.move(right(500));
    await mouse.move(down(500))
})();
```

nut.js provides a declarative API, so instead of explicitly stating where we want our cursor to be, we can use the [MovementApi](https://nut-tree.github.io/apidoc/interfaces/movement_api_interface.MovementApi.html) functions to move our cursor relative to our current position.

When executed via `node index.js` you'll see that your cursor moves along a square and ends up at its initial position.

## Targeting Specific Points

---

Moving our cursor in up, down, left or right direction is a good start, but we're not sitting in front of an [Etch A Sketch](https://etchasketch.com).
Let's see how we can target specific points on our screen.

```js
const { mouse, straightTo, Point } = require("@nut-tree/nut-js");

(async () => {
    const target = new Point(500, 350);
    
    await mouse.move(straightTo(target));
})();
```

`straightTo` is another `MovementApi` function which takes a target [Point](https://nut-tree.github.io/apidoc/classes/point_class.Point.html) and computes a straight line towards it, starting at our current cursor position.

## Speeding up / Slowing down

---

In case you want to configure mouse movement speed to go faster / slower, every instance exposed by nut.js provides a `config` object.

The [mouse config object](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#config) allows you to configure movement speed measured in pixels per second.

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

---

Sometimes we don't want to move along a path to reach a certain point.

In such cases, we can rely on [setPosition](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#setPosition) to immediately change our cursor position to the provided [Point](https://nut-tree.github.io/apidoc/classes/point_class.Point.html).

```js
const { mouse, Point } = require("@nut-tree/nut-js");

(async () => {
    const target = new Point(500, 350);
    await mouse.setPosition(target);
})();
```

## Summary

---

- nut.js provides a `mouse` instance to control your cursor.
- Movement speed in pixels / second is configurable via the `config` object.
- It provides a high-level [MovementApi](https://nut-tree.github.io/apidoc/interfaces/movement_api_interface.MovementApi.html) for easy relative mouse movement.
- For fast changes of cursor position, [setPosition](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#setPosition) is the right tool.
