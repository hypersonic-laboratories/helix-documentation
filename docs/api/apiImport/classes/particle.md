---
title: Particle
description: Class to spawn Particle Systems used to create effects in the world.
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Particle" image="/img/docs/particle.webp" />

///tip

Both **Cascade** and **Niagara** Particle Systems are supported!

///


## Examples

```lua
local my_particle = Particle(
    Vector(-200, 100, 100),
    Rotator(0, 0, 0),
    "helix::P_Explosion",
    true, -- Auto Destroy?
    true -- Auto Activate?
)
```


## Constructors

<ConstructorDeclaration type="Class" name="Particle" />

///info Note

**`auto_destroy`** means the Entity will be immediately destroyed after spawned, losing references to the _Particle System_ spawned in-game. So if the _Particle System_ itself loops indefinitely, it will keep playing until the Player reconnects.

///


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Particle" />


## Functions

<FunctionsDeclaration type="Class" name="Particle" />


## Events

<EventsDeclaration type="Class" name="Particle" />
