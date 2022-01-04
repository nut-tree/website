---
slug: going-on-devlog
title: Going on - devlog
author: Simon Hofmann
author\_title: Maintainer @ nut.js
author\_url: https://github.com/s1hofmann
author\_image\_url: https://avatars.githubusercontent.com/u/7813765?s=60&v=4
tags: [building, status]
---

Those of you who are keeping an eye on the nut.js repository might have noticed something — quite a big change is on the horizon!

As I already mentioned [in my previous post](https://nutjs.dev/blog/incremental-steps-devlog), I'm trying to reduce the amount of work required to keep nut.js compatible with upcoming node and Electron version. This became even more pressing since the Electron team switched to an eight weeks release cycle, so nut.js would require a new release every 8 weeks as well to keep up.
The single reason for this is the `opencv4nodejs-prebuilt` dependency required to provide all the image matching functionality.
Even though I'm making progress on building a replacement that does not suffer this version dependence, it'll take some more time to get it released.
So, while working on solving this issue, I also decided to tackle two things mentioned in the nut.js user survey I posted a while ago.
Turns out, nut.js users are undecided when it comes to image processing.
Half of you are big fans, the others are unhappy about the drawbacks like node version dependence or package size.
That, plus the wish for a plug-in system in nut.js, lead to the following strategy towards the next major release:

1. Establish a simple plug-in system to make underlying provider packages configurable
2. Pull existing image processing code and dependencies out of nut.js into a dedicated package that utilises the newly created plug-in system, making image matching an explicit opt-in feature
3. Keep working on a proper replacement package for image matching that will seamlessly replace the existing plug-in package

## What does this mean for nut.js users?

Unfortunately, there will be breaking changes.
At least for those of you using image matching functionality.
The good thing is, it should be relatively simple to fix these.

Instead of only installing nut.js via e.g. `npm i @nut-tree/nut-js`, you'll have to install an additional image matching plug-in package.

### Let's look at an example:

1. Create a new project and install nut.js
```bash
npm init -y
npm i @nut-tree/nut-js@next
```

2. Create an `index.js` file with the following content:
```js
const { screen, imageResource } = require("@nut-tree/nut-js");

(async () => {
  try {
    await screen.find(imageResource("img.png"));
  } catch (e) {
    console.error(e);
  }
})();
```

3. Run the example and check its output
```bash
node index.js

Searching for img.png failed. Reason: 'Error: No ImageFinder registered'
```

The error output tells you that nut.js cannot search for your template image since no suitable `ImageFinder` has been registered.

A similar error appears when trying to save a screenshot to disk:
```js
const { screen, imageResource } = require("@nut-tree/nut-js");

(async () => {
  try {
    await screen.capture(imageResource("foo"));
  } catch (e) {
    console.error(e);
  }
})();
```

```bash
Error: No ImageWriter registered
```

This again tells us that a plug-in suitable for writing image files to disk is missing.

#### How to we solve this?

As a first step, let's install the newly created plug-in containing the image processing code extracted from nut.js.

```bash
npm i @nut-tree/template-matcher
```

Once installed, all we have to do is import it in our code:

```js
const { screen, imageResource } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher"); // THIS IS NEW

(async () => {
  try {
    await screen.find(imageResource("img.png"));
  } catch (e) {
    console.error(e);
  }
})();
```

That's all it takes to put the previous image matching code back in place:

```bash
Searching for img.png failed. Reason: 'Error: No match with required confidence 0.99. Best match: 0.9249920099973679 at (384, 26, 409.5, 62)'
```

## I'm not using any image matching functionality, do I have to do anything?

Short answer: No!
If you haven't used any image matching functionality in your code, you won't encounter any problems. Actually, you'll even profit from it!

By extracting the image matching code into a separate plug-in the nut.js base package itself:

- Lost around 70 MB of required disk space
- Is no longer dependent on a certain node version, so you're able to use it with e.g. node 17 right away

## Awesome, can I start using it?

Currently, everything I just showed you is available in the latest `@next` release.

**But please be warned!**
This is still under active development and since it's a snapshot release, things might change/break at any time until it gets released as `2.0.0`!

The main reason for this blog post is to inform users early on, so hopefully there won't be too many surprises once it's stable!

With that in mind, feel free to test it and let me know what you think about it!

Best regards,

Simon