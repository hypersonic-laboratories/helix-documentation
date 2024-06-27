---
title: Grenade
description: Chad Grenade
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Grenade" image="/img/docs/grenade.webp" />


## Examples

```lua
local new_grenade = Grenade(
	Vector(-900, 185, 215),
	Rotator(0, 90, 90),
	"helix::SM_Grenade_G67",
	"helix::P_Grenade_Special",
	"helix::A_Explosion_Large"
)
```

## Constructors

<ConstructorDeclaration type="Class" name="Grenade" />

///tip

HELIX provides a special _Particle*_ called `helix::P_Grenade_Special` which spawns different particles depending on the surface it explodes, and also if is underwater.

**This "Particle" is just a special identifier which can only be used on Grenades!*

///


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Grenade" />


## Functions

<FunctionsDeclaration type="Class" name="Grenade" />


## Events

<EventsDeclaration type="Class" name="Grenade" />
