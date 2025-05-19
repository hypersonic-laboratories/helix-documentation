---
title: HPlayer
description: ''
tags: [class]
---
<HeaderDeclaration type="Class" name="HPlayer" />
`HPlayer` is a high-level wrapper for the local or remote player controller.
It extends the core functionality of `Controller` class, providing utility methods and accessors commonly used in gameplay scripting.
Unlike actors or components, HPlayer is not spawned manually. Instead, it represents an already-existing controller instance, typically associated with a connected player
Each connected player (local or remote) can be accessed and controlled through this class, and a global Players table keeps track of all active instances

/// tip
`HPlayer` is a `Controller` so it inherits all functions from [Controller](#controller)
///

:::tip
Since `HPlayer` wraps a `Controller`, it inherits all functions from [Controller](#controller).
:::

## Functions
<FunctionsDeclaration type="Class" name="HPlayer" />