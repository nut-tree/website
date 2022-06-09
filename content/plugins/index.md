---
part: Plugins
title: Provider Plugins
---

nut.js has a modular architecture where implementation details are provided by, well, providers.

This architecture makes nut.js really flexible and configurable, allowing users to use different implementations for a particular functionality, or to replace one of the built-in providers.

One such example is the [`ImageFinderInterface`](https://nut-tree.github.io/apidoc/interfaces/provider_image_finder_interface.ImageFinderInterface.html), which is responsible for providing an image matching implementation to perform the actual on-screen image search.

A full list of all provider interfaces is available in the [API docs](https://nut-tree.github.io/apidoc/modules/provider.html).