---
sidebar_position: 2
---

# Installation

With our prerequisits met, let’s continue installing. 
The following steps are meant to be carried out in a dedicated directory of your choice.
I will simply refer to this directory as `working directory`.

## npm project 

Let’s first initialize a new npm project in our `working directory` by executing 

`npm init`

Feel free to fill out the interactive dialogue, but it’s not a hard requirement to continue the initial setup.

(You could even accept all defaults by running `npm init -y`)

## Install nut.js

Running 

```bash
npm i @nut-tree/nut-js
```

or

```bash
yarn add @nut-tree/nut-js
```

in our newly created npm project will install nut.js and its required dependencies.

### Snapshot releases

nut.js also provides snapshot releases which allows to test upcoming features.

Running 

```bash
npm i @nut-tree/nut-js@next
```

or

```bash
yarn add @nut-tree/nut-js@next
```

will install the most recent development release of nut.js.

**Attention**: While snapshot releases are great to work with upcoming features before a new stable release, it is still a snapshot release.
Please bear in mind that things might change and / or break on snapshot releases, so it is not recommended using them in production.
