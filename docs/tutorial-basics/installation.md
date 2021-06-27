---
sidebar_position: 1
---

# Installation

`nut.js` comes with a pre-built version of OpenCV for your respective target platform.
In order to use these pre-compiled bindings, certain runtime conditions have to be met.

## Prerequisites

This section lists runtime requirements for `nut.js` on the respective target platform.

#### Windows

In order to install `nut.js` on Windows, please make sure to have the [Microsoft Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) installed.

#### macOS

On macOS, Xcode command line tools are required.
You can install them by running
```bash
xcode-select --install
```

**Attention**:

In case you're experiencing problems like your mouse not moving or your keyboard not typing,
please make sure to give the process you're executing your tests with accessibility permissions.

If an application wants to use accessibility features, a permission pop-up should be shown.
If not, you could try to manually add the application you're running the script from.

`Settings -> Security & Privacy -> Privacy -> Accessibility -> Add...`

#### Linux

Depending on your distribution, Linux setups may differ.

In general, `nut.js` requires

- libXtst

Installation on `*buntu` distributions:
```bash
sudo apt-get install build-essential libxtst-dev
```

Setups on other distributions might differ.

## Install `nut.js`

Running 

```bash
npm i @nut-tree/nut-js
```

or

```bash
yarn add @nut-tree/nut-js
```

will install `nut.js` and its required dependencies.

### Snapshot releases

`nut.js` also provides snapshot releases which allows to test upcoming features.

Running 

```bash
npm i @nut-tree/nut-js@next
```

or

```bash
yarn add @nut-tree/nut-js@next
```

will install the most recent development release of `nut.js`.

**Attention**: While snapshot releases are great to work with upcoming features before a new stable release, it is still a snapshot release.
Please bear in mind that things might change and / or break on snapshot releases, so it is not recommended using them in production.
