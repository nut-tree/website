---
part: Plugins
title: ImageFinderInterface
---

Currently, there are two official `ImageFinder` implementations provided by nut.js.

## @nut-tree/template-matcher

--- 

```shell
npm i @nut-tree/template-matcher
```

Initial implementation for on-screen image search.

### Usage

--- 

Simply require / import the package to wire up the provider:

```js
const { screen, imageResource } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher");

(async () => {
  const img = await screen.find(imageResource("..."));
})();
```

## @nut-tree/nl-matcher

--- 

```shell
npm i @nut-tree/nl-matcher
```

**Attention:** `@nut-tree/nl-matcher` is only available to sponsors of nut.js.
In case you want to get access to it, please consult [the sponsoring profile](https://github.com/sponsors/s1hofmann)

**N**ext **L**evel module for image search.

Comes with additional features compared to `@nut-tree/template-matcher`

See the table below for a comparison of both modules:

|                                                               | @nut-tree/template-matcher            | @nut-tree/nl-matcher                  |
|---------------------------------------------------------------|---------------------------------------|---------------------------------------|
| Windows                                                       |                   ✔️                   |                   ✔️                   |
| Linux                                                         |                   ✔️                   |                   ✔️                   |
| Apple (Intel) / Apple (Apple Silicon)                         |                 ✔️ / ❌                 |                 ✔️ / ✔️                 |
| find                                                          |                   ✔️                   |                   ✔️                   |
| findAll                                                       |                   ❌                   |                   ✔️                   |
| Supports node 12 / 13 / 14 / 15 / 16 / 17 / next              | ✔️ / ❌ / ✔️ / ✔️ / ✔️ / ❌ / ❌             | ✔️ / ✔️ / ✔️ / ✔️ / ✔️ / ✔️ / ✔️             |
| Supports Electron 8 / 9 / 10 / 11 / 12 / 13 / 14 / 15 / 16 / next | ✔️ / ✔️ / ✔️ / ✔️ / ✔️ / ✔️ / ❌ / ❌ / ❌ / ❌ | ✔️ / ✔️ / ✔️ / ✔️ / ✔️ / ✔️ / ✔️ / ✔️ / ✔️ / ✔️ |

### Usage

--- 

Simply require / import the package to wire up the provider:

```js
const { screen, imageResource } = require("@nut-tree/nut-js");
require("@nut-tree/nl-matcher");

(async () => {
  const img = await screen.findAll(imageResource("..."));
})();
```
