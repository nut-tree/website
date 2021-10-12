---
slug: incremental-steps-devlog
title: Incremental steps - devlog
author: Simon Hofmann
author\_title: Maintainer @ nut.js
author\_url: https://github.com/s1hofmann
author\_image\_url: https://avatars.githubusercontent.com/u/7813765?s=60&v=4
tags: [building, status]
---

# Incremental steps - devlog

First steps have been made!
My endeavour to get rid of nan-type bindings in nut.js, `opencv4nodejs`, to be precise, is making progress.
Slow, but steady.

So far I redesigned how OpenCV itself is built and distributed for further use, solving one of the issues which are bothering me with the existing setup.
This redesign eliminates a whole codebase I had to think through and follows a pretty lean approach for providing precompiled libs.

The setup is already automated for all three platforms and I started a new project which uses these new artefacts.
The process required some tweaking but right now everything fits together really smooth.

As I already said, first steps have been made and I'm looking forward to take the next ones!

Best regards 

Simon
