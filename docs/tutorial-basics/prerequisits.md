---
sidebar_position: 1
---

# Prerequisits

nut.js comes with a pre-built version of OpenCV for your respective target platform.
In order to use these pre-compiled bindings, certain runtime conditions have to be met.

## Windows

In order to install nut.js on Windows, please make sure to have the [Microsoft Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) installed.

## macOS

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

## Linux

Depending on your distribution, Linux setups may differ.

In general, nut.js requires

- libXtst

Installation on `*buntu` distributions:
```bash
sudo apt-get install build-essential libxtst-dev
```

Setups on other distributions might differ.

## node

nut.js is built and tested against various versions of node.
However, I'd recommend running the latest available LTS version of node (`lts/fermium` at the time of writing) and using a version manager like [nvm](https://github.com/nvm-sh/nvm)