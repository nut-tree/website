---
sidebar_position: 2
---

# Region

When searching for images on your screen, nut.js uses the [`Region`](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) datatype to represent a 2D area on your screen.

A [`Region`](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) holds a `left`, `top`, `width` and `height` property to represent its size and location, as well as an [`area()`](https://nut-tree.github.io/apidoc/classes/region_class.Region.html#area) method that calculates the area occupied by a particular [`Region`](https://nut-tree.github.io/apidoc/classes/region_class.Region.html)

## Sample

```js
const r = new Region(10, 100, 400, 300);

console.log(r);

const regionArea = r.area();
```
