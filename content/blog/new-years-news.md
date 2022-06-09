---
part: Blog
title: New Years News
---

# Happy new year, everyone!

nut.js had a great start into the new year with its long awaited 2.0.0 release!

## Ready for the future?

First and foremost, this release is a huge invest in the future of nut.js by introducing a plugin system that allows users to provide their own implementation details for high-level functionality.
Desktop automation is a really complex topic, and I came to the conclusion that establishing such a system is the only way to keep nut.js future-proof.

While nut.js is equipped with lots of useful functionality you might be missing some feature for your particular job at hand.
The most recent changes enable you to tweak implementation details to your specific needs, giving you full control.

Additionally, having a plugin system allowed me to separate image matching code into its own module.
This separation, grounded on user feedback, solves any compatibility issues between the nut.js core package and current / future releases of node and / or Electron.

The limiting factor with regard to newer versions of node / Electron has always been `opencv4nodejs-prebuilt`, the native addon used to perform image matching.
With this module moved out of the core package, the default nut.js installation no longer suffers from this limitation!
If you do not require on-screen image search, you're all set to use any current node version!

The cherry on top of all this is the fact that without the image matching module, the core package is usable on Apple Silicon.
You can use nut.js on your precious M1 chips, no Rosetta required!

## Where's Waldo?

All this previous lamenting about compatibility with recent node and Electron version, Apple M1 compatibility and so on does not answer one particular question:

> What about image matching using recent node versions or an M1 machine?

And I'm proud to say that there's an answer to this question: [`@nut-tree/nl-matcher`](https://nutjs.dev/docs/plugins/imagefinder#nut-treenl-matcher).

Like I mentioned [in an earlier blog post](https://nutjs.dev/blog/does-it-spark-joy), it always bothered me that every new node or Electron release requires new builds for `opencv4nodejs-prebuilt`.
Eventually I reached the point where I decided to tackle this issue once and for all and started re-implementing the image matching logic from scratch.

I set up a new build pipeline to easily pre-compile and use the most recent OpenCV version and wrote a new node addon to perform image matching using the [Node-API](https://nodejs.org/api/n-api.html) and async workers.
This way I could solve the version compatibility problem.

But I even went one step further.
Having this new and shiny addon and a streamlined build process I actually rented an M1 machine to tackle the Apple Silicon problem as well.
It required some digging and going through CMake docs, but after several debugging runs I'm now able to build a single, universal binary for macOS that is compatible with both Intel and Apple Silicon chips!

## Time for a change!

At this point you might ask yourself why I'm doing all the stuff you read about earlier.

The simple answer is that this is my understanding of how qualitative software development should look like.
nut.js has a thorough set of tests, for both the core package and plugins, automated builds for both releases and snapshots, auto-generated API docs and a nice API.
It powers several open source projects but also gives a lot of freelancers an advantage over their competitors and even startups and established companies are using nut.js in their products.

But this also comes with a cost.
Having all these people rely on software I'm building puts pressure on me to keep things going.
Also, maintaining this project for three platforms is hard at times, and with release 2.0.0 I ultimately crossed a line when I not just dedicated a huge amount of my time, but also my own money to the project to bring on-screen image search to M1 machines.

That's why I updated two of my [GitHub sponsoring tiers](https://github.com/sponsors/s1hofmann/) to include the following:

> Access to non-public nut.js packages

I decided to keep the above-mentioned [`@nut-tree/nl-matcher`](https://nutjs.dev/docs/plugins/imagefinder#nut-treenl-matcher) package exclusive to project sponsors as a sponsoring perk.

A few months ago I did a survey among nut.js users where I asked them what they are using nut.js for and whether they would be willing to support the project either financially or via community contributions to keep it going.
An astonishing amount of people told me that they were using nut.js in commercial projects, be it in freelance / consulting projects or product development, but on the other hand, they are not willing to support the project in any form.

That's a **BIG** issue and really had an impact on me that ultimately contributed to this decision.

I know that I'm really fortunate to already have some sponsors, and I'm really thankful for their support, but overall it's also a thing about valuing someone else's work.

Now before anyone gets mad about the sponsoring tiers I chose:

- I'm confident that nut.js is worth it
- I'm taking maintaining nut.js serious and hard work should be valued
- It easily gives you an advantage over possible competitors

From time to time I will also gift access to private packages to people that are actively participating in our community, because this should be valued as well!
Existing sponsors will of course also get access!

Alright, quite a lot to digest.
Feel free to let it sink and if you feel like it, get in touch with me on Discord.

Here's to a great 2022!

All the best

Simon