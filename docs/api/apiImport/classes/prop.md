---
title: Prop
description: A Prop represents a Dynamic Mesh which can be spawned in the world, can be grabbed around by characters and have physics.
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Prop" image="/img/docs/props.webp" />


## Examples

```lua
local my_prop = Prop(
  Vector(-900, 185, 215),
  Rotator(0, 90, 90),
  "helix::SM_Crate_07"
)
```


## Constructors

<ConstructorDeclaration type="Class" name="Prop" />

///info

If the Prop was spawned by the Client. It will have all interactions disabled (e.g. it will not be able to be grabbed by Characters).

///

///info

Props smaller than radius **40** units or very thin (any side smaller than **20** units) will have **CCD** (Continuous Collision Detection) enabled automatically to avoid falling through the floor or other objects. *This will slightly increase the performance cost of them!*

///


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Prop" />


## Functions

<FunctionsDeclaration type="Class" name="Prop" />


## Events

<EventsDeclaration type="Class" name="Prop" />
