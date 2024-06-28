---
title: Melee
description: A Melee represents an Entity which can be Pickable by a Character and can be used to melee attack, Charactes can hold it with hands with pre-defined handling modes.
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Melee" image="/img/docs/torch.webp" />


## Examples

```lua
local crowbar = Melee(
  Vector(-900, 185, 215),
  Rotator(0, 90, 90),
  "helix::SM_Crowbar_01",
  CollisionType.Normal,
  true,
  HandlingMode.SingleHandedMelee,
  ""
)

crowbar:SetScale(Vector(1.5, 1.5, 1.5))
crowbar:AddAnimationCharacterUse("helix::AM_Mannequin_Melee_Slash_Attack")
crowbar:SetDamageSettings(0.3, 0.5)
crowbar:SetCooldown(1.0)
crowbar:SetBaseDamage(40)
```


## Constructors

<ConstructorDeclaration type="Class" name="Melee" />

///tip

HELIX provides a special _Particle*_ called `helix::P_Grenade_Special` which spawns different particles depending on the surface it explodes, and also if is underwater.

**This "Particle" is just a special identifier which can only be used on Grenades!*

///


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Melee" />


## Functions

<FunctionsDeclaration type="Class" name="Melee" />


## Events

<EventsDeclaration type="Class" name="Melee" />


<!-- ## WIP: HandlingModes -->

<!-- TODO: Add Handling Modes images -->