---
sidebar_position: 2
---

# Mouse Control

nut.js allows to simulate mouse input by moving the cursor, clicking mouse buttons or performing dragging gestures.

## Configuration

The nut.js [mouse](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html) comes with a [config](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#config) object which allows to configure it's behaviour.

### `autoDelayMs`

`mouse.config.autoDelayMs` configures the delay between mouse clicks and / or scrolls.

### `mouseSpeed`

`mouse.config.mouseSpeed` configures mouse movement speed in pixels per second.

## [`setPosition`](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#setPosition)

`setPosition` takes a [Point](https://nut-tree.github.io/apidoc/classes/point_class.Point.html) and moves the mouse cursor to this position instantly.

## [`getPosition`](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#getPosition)

`getPosition` returns a Promise which resolves to the current cursor [Point](https://nut-tree.github.io/apidoc/classes/point_class.Point.html)

## [`move`](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#move)

`move` is the general purpose method for mouse movement in nut.js.
It receives a path given either as [Point[]](https://nut-tree.github.io/apidoc/classes/point_class.Point.html) or [Promise<Point[]>](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#getPosition) and a movement function of type `(amountOfSteps: number, speedInPixelsPerSecond: number): number[]`, returns a list of durations in nanoseconds.

`mouse.move` will follow this path in timesteps provided by the movement function.
This way it's possible to fully customize mouse movment behaviour by implementing own functions for path calculation and / or movment timing.

### [`straightTo`](https://nut-tree.github.io/apidoc/interfaces/movement_api_interface.MovementApi.html#straightTo)

`straightTo` is a movement function which takes a target [Point](https://nut-tree.github.io/apidoc/classes/point_class.Point.html) and calculates a path of [Point[]](https://nut-tree.github.io/apidoc/classes/point_class.Point.html) leading from the current mouse position to the desired target.

#### [`centerOf`](https://nut-tree.github.io/apidoc/modules/location_function.html#centerOf)

`centerOf` is a helper function which takes a [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) and returns the center [Point](https://nut-tree.github.io/apidoc/classes/point_class.Point.html) of that region.

`centerOf` is a great fit for [`straightTo`](#straightto) as it allows us to move to the center of a [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) returned by e.g. [`screen.find`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#find).

```js
await mouse.move(straightTo(centerOf(screen.find(...))));
```

#### [`randomPointIn`](https://nut-tree.github.io/apidoc/modules/location_function.html#randomPointIn)

`randomPointIn` is another helper function which takes a [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) and returns a random [Point](https://nut-tree.github.io/apidoc/classes/point_class.Point.html) within that region.

`randomPointIn` is a great fit for [`straightTo`](#straightto) as it allows us to move to the center of a [Region](https://nut-tree.github.io/apidoc/classes/region_class.Region.html) returned by e.g. [`screen.find`](https://nut-tree.github.io/apidoc/classes/screen_class.ScreenClass.html#find).

```js
await mouse.move(straightTo(randomPointIn(screen.find(...))));
```

### [`left`](https://nut-tree.github.io/apidoc/interfaces/movement_api_interface.MovementApi.html#left)

`left` is a relative movement function which returns a path moving `x` pixels to the left of your current mouse position.

```js
await mouse.move(left(10));
```

### [`right`](https://nut-tree.github.io/apidoc/interfaces/movement_api_interface.MovementApi.html#right)

`right` is a relative movement function which returns a path moving `x` pixels to the right of your current mouse position.

```js
await mouse.move(right(10));
```

### [`up`](https://nut-tree.github.io/apidoc/interfaces/movement_api_interface.MovementApi.html#up)

`up` is a relative movement function which returns a path moving `x` pixels up from your current mouse position.

```js
await mouse.move(up(10));
```

### [`down`](https://nut-tree.github.io/apidoc/interfaces/movement_api_interface.MovementApi.html#down)

`down` is a relative movement function which returns a path moving `x` pixels down from your current mouse position.

```js
await mouse.move(down(10));
```

## [`leftClick`](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#leftClick)

`leftClick` performs a click with the left mouse button at the current cursor position.

## [`rightClick`](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#rightClick)

`rightClick` performs a click with the right mouse button at the current cursor position.

## [`scrollDown`](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#scrollDown)

`scrollDown` scrolls `x` "ticks` downwards. Absolute scroll width depends on your system.

## [`scrollUp`](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#scrollUp)

`scrollUp` scrolls `x` "ticks` upwards. Absolute scroll width depends on your system.

## [`scrollLeft`](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#scrollLeft)

`scrollLeft` scrolls `x` "ticks` to the left. Absolute scroll width depends on your system.

## [`scrollRight`](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#scrollRight)

`scrollRight` scrolls `x` "ticks` to the right. Absolute scroll width depends on your system.

## [`drag`](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#drag)

Similar to ['move'](#move), `drag` move the mouse cursor along a given path.

While moving, it presses and holds the left mouse button, performing a drag gesture.

## [`pressButton`](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#pressButton)

`pressButton` presses and holds a given [mouse button](https://nut-tree.github.io/apidoc/enums/button_enum.Button.html).

## [`releaseButton`](https://nut-tree.github.io/apidoc/classes/mouse_class.MouseClass.html#releaseButton)

`releaseButton` releases a given [mouse button](https://nut-tree.github.io/apidoc/enums/button_enum.Button.html).

