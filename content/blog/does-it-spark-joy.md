---
slug: does-it-spark-joy
title: Does it spark joy?
author: Simon Hofmann
author\_title: Maintainer @ nut.js
author\_url: https://github.com/s1hofmann
author\_image\_url: https://avatars.githubusercontent.com/u/7813765?s=60&v=4
tags: [building, status]
---

# Does it spark joy?

Sometimes you've got to ask this simple question. Does something spark joy for you?
In my case, something that definitely does not spark joy is updating `opencv4nodejs-prebuilt`. The reason being is the fact that `opencv4nodejs` relies on [ Native Abstractions for Node.js ](https://github.com/nodejs/nan "Native Abstractions for Node.js"), which in turn means that on every new node or Electron release, I'd have to provide additional prebuilds.
In theory, this sound rather straightforward. Add a new node / Electron version to your CI config and off we go, but reality looks a bit different.
Hands down, `opencv4nodejs` is great. It's configurable, compatible with recent OpenCV versions and async. However, it also has its peculiarities. 

It relies on a custom npm package which provides a wrapper around the whole OpenCV CMake build. This way it’s possible to configure and build OpenCV without leaving the well known npm ecosystem. While this approach definitely has its benefits, it’s an additional burden for me. When I started building nut.js I just used opencv4nodejs. But since I envisioned the installation of nut.js as straight forward as possible the whole „we build everything for you on install" just didn’t suite me. 
That’s how I ultimately ended up adopting two codebases by forking both the npm OpenCV build and opencv4nodejs itself to provide prebuilt binaries.

As time went by, I noticed a few things I definitely wanted to change:

- node ABI dependence: Every new node release requires new prebuilds which is the sole reason nut.js is running a bit late with support latest node versions 
- node-gyp: I don’t know why this build system is still so popular. I’m not a fan
- Way too much functionality: opencv4nodejs aims to provide general purpose bindings for OpenCV while I’m only requiring a very small set of features 
- Mental load: I’m not particularly interested in deep diving another two codebases
- Complexity: Even tough the setup works I’m the only one who knows why

To put it in a nutshell (haha): I’m constantly looking for alternative solutions which solve the above points. I recently started digging into something which might be promising, I’ll let you know once I know!

Best regards 

Simon