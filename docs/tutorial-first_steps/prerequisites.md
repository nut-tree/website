---
sidebar_position: 1
---

# Prerequisites

nut.js comes with a pre-built version of OpenCV for your respective target platform.
In order to use these pre-compiled bindings, certain runtime conditions have to be met.

## Windows

In order to install nut.js on Windows, please make sure to have the [Microsoft Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) installed.

In case you're running Windows 10 N, please make sure to have the [Media Feature Pack](https://support.microsoft.com/en-us/topic/media-feature-pack-for-windows-10-n-may-2020-ebbdf559-b84c-0fc2-bd51-e23c9f6a4439) installed as well.

## macOS

On macOS, Xcode command line tools are required.
You can install them by running
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
However, for best compatibility, it's recommended to run the latest available LTS version of node (`lts/gallium` at the time of writing) and using a version manager like [nvm](https://github.com/nvm-sh/nvm)